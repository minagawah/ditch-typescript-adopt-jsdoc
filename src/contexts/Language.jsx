// @ts-nocheck
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';

import { useCookie } from '../hooks/useCookie';

// ----------------------------------------------------------------
// LanguageContext
// ----------------------------------------------------------------

/** @typedef {function(string): void} SetLanguage */

const LanguageContext = createContext({
  language: 'en',
  /** @type {SetLanguage} */ setLanguage: () => {},
});

// ----------------------------------------------------------------
// LanguageProvider
// ----------------------------------------------------------------

export const LanguageProvider = props => {
  const { i18n } = useTranslation();
  const [cookie, setCookie] = useCookie('locale', 'en');
  const [locale, setLocale] = useState('en');

  /** @type {SetLanguage} */
  const setLanguage = useCallback(language => {
    i18n.changeLanguage(language);
    setCookie(language);
  }, []);

  useEffect(() => {
    setLocale(cookie);
  }, [cookie]);

  return (
    <LanguageContext.Provider
      value={{
        language: locale,
        setLanguage,
      }}
      {...props}
    />
  );
};

// ----------------------------------------------------------------
// useLanguage
// ----------------------------------------------------------------

export const useLanguage = () => useContext(LanguageContext);
