'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TranslationKeys, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_KEY = 'uniquify-language';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('ja');

  // クライアントサイドでローカルストレージから言語設定を読み込む
  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY) as Language | null;
    if (savedLanguage && (savedLanguage === 'ja' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // ブラウザの言語設定を確認
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ja')) {
        setLanguageState('ja');
      } else {
        setLanguageState('en');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);
  };

  const t = (key: keyof TranslationKeys): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}