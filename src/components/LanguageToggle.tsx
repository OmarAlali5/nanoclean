import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (lang: string) => {
    if ((lang === 'ar' && language !== 'ar') || (lang === 'en' && language !== 'en')) {
      toggleLanguage();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 rounded-full glass-card border border-border-glow/40 hover:border-primary/60 hover:bg-primary/10 transition-all duration-200 text-xs font-medium flex items-center gap-2 backdrop-blur-xl"
      >
        <span>{language === 'ar' ? '🇸🇦' : '🇬🇧'}</span>
        <span>{language === 'ar' ? 'عربي' : 'EN'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 rounded-lg glass-card border border-border-glow/40 neon-glow backdrop-blur-xl overflow-hidden z-50">
          <button
            onClick={() => handleLanguageSelect('ar')}
            className={`w-full px-3 py-2.5 text-left text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
              language === 'ar'
                ? 'bg-primary/20 text-primary border-l-2 border-l-primary'
                : 'text-foreground hover:bg-primary/10'
            }`}
          >
            <span className="text-base">🇸🇦</span>
            <span>عربي</span>
          </button>
          <div className="h-px bg-border/30" />
          <button
            onClick={() => handleLanguageSelect('en')}
            className={`w-full px-3 py-2.5 text-left text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
              language === 'en'
                ? 'bg-primary/20 text-primary border-l-2 border-l-primary'
                : 'text-foreground hover:bg-primary/10'
            }`}
          >
            <span className="text-base">🇬🇧</span>
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
