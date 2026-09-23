import hashlib
import importlib.util
import json
import os
import tempfile
import unittest
from email.message import Message
from pathlib import Path
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('crawler_sync', Path(__file__).resolve().parents[2] / 'scripts/crawler_sync.py')
c = importlib.util.module_from_spec(spec)
spec.loader.exec_module(c)


class SyncTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.env = patch.dict(os.environ, {'MRX_CRAWLER_STATE_DIR': self.temp.name})
        self.env.start()
        self.url = c.SITE + '/blog/example/'
        self.html = ('<html><head><title>Example</title><link rel="canonical" href="' + self.url + '">'
                     '<meta name="description" content="Example evidence"></head><body><main><h1>Example</h1>'
                     '<script type="application/ld+json">{"@type":"Article","author":{"name":"MRX"}}</script>'
                     '<a href="https://example.gov/source">Source</a></main></body></html>').encode()
        self.data = {'version': 2, 'hash_policy': 'sha256-html-approved-cloudflare-transport-v1', 'origin': c.SITE, 'content_revision': 'abc',
                     'pages': [{'url': self.url, 'sha256': hashlib.sha256(self.html).hexdigest()}],
                     'indexnow': {'key': 'abcdefgh12345678', 'key_location': c.SITE + '/indexnow-key.txt'}}
        self.code = 200
        self.posts = []
        self.mismatch = False
        self.patch = patch.object(c, 'request', self.request)
        self.patch.start()

    def tearDown(self):
        self.patch.stop()
        self.env.stop()
        self.temp.cleanup()

    def request(self, url, payload=None, fresh=False):
        if payload:
            self.posts.append(payload)
            return self.code, {}, b''
        prefix = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        urlset = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        responses = {
            c.SITE + '/crawler-manifest.json': ('application/json', json.dumps(self.data).encode()),
            c.SITE + '/robots.txt': ('text/plain', ('User-agent: *\nAllow: /\nDisallow: /account/\nSitemap: ' + c.SITE + '/sitemap_index.xml').encode()),
            c.SITE + '/sitemap_index.xml': ('application/xml', (prefix + '<sitemap><loc>' + c.SITE + '/sitemap-articles.xml</loc></sitemap></sitemapindex>').encode()),
            c.SITE + '/sitemap-articles.xml': ('application/xml', (urlset + '<url><loc>' + self.url + '</loc></url></urlset>').encode()),
            c.SITE + '/llms.txt': ('text/plain', c.SITE.encode()),
            c.SITE + '/llms-full.txt': ('text/plain', c.SITE.encode()),
            c.SITE + '/indexnow-key.txt': ('text/plain', b'abcdefgh12345678'),
            self.url: ('text/html', self.html + (b'changed' if self.mismatch else b'')),
        }
        kind, body = responses[url]
        return 200, {'Content-Type': kind}, body

    def test_url_boundary(self):
        for url in ['http://mineralrightsxchange.com/', c.SITE + '/account/', c.SITE + '/blog/drafts/a/',
                    c.SITE + '/%61ccount/', c.SITE + '/foo?email=private', 'https://evil.test/',
                    c.SITE + '/a/../staff/', c.SITE + '/hello\n/']:
            with self.assertRaises(ValueError, msg=url):
                c.public_url(url)

    def test_dry_run_never_notifies_or_marks_sent(self):
        result = c.sync()
        self.assertEqual(result['changed_count'], 1)
        self.assertEqual(self.posts, [])
        self.assertFalse((Path(self.temp.name) / 'state.json').exists())

    def test_received_then_unchanged_is_idempotent(self):
        first = c.sync(True)
        self.assertEqual(first['status'], 'notifications_received')
        second = c.sync(True)
        self.assertEqual(second['status'], 'unchanged')
        self.assertEqual(len(self.posts), 1)
        self.assertFalse(first['indexing_verified'])

    def test_202_is_pending_and_not_repeated_immediately(self):
        self.code = 202
        self.assertEqual(c.sync(True)['status'], 'pending_key_verification')
        self.assertEqual(c.sync(True)['status'], 'pending_key_verification')
        self.assertEqual(len(self.posts), 1)
        self.assertEqual(c.read_state()['submitted'], {})

    def test_failure_remains_retryable(self):
        self.code = 429
        self.assertEqual(c.sync(True)['status'], 'partial_failure')
        self.assertEqual(c.read_state()['submitted'], {})
        self.code = 200
        self.assertEqual(c.sync(True)['status'], 'notifications_received')

    def test_live_mismatch_never_submits(self):
        self.mismatch = True
        with patch.object(c.time, 'sleep') as sleep:
            self.assertEqual(c.sync(True)['status'], 'partial_failure')
        self.assertEqual(self.posts, [])
        self.assertEqual([call.args[0] for call in sleep.call_args_list], [5, 15])

    def test_transient_live_mismatch_retries_fresh_without_duplicate_submission(self):
        original_request = self.request
        page_reads = 0

        def converging_request(url, payload=None, fresh=False):
            nonlocal page_reads
            if url == self.url and payload is None:
                page_reads += 1
                if page_reads == 1:
                    return 200, {'Content-Type': 'text/html'}, self.html + b'transient-edge-bytes'
            return original_request(url, payload)

        with patch.object(c, 'request', converging_request), patch.object(c.time, 'sleep') as sleep:
            result = c.sync(True)

        self.assertEqual(result['status'], 'notifications_received')
        self.assertEqual(page_reads, 2)
        self.assertEqual(len(self.posts), 1)
        sleep.assert_called_once_with(5)

    def test_noindex_never_submits(self):
        self.html += b'<meta name="robots" content="noindex">'
        self.data['pages'][0]['sha256'] = hashlib.sha256(self.html).hexdigest()
        self.assertEqual(c.sync(True)['status'], 'partial_failure')
        self.assertEqual(self.posts, [])

    def test_removed_urls_need_review_not_redisclosure(self):
        state = {'version': 1, 'submitted': {c.SITE + '/old-public-page/': 'old'}, 'pending': {}}
        c.save_json(Path(self.temp.name) / 'state.json', state)
        result = c.sync(True)
        self.assertEqual(result['removed_urls_for_review'], [c.SITE + '/old-public-page/'])
        self.assertEqual(self.posts[0]['urlList'], [self.url])

    def test_citation_audit_distinguishes_signals_from_results(self):
        result = c.citation_readiness(self.url)
        self.assertEqual(result['technical_evidence']['h1_count'], 1)
        self.assertIn('Article', result['technical_evidence']['schema_types'])
        self.assertIsNone(result['citation_rate'])

    def test_manifest_sitemap_parity(self):
        self.data['pages'].append({'url': c.SITE + '/not-in-sitemap/', 'sha256': 'a' * 64})
        with self.assertRaises(ValueError):
            c.sync(True)
        self.assertEqual(self.posts, [])

    def test_bounded_resume_skips_received_pages(self):
        second = {'url': c.SITE + '/blog/second/', 'sha256': 'b' * 64}
        self.data['pages'].append(second)
        with patch.object(c, 'discovery', return_value=(self.data, None)), patch.object(c, 'manifest', return_value=self.data), patch.object(c, 'verify_page'):
            first = c.sync(True, max_pages=1)
            self.assertEqual(first['accepted_count'], 1)
            self.assertEqual(first['remaining_count'], 1)
            second_result = c.sync(True, max_pages=1)
            self.assertEqual(second_result['remaining_count'], 0)
            self.assertEqual(self.posts[1]['urlList'], [second['url']])

    def test_failed_first_page_does_not_starve_remaining_queue(self):
        second = {'url': c.SITE + '/blog/second/', 'sha256': 'b' * 64}
        self.data['pages'].append(second)
        with patch.object(c, 'discovery', return_value=(self.data, None)), patch.object(c, 'manifest', return_value=self.data):
            with patch.object(c, 'verify_page', side_effect=ValueError('blocked')):
                self.assertEqual(c.sync(True, 1)['status'], 'partial_failure')
            with patch.object(c, 'verify_page'):
                c.sync(True, 1)
                self.assertEqual(self.posts[0]['urlList'], [second['url']])

    def test_interrupted_report_is_resumable(self):
        c.save_json(Path(self.temp.name) / 'last-report.json', {'status':'running'})
        self.assertEqual(c.last_report()['status'], 'interrupted')
        self.assertTrue(c.last_report()['resumable'])

    def test_page_budget_is_validated(self):
        for value in [0, 1001, '40']:
            with self.assertRaises(ValueError):
                c.sync(True, value)


if __name__ == '__main__':
    unittest.main()


class ContentHashTests(unittest.TestCase):
    def test_only_exact_email_comments_are_ignored(self):
        self.assertEqual(c.content_hash(b'a<!--email_off-->b<!--/email_off-->c'), c.content_hash(b'abc'))
        self.assertNotEqual(c.content_hash(b'abc<p class="otto-nlp-module">hidden</p>'), c.content_hash(b'abc'))
        self.assertNotEqual(c.content_hash(b'abc<!--other-->'), c.content_hash(b'abc'))

    def test_pinned_beacon_only(self):
        beacon = Path(__file__).with_name('approved-cloudflare-beacon.html').read_bytes()
        self.assertEqual(c.content_hash(b'abc' + beacon), c.content_hash(b'abc'))
        self.assertNotEqual(c.content_hash(b'abc' + beacon.replace(b'crossorigin', b'changed')), c.content_hash(b'abc'))

    def test_pinned_security_template_only(self):
        fragment = Path(__file__).with_name('approved-cloudflare-jsd.html').read_bytes()
        self.assertEqual(c.content_hash(b'abc' + fragment), c.content_hash(b'abc'))
        altered = fragment.replace(b'a3b4ac28eb144dd7', b'0123456789abcdef')
        self.assertEqual(c.content_hash(b'abc' + altered), c.content_hash(b'abc'))
        self.assertNotEqual(c.content_hash(b'abc' + fragment.replace(b'iframe', b'unknown')), c.content_hash(b'abc'))

    def test_searchatlas_transport_requires_exact_normalized_runtime(self):
        approved = '801ae29b635c9a26b2ceac00a751acd2ff3b3def61fe5072f276cb96c0f80caa'
        template = (b"<script>(function(){\n    'use strict';\n\n    const OTTO_CONFIG = {\n"
                    b"      REQ_ID: 'REQUEST'\n    };\n  })();</script>")
        real_sha256 = hashlib.sha256
        with patch.object(c.hashlib, 'sha256', wraps=hashlib.sha256) as digest:
            def pinned(value=b''):
                if value == template:
                    class ApprovedDigest:
                        def hexdigest(self):
                            return approved
                    return ApprovedDigest()
                return real_sha256(value)
            digest.side_effect = pinned
            runtime = template.replace(b"REQ_ID: 'REQUEST'", b"REQ_ID: 'deadbeef'")
            self.assertEqual(c.content_hash(b'abc' + runtime), c.content_hash(b'abc'))
            changed = runtime.replace(b"OTTO_CONFIG", b"OTTO_CHANGED")
            self.assertNotEqual(c.content_hash(b'abc' + changed), c.content_hash(b'abc'))

    def test_only_exact_searchatlas_status_meta_is_ignored(self):
        true_marker = (b'<meta name="otto" content="uuid=e4bab8bb-717e-480c-8dea-1de1b8596eb7; '
                       b'type=cloudflare; enabled=true;">')
        false_marker = true_marker.replace(b'enabled=true', b'enabled=false')
        self.assertEqual(c.content_hash(b'abc' + true_marker), c.content_hash(b'abc'))
        self.assertEqual(c.content_hash(b'abc' + false_marker), c.content_hash(b'abc'))
        for changed in [
            false_marker.replace(b'e4bab8bb', b'f4bab8bb'),
            false_marker.replace(b'type=cloudflare', b'type=unknown'),
            false_marker.replace(b'enabled=false', b'enabled=unknown'),
            false_marker.replace(b'enabled=false;', b'enabled=false; extra=1;'),
        ]:
            self.assertNotEqual(c.content_hash(b'abc' + changed), c.content_hash(b'abc'))

    def test_captured_disabled_otto_response_and_negative_variants(self):
        body = Path(__file__).with_name('mismatch-202.html').read_bytes()
        expected = 'ec3038bacfe234e82de5f025e945a99f0d832f168ab4dab4686c9652f98d7ab6'
        marker = (b'<meta name="otto" content="uuid=e4bab8bb-717e-480c-8dea-1de1b8596eb7; '
                  b'type=cloudflare; enabled=false;">')
        self.assertEqual(body.count(marker), 1)
        self.assertEqual(c.content_hash(body), expected)
        for changed in [
            body.replace(marker, marker.replace(b'e4bab8bb', b'f4bab8bb')),
            body.replace(marker, marker.replace(b'type=cloudflare', b'type=unknown')),
            body.replace(marker, marker.replace(b'enabled=false', b'enabled=unknown')),
            body.replace(marker, marker.replace(b'enabled=false;', b'enabled=false; extra=1;')),
            body.replace(b'<title>', b'<title>Altered ', 1),
            body + b'<div hidden class="otto-nlp-module">injected</div>',
            body.replace(b'RECHECK_INTERVAL: 3000', b'RECHECK_INTERVAL: 9999'),
        ]:
            self.assertNotEqual(c.content_hash(changed), expected)


class RequestRetryTests(unittest.TestCase):
    class Response:
        def __init__(self, status, body=b'', headers=None):
            self.status = status
            self.body = body
            self.headers = Message()
            for name, value in (headers or {}).items():
                self.headers[name] = value

        def read(self, _limit):
            return self.body

        def __enter__(self):
            return self

        def __exit__(self, *_args):
            return False

    class Opener:
        def __init__(self, responses):
            self.responses = list(responses)
            self.calls = 0

        def open(self, *_args, **_kwargs):
            self.calls += 1
            return self.responses.pop(0)

    def test_idempotent_get_retries_bounded_throttle(self):
        opener = self.Opener([
            self.Response(429, b'throttled', {'Retry-After': '1'}),
            self.Response(200, b'ok', {'Content-Type': 'text/plain'}),
        ])
        with patch.object(c, 'build_opener', return_value=opener), patch.object(c.time, 'sleep') as sleep:
            status, _, body = c.request(c.SITE + '/robots.txt')
        self.assertEqual((status, body), (200, b'ok'))
        self.assertEqual(opener.calls, 2)
        sleep.assert_called_once_with(1)

    def test_indexnow_submission_is_never_replayed(self):
        opener = self.Opener([self.Response(429, b'throttled')])
        payload = {'host': 'mineralrightsxchange.com', 'urlList': [c.SITE + '/']}
        with patch.object(c, 'build_opener', return_value=opener), patch.object(c.time, 'sleep') as sleep:
            status, _, _ = c.request(c.INDEXNOW, payload)
        self.assertEqual(status, 429)
        self.assertEqual(opener.calls, 1)
        sleep.assert_not_called()
