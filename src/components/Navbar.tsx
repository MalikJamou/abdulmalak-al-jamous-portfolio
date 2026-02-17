import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  // Close language dropdown on outside click
  useEffect(() => {
    if (!isLangOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isClickInDesktop = desktopLangRef.current?.contains(target);
      const isClickInMobile = mobileLangRef.current?.contains(target);
      
      if (!isClickInDesktop && !isClickInMobile) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLangOpen]);

  // Close dropdown on Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsLangOpen(false);
    }
  };

  const langLabels: Record<string, string> = {
    en: 'English',
    de: 'Deutsch',
    ar: 'العربية'
  };

  const LanguageMenuItem = ({ code, label }: { code: 'en' | 'de' | 'ar'; label: string }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setLang(code);
        setIsLangOpen(false);
      }}
      type="button"
      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        lang === code ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700'
      }`}
      role="menuitem"
    >
      {label}
    </button>
  );

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50" role="navigation" aria-label="Primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-900 hover:text-slate-700 transition">
            Portfolio
          </Link>

          {/* Desktop Navigation + Language */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-slate-600 hover:text-slate-900 transition font-medium">
              {t.nav.home}
            </Link>
            <Link to="/projects" className="text-slate-600 hover:text-slate-900 transition font-medium">
              {t.nav.projects}
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-slate-900 transition font-medium">
              {t.nav.about}
            </Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition font-medium">
              {t.nav.contact}
            </Link>

            {/* Language Dropdown - Desktop */}
            <div className="relative" ref={desktopLangRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangOpen(!isLangOpen);
                }}
                onKeyDown={handleKeyDown}
                aria-haspopup="menu"
                aria-expanded={isLangOpen}
                aria-controls="language-menu-desktop"
                type="button"
                className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-900 border border-gray-200 rounded-lg hover:border-gray-300 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                title={t.labels.chooseLanguage}
              >
                <span className="text-lg">🌐</span>
                <span className="text-sm font-medium">{langLabels[lang]}</span>
              </button>

              {isLangOpen && (
                <div
                  id="language-menu-desktop"
                  role="menu"
                  aria-label={t.labels.chooseLanguage}
                  className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <LanguageMenuItem code="en" label="English" />
                  <LanguageMenuItem code="de" label="Deutsch" />
                  <LanguageMenuItem code="ar" label="العربية" />
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu + Language button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Selector */}
            <div className="relative" ref={mobileLangRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangOpen(!isLangOpen);
                }}
                onKeyDown={handleKeyDown}
                aria-haspopup="menu"
                aria-expanded={isLangOpen}
                aria-controls="language-menu-mobile"
                type="button"
                className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                title={t.labels.chooseLanguage}
              >
                🌐
              </button>

              {isLangOpen && (
                <div
                  id="language-menu-mobile"
                  role="menu"
                  aria-label={t.labels.chooseLanguage}
                  className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <LanguageMenuItem code="en" label="English" />
                  <LanguageMenuItem code="de" label="Deutsch" />
                  <LanguageMenuItem code="ar" label="العربية" />
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-gray-200 py-4 space-y-3">
            <Link
              to="/"
              className="block text-slate-600 hover:text-slate-900 transition font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/projects"
              className="block text-slate-600 hover:text-slate-900 transition font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.projects}
            </Link>
            <Link
              to="/about"
              className="block text-slate-600 hover:text-slate-900 transition font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              to="/contact"
              className="block text-slate-600 hover:text-slate-900 transition font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
