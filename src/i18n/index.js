// @ts-nocheck
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import default_en from './locales/en/translation.json';
import default_ja from './locales/ja/translation.json';
import about_en from './locales/en/about.json';
import about_ja from './locales/ja/about.json';
import home_en from './locales/en/home.json';
import home_ja from './locales/ja/home.json';
import menu_en from './locales/en/menu.json';
import menu_ja from './locales/ja/menu.json';
import nav_en from './locales/en/nav.json';
import nav_ja from './locales/ja/nav.json';
import header_en from './locales/en/header.json';
import header_ja from './locales/ja/header.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...default_en,
          about: about_en,
          home: home_en,
          menu: menu_en,
          nav: nav_en,
          header: header_en,
        },
      },
      ja: {
        translation: {
          ...default_ja,
          about: about_ja,
          home: home_ja,
          menu: menu_ja,
          nav: nav_ja,
          header: header_ja,
        },
      },
    },
    // lng: 'en',
    fallbackLng: 'en',
    // keySeparator: '.',
    // ns: ['common'],
    // defaultNS: 'common',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    debug: false,
    // react: {
    //   // wait: false,
    //   // bindI18n: 'languageChanged loaded',
    //   // bindStore: 'added removed',
    //   // nsMode: 'default',
    //   useSuspense: true,
    // },
  });

export default i18n;
