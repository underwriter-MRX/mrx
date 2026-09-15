"""MRX public discovery + IndexNow notifier. Standard library, no LLM or secret required."""
import argparse
import concurrent.futures
import fcntl
import hashlib
import json
import os
import re
import time
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener
from urllib.robotparser import RobotFileParser

SITE = 'https://mineralrightsxchange.com'
INDEXNOW = 'https://api.indexnow.org/indexnow'
MAX_BODY = 5_000_000
PRIVATE = re.compile(r'/(?:api|account|staff|admin|owner-intake|knowledge|staged|drafts)(?:/|$)|/thank-you(?:/|$)', re.I)
BOTS = ['Googlebot', 'bingbot', 'OAI-SearchBot', 'PerplexityBot', 'Claude-SearchBot', 'GPTBot', 'ClaudeBot']


def public_url(value):
    u = urlsplit(value)
    if (u.geturl() != value or u.scheme != 'https' or u.netloc != 'mineralrightsxchange.com' or u.query or u.fragment
            or not re.fullmatch(r'/[a-zA-Z0-9_./~-]*', u.path) or any(p in ('.', '..') for p in u.path.split('/'))
            or '%' in u.path or '\\' in u.path or PRIVATE.search(u.path)):
        raise ValueError('Only canonical, public MRX URLs without queries are allowed.')
    return value


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def request(url, payload=None):
    if url != INDEXNOW:
        public_url(url)
    headers = {'User-Agent': 'MRX-Content-Discovery/1.0', 'Accept-Encoding': 'identity'}
    data = None
    if payload is not None:
        if url != INDEXNOW:
            raise ValueError('Submission endpoint is fixed to IndexNow.')
        data = json.dumps(payload).encode()
        headers['Content-Type'] = 'application/json; charset=utf-8'
    try:
        response = build_opener(NoRedirect()).open(Request(url, data=data, headers=headers), timeout=20)
    except HTTPError as error:
        response = error
    with response:
        body = response.read(MAX_BODY + 1)
        if len(body) > MAX_BODY:
            raise ValueError('Response exceeds the discovery size limit.')
        return response.status, dict(response.headers.items()), body


def get(url, media):
    status, headers, body = request(url)
    content_type = next((v for k, v in headers.items() if k.lower() == 'content-type'), '').lower()
    if status != 200 or not any(m in content_type for m in media):
        raise ValueError(f'Discovery fetch failed: {url}, HTTP {status}, type {content_type}')
    return headers, body


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals = []
        self.noindex = False
        self.refresh = False
        self.text = []
        self.hidden = 0
        self.h1_count = 0
        self.title_parts = []
        self.in_title = False
        self.external_sources = set()
        self.descriptions = []
        self.schema_text = []
        self.in_schema = False
        self.main_count = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'title':
            self.in_title = True
        if tag == 'h1':
            self.h1_count += 1
        if tag == 'main':
            self.main_count += 1
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.in_schema = True
        if tag == 'a' and a.get('href', '').startswith('https://'):
            host = urlsplit(a['href']).hostname
            if host and host != 'mineralrightsxchange.com':
                self.external_sources.add(a['href'])
        if tag in ('script', 'style', 'noscript'):
            self.hidden += 1
        if tag == 'link' and a.get('rel', '').lower() == 'canonical':
            self.canonicals.append(a.get('href'))
        if tag == 'meta':
            if a.get('name', '').lower() == 'description':
                self.descriptions.append(a.get('content', ''))
            if a.get('name', '').lower() in ('robots', 'googlebot', 'bingbot'):
                self.noindex |= bool(re.search(r'\b(noindex|none)\b', a.get('content', ''), re.I))
            self.refresh |= a.get('http-equiv', '').lower() == 'refresh'

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script':
            self.in_schema = False
        if tag in ('script', 'style', 'noscript'):
            self.hidden = max(0, self.hidden - 1)

    def handle_data(self, data):
        if self.in_title:
            self.title_parts.append(data)
        if self.in_schema:
            self.schema_text.append(data)
        if not self.hidden and data.strip():
            self.text.append(data.strip())


def manifest():
    _, body = get(SITE + '/crawler-manifest.json', ['application/json'])
    data = json.loads(body)
    if data.get('version') != 2 or data.get('origin') != SITE or data.get('hash_policy') != 'sha256-html-without-cloudflare-email-comments-v1':
        raise ValueError('Unsupported MRX manifest.')
    pages = data.get('pages')
    if not isinstance(pages, list) or not 1 <= len(pages) <= 10000:
        raise ValueError('Manifest needs 1–10000 public pages.')
    seen = set()
    for entry in pages:
        url = public_url(entry['url'])
        if not url.endswith('/') or url in seen or not re.fullmatch('[a-f0-9]{64}', entry['sha256']):
            raise ValueError('Invalid or duplicate manifest page.')
        seen.add(url)
    ownership = data['indexnow']
    if not re.fullmatch('[a-zA-Z0-9-]{8,128}', ownership['key']):
        raise ValueError('Invalid ownership key.')
    if ownership['key_location'] != SITE + '/indexnow-key.txt':
        raise ValueError('Unexpected ownership-key location.')
    return data


def discovery():
    data = manifest()
    _, robot_bytes = get(SITE + '/robots.txt', ['text/plain'])
    robots_text = robot_bytes.decode('utf-8')
    if SITE + '/sitemap_index.xml' not in robots_text:
        raise ValueError('robots.txt does not advertise the canonical sitemap.')
    robots = RobotFileParser()
    robots.parse(robots_text.splitlines())
    _, xml = get(SITE + '/sitemap_index.xml', ['xml'])
    root = ET.fromstring(xml)
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    urls = set()
    segments = root.findall('s:sitemap/s:loc', ns)
    if not 1 <= len(segments) <= 20:
        raise ValueError('Invalid sitemap index.')
    for loc in segments:
        url = public_url(loc.text)
        if not re.fullmatch(re.escape(SITE) + r'/sitemap-[a-z]+\.xml', url) or 'staged' in url:
            raise ValueError('Unexpected sitemap segment.')
        _, body = get(url, ['xml'])
        for item in ET.fromstring(body).findall('s:url/s:loc', ns):
            urls.add(public_url(item.text))
    if urls != {entry['url'] for entry in data['pages']}:
        raise ValueError('Live sitemap and crawler manifest disagree; deployment may be incomplete or cached.')
    for path in ['/llms.txt', '/llms-full.txt']:
        _, body = get(SITE + path, ['text/plain'])
        text = body.decode('utf-8')
        if not text.strip() or SITE not in text:
            raise ValueError('LLM discovery file is empty or lacks canonical MRX references.')
        for url in re.findall(r'https://mineralrightsxchange\.com[^\s\)\]>"\']*', text):
            public_url(url + '/' if url == SITE else url)
    return data, robots


def content_hash(body):
    # Only these exact transport comments are ignored; all content/injections remain.
    return hashlib.sha256(body.replace(b'<!--email_off-->', b'').replace(b'<!--/email_off-->', b'')).hexdigest()


def verify_page(entry, robots):
    url = entry['url']
    if not robots.can_fetch('bingbot', url):
        raise ValueError('bingbot is blocked by robots.txt.')
    headers, body = get(url, ['text/html'])
    if content_hash(body) != entry['sha256']:
        raise ValueError('Live HTML differs from the published manifest; retry after cache/deployment convergence.')
    parsed = Page()
    parsed.feed(body.decode('utf-8'))
    xrobots = ' '.join(v for k, v in headers.items() if k.lower() == 'x-robots-tag')
    if parsed.canonicals != [url] or parsed.noindex or parsed.refresh or re.search(r'\b(noindex|none)\b', xrobots, re.I):
        raise ValueError('Live page is noncanonical, noindex, or a redirect.')
    return parsed


def state_dir():
    return Path(os.environ.get('MRX_CRAWLER_STATE_DIR', Path.home() / '.local/state/mrx-crawlers'))


def read_state():
    file = state_dir() / 'state.json'
    if not file.exists():
        return {'version': 1, 'submitted': {}, 'pending': {}}
    data = json.loads(file.read_text())
    if data.get('version') != 1 or not isinstance(data.get('submitted'), dict) or not isinstance(data.get('pending'), dict):
        raise ValueError('Invalid persisted state; refusing to reset notification history.')
    for url in data['submitted']:
        public_url(url)
    return data


def save_json(path, value):
    temp = path.with_suffix('.tmp')
    temp.write_text(json.dumps(value, indent=2) + '\n')
    temp.replace(path)


def last_report():
    file = state_dir() / 'last-report.json'
    report = json.loads(file.read_text()) if file.exists() else {'status': 'not_run'}
    lock_path = state_dir() / 'sync.lock'
    report['active'] = False
    if lock_path.exists():
        with lock_path.open('a') as lock:
            try:
                fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
                fcntl.flock(lock, fcntl.LOCK_UN)
            except BlockingIOError:
                report['active'] = True
    if report.get('status') == 'running' and not report['active']:
        report['status'] = 'interrupted'
        report['resumable'] = True
    return report


def sync(apply=False, max_pages=40):
    if not isinstance(max_pages, int) or not 1 <= max_pages <= 1000:
        raise ValueError("max_pages must be between 1 and 1000.")
    directory = state_dir()
    directory.mkdir(parents=True, exist_ok=True)
    with (directory / 'sync.lock').open('a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        try:
            return _sync(apply, directory, max_pages)
        except Exception as error:
            if apply:
                save_json(directory / 'last-report.json', {'status': 'failed', 'checked_at': time.time(),
                    'error': str(error), 'indexing_verified': False, 'model_updated': False})
            raise


def _sync(apply, directory, max_pages=40):
    state = read_state()
    data, robots = discovery()
    current = {entry['url']: entry['sha256'] for entry in data['pages']}
    changed = [e for e in data['pages'] if state['submitted'].get(e['url']) != e['sha256']]
    # Deleted/privatized URLs are retained for operator review, never redisclosed automatically.
    removed = sorted(set(state['submitted']) - set(current))
    deferred = [e for e in changed if state['pending'].get(e['url'], {}).get('sha256') == e['sha256']
                and time.time() - state['pending'][e['url']]['at'] < 86400]
    deferred_urls = {e['url'] for e in deferred}
    candidates = [e for e in changed if e['url'] not in deferred_urls]
    queued_count = len(candidates)
    progress_file = directory / 'resume.json'
    attempts = json.loads(progress_file.read_text()) if progress_file.exists() else {}
    candidates.sort(key=lambda entry: attempts.get(entry['url'], 0))
    candidates = candidates[:max_pages]
    report = {'status': 'dry_run' if not apply else 'unchanged', 'checked_at': time.time(),
              'changed_count': len(changed), 'changed_urls': [e['url'] for e in changed][:200],
              'removed_urls_for_review': removed[:200], 'deferred_key_verification_count': len(deferred),
              'queued_count': queued_count, 'selected_count': len(candidates),
              'remaining_count': len(changed), 'verified_count': 0, 'accepted_count': 0,
              'receipts': [], 'errors': [], 'indexing_verified': False, 'model_updated': False,
              'google': 'Sitemap discovery; no general-page Google Indexing API submission.',
              'llm_crawlers': 'Updated public discovery is fetchable; no direct model-update API used.'}
    if not apply:
        return report
    report['status'] = 'running'
    report['phase'] = 'verification'
    save_json(directory / 'last-report.json', report)
    if deferred:
        report['status'] = 'pending_key_verification'
    if candidates:
        _, ownership = get(data['indexnow']['key_location'], ['text/plain'])
        if ownership.decode('utf-8').strip() != data['indexnow']['key']:
            raise ValueError('IndexNow ownership file is not deployed correctly.')
        valid = []
        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
            futures = {pool.submit(verify_page, entry, robots): entry for entry in candidates}
            for future in concurrent.futures.as_completed(futures):
                entry = futures[future]
                attempts[entry['url']] = time.time()
                save_json(progress_file, attempts)
                try:
                    future.result()
                    valid.append(entry)
                    report['verified_count'] += 1
                except Exception as error:
                    report['errors'].append({'url': entry['url'], 'error': str(error)})
                save_json(directory / 'last-report.json', report)
        # A second manifest read guards against publishing a mixed deployment's URLs.
        if manifest() != data:
            raise ValueError('Deployment changed during verification; retry the current release.')
        report['phase'] = 'submission'
        save_json(directory / 'last-report.json', report)
        for offset in range(0, len(valid), 1000):
            batch = valid[offset:offset + 1000]
            code, _, _ = request(INDEXNOW, {'host': 'mineralrightsxchange.com',
                'key': data['indexnow']['key'], 'keyLocation': data['indexnow']['key_location'],
                'urlList': [e['url'] for e in batch]})
            meaning = {200: 'received', 202: 'pending_key_verification'}.get(code, 'failed')
            report['receipts'].append({'service': 'IndexNow', 'http_status': code, 'status': meaning, 'url_count': len(batch)})
            if code == 200:
                report['accepted_count'] += len(batch)
                for entry in batch:
                    state['submitted'][entry['url']] = entry['sha256']
                    state['pending'].pop(entry['url'], None)
            elif code == 202:
                for entry in batch:
                    state['pending'][entry['url']] = {'sha256': entry['sha256'], 'at': time.time()}
            else:
                report['errors'].append({'service': 'IndexNow', 'http_status': code, 'retry': 'next run'})
            save_json(directory / 'state.json', state)
            save_json(directory / 'last-report.json', report)
        if report['errors']:
            report['status'] = 'partial_failure'
        elif any(r['http_status'] == 202 for r in report['receipts']) or deferred:
            report['status'] = 'pending_key_verification'
        elif report['receipts']:
            report['status'] = 'notifications_received'
    report['remaining_count'] = sum(state['submitted'].get(e['url']) != e['sha256'] for e in data['pages'])
    if report['status'] == 'running':
        report['status'] = 'unchanged'
    report['phase'] = 'finished'
    report['resumable'] = report['remaining_count'] > 0
    if removed:
        report['removal_review_required'] = True
    save_json(directory / 'last-report.json', report)
    return report


def crawler_status():
    data, robots = discovery()
    return {'public_page_count': len(data['pages']), 'content_revision': data['content_revision'],
            'robots_policy': {bot: {'home_allowed': robots.can_fetch(bot, SITE + '/'),
                                  'private_account_allowed': robots.can_fetch(bot, SITE + '/account/')} for bot in BOTS},
            'last_notification_run': last_report(), 'real_bot_identity_verified': False,
            'note': 'robots policy is advisory; this check does not prove actual crawler visits or access through WAF rules.'}


def public_content(url):
    public_url(url)
    data, robots = discovery()
    entry = next((entry for entry in data['pages'] if entry['url'] == url), None)
    if not entry:
        raise ValueError('URL is absent from the verified public manifest.')
    page = verify_page(entry, robots)
    text = '\n'.join(page.text)
    return {'canonical_url': url, 'text': text[:100000], 'truncated': len(text) > 100000,
            'source': 'live public HTML', 'content_is_untrusted_data': True}


def citation_readiness(url):
    """Mechanical evidence only. Factuality, originality, answer usefulness require editorial review."""
    public_url(url)
    data, robots = discovery()
    entry = next((e for e in data['pages'] if e['url'] == url), None)
    if entry is None:
        raise ValueError('URL is absent from the public manifest.')
    page = verify_page(entry, robots)
    types = set()
    article_dates = []
    authors = []
    errors = []
    def walk(value):
        if isinstance(value, dict):
            kind = value.get('@type', [])
            kinds = [kind] if isinstance(kind, str) else kind
            types.update(x for x in kinds if isinstance(x, str))
            if any(k in kinds for k in ['Article', 'BlogPosting']):
                article_dates.append({'published': value.get('datePublished'), 'modified': value.get('dateModified')})
                authors.append(value.get('author'))
            for child in value.values():
                walk(child)
        elif isinstance(value, list):
            for child in value:
                walk(child)
    for raw in page.schema_text:
        try:
            walk(json.loads(raw))
        except (ValueError, TypeError):
            errors.append('Malformed JSON-LD')
    return {'url': url, 'technical_evidence': {
        'canonical_and_indexability_verified': True, 'title': ''.join(page.title_parts),
        'h1_count': page.h1_count, 'main_count': page.main_count, 'meta_descriptions': page.descriptions,
        'schema_types': sorted(types), 'article_dates': article_dates, 'article_authors': authors,
        'external_source_links': sorted(page.external_sources), 'schema_errors': errors,
        'robots_policy': {bot: robots.can_fetch(bot, url) for bot in BOTS}},
        'editorial_review_required': [
            'Does the opening directly answer this page’s specific user question?',
            'Are material claims supported by current authoritative sources?',
            'Are authors, dates, and entities truthful and consistent with visible content?',
            'Does this offer distinct evidence or explanation beyond overlapping MRX pages?',
            'Do helpful internal links connect the answer to the appropriate owner journey?'],
        'citation_rate': None, 'citation_observations': 'not collected by this check',
        'interpretation': 'Signals are review evidence, not a score, fact check, or guarantee of citation.'}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true')
    parser.add_argument('--status', action='store_true')
    parser.add_argument('--report', action='store_true')
    parser.add_argument('--max-pages', type=int, default=40)
    args = parser.parse_args()
    try:
        result = last_report() if args.report else crawler_status() if args.status else sync(args.apply, args.max_pages)
    except Exception as error:
        result = {'status': 'failed', 'error': str(error), 'indexing_verified': False, 'model_updated': False}
    print(json.dumps(result, indent=2))
    raise SystemExit(1 if result.get('status') in ('failed', 'partial_failure') else 0)
