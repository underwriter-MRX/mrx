const PUBLISHED_PHONE = '+14324006198';
const PUBLISHED_LABEL = '+1 (432) 400-6198';

/** The fallback is MRX's phone already published in first-party content. */
export function getPublicPhone() {
  const configured = (import.meta.env.PUBLIC_MRX_PHONE_TEL ?? '')
    .trim()
    .replace(/^tel:/i, '')
    .replace(/[\s().-]/g, '');
  const phone = /^\+\d{10,15}$/.test(configured) ? configured : PUBLISHED_PHONE;
  const display = phone === PUBLISHED_PHONE ? PUBLISHED_LABEL : phone;
  return { href: `tel:${phone}`, label: `Call Mineral Rights Xchange at ${display}`, display };
}
