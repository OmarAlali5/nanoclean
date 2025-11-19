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
        className="px-3 py-1.5 rounded-full glass-card border border-border-glow/40 hover:border-primary/60 hover:neon-glow transition-all duration-300 text-xs font-medium flex items-center gap-2 backdrop-blur-xl"
      >
        <span>{language === 'ar' ? '🇸🇦' : '🇬🇧'}</span>
        <span>{language === 'ar' ? 'عربي' : 'English'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 rounded-lg glass-card border border-border-glow/40 neon-glow backdrop-blur-xl overflow-hidden z-50">
          <button
            onClick={() => handleLanguageSelect('ar')}
            className={`w-full px-4 py-3 text-left text-sm font-medium flex items-center gap-3 transition-all duration-300 ${
              language === 'ar'
                ? 'bg-primary/20 text-primary border-l-2 border-l-primary'
                : 'text-foreground hover:bg-primary/10'
            }`}
          >
            <span className="text-lg">🇸🇦</span>
            <span>عربي</span>
          </button>
          <div className="h-px bg-border/30" />
          <button
            onClick={() => handleLanguageSelect('en')}
            className={`w-full px-4 py-3 text-left text-sm font-medium flex items-center gap-3 transition-all duration-300 ${
              language === 'en'
                ? 'bg-primary/20 text-primary border-l-2 border-l-primary'
                : 'text-foreground hover:bg-primary/10'
            }`}
          >
            <span className="text-lg">🇬🇧</span>
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
