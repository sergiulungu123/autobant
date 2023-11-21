const { i18n } = require('next-i18next');
const { localeDetector } = require('next-i18next-locale-detector');

i18n
  .use(localeDetector())
  .init({
    debug: true,
    lng: 'en', // Set default language
    fallbackLng: 'en', // Fallback language if translation is not available
    locales: ['en', 'es'], // Supported languages
    defaultNS: 'common', // Default namespace for translation keys
    interpolation: {
      escapeValue: false, // Disable automatic escaping for curly braces
    },
  });
  
module.exports = {
  i18n,
};
