import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { NODE_ENV } from '../AppConstants';
import locales from './locales';

const debug = import.meta.env.NODE_ENV === NODE_ENV.DEVELOPMENT;

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    debug,
    fallbackLng: 'en-US',
    load: 'currentOnly',
    keySeparator: '.',
    saveMissing: true,
    resources: locales,
    returnNull: false,
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
      console.warn('Missing Translation Key', lng, ns, key, fallbackValue);
    },
    missingInterpolationHandler: (text, value) => {
      console.warn('Missing Interpolation', text, value);
    },
  });

export default i18n;
