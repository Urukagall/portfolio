import { useCallback, useEffect, useMemo, useState } from 'react';
import { I18nContext } from './context.js';
import { defaultLocale, supportedLocales, translations } from './locales';

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    const savedLocale = localStorage.getItem('portfolio-locale');

    if (savedLocale && supportedLocales.includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-locale', locale);
  }, [locale]);

  const toggleLanguage = useCallback(() => {
    setLocale((current) => (current === 'fr' ? 'en' : 'fr'));
  }, []);

  const t = useCallback(
    (key) => {
      const parts = key.split('.');
      let value = translations[locale];

      for (const part of parts) {
        value = value?.[part];
        if (value === undefined) {
          return key;
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [locale],
  );

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      supportedLocales,
      toggleLanguage,
      t,
    }),
    [locale, t, toggleLanguage],
  );

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}
