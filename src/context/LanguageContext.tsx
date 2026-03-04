import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations } from '../locales'; // Импортируем нашу "сборку"

export type LangType = 'EN' | 'UZ'; // Добавь слово export

interface LanguageContextType {
  lang: LangType;
  setLang: (lang: LangType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<LangType>(
    (localStorage.getItem('app_lang') as LangType) || 'EN'
  );

  const setLang = (newLang: LangType) => {
    setLangState(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  const t = (key: string): string => {
    // translations[lang] теперь содержит ключи ВСЕХ страниц сразу
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};