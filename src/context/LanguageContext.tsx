import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Lang, PortfolioContent } from '../content/portfolioTypes';
import { portfolioContentEN } from '../content/portfolioContent.en';
import { portfolioContentDE } from '../content/portfolioContent.de';
import { portfolioContentAR } from '../content/portfolioContent.ar';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: PortfolioContent;
  dir: 'ltr' | 'rtl';
  htmlLang: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper to get content by language
const getContent = (lang: Lang): PortfolioContent => {
  switch (lang) {
    case 'de':
      return portfolioContentDE;
    case 'ar':
      return portfolioContentAR;
    case 'en':
    default:
      return portfolioContentEN;
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const STORAGE_KEY = 'lang';
  
  // Initialize language: check localStorage first, default to English
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === 'de' || saved === 'ar' || saved === 'en') {
      return saved;
    }
    // Default is always English
    return 'en';
  });

  // Update localStorage and document when language changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  const t = getContent(lang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const htmlLang = lang;

  const value: LanguageContextType = {
    lang,
    setLang,
    t,
    dir,
    htmlLang
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
