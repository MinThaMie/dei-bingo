const langToCode = {
  en: 'US',
  hi: 'IN',
  zh: 'CN',
  nl: 'NL',
  de: 'DE',
  es: 'ES',
  fr: 'FR',
};

export default function countryflag(countryCode /*, named*/) {
  const codePoints = langToCode[countryCode.split('-')[0]]
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
