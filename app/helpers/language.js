const codeToName = {
  en: 'English',
  hi: 'हिंदी',
  zh: '汉语 ',
  nl: 'Nederlands',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Francais',
};

export default function language(countryCode /*, named*/) {
  return codeToName[countryCode];
}
