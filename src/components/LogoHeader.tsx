import logo from '@/assets/nanoclean-logo.png';
import { useLanguage } from '@/contexts/LanguageContext';

const LogoHeader = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="fixed top-0 left-0 right-0 z-40 border-b border-border-glow/20 backdrop-blur-xl" style={{ pointerEvents: 'auto' }}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center ${isArabic ? 'justify-end' : 'justify-start'}`}>
        <img
          src={logo}
          alt="NanoClean Logo"
          className="h-12 w-auto drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
};

export default LogoHeader;
