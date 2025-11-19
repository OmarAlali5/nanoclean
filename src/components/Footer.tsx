import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2">
          <p className="text-foreground/60 text-sm">
            NanoClean • {t('نانوكلين', 'نانوكلين')}
          </p>
          <p className="text-foreground/40 text-xs">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
