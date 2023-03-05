import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json';
import hi from './hi.json';
//empty for now
const resources = {};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'hi',
  fallbackLng: "hi",
  resources: {
    en: en,
    hi: hi,
  },
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;