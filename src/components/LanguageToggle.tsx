import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="glass-card gap-2 border-border-glow/30 hover:border-primary/50 hover:neon-glow transition-all duration-300"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">
        {language === 'ar' ? 'English' : 'عربي'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
