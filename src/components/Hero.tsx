import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { FileText, Presentation } from 'lucide-react';
import buoy from '@/assets/buoy.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden blob-container">
      {/* Animated blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="absolute inset-0 bg-gradient-radial opacity-40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center py-12 sm:py-16 lg:py-20">
        {/* Text Content */}
        <div className="text-center lg:text-start space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground/90">
              {t('حل سعودي ذكي لحماية البحار', 'Saudi Smart Solution for Ocean Protection')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight">
            <span className="gradient-text">
              {t('نانوكلين', 'NanoClean')}
            </span>
            <br />
            <span className="text-foreground">
              {t(
                'عوامة ذكية ترصد التسرب النفطي وتعالجه في مكانه',
                'Smart Buoy Detects and Treats Oil Spills On-Site'
              )}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl leading-loose">
            {t(
              'منصة متكامل�� تجمع بين الحساسات النانوية والذكاء الاصطناعي والتحويل الحيوي لتحويل التسربات النفطية إلى وقود حيوي، مع مراقبة لحظية عبر لوحة تحكم سحابية.',
              'An integrated platform combining nano-sensors, AI, and bioconversion to transform oil spills into biofuel, with real-time monitoring via cloud dashboard.'
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 w-full sm:w-auto sm:flex-row justify-center lg:justify-start">
            <Button
              size="lg"
              className="gap-2 neon-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-primary-foreground font-semibold w-full sm:w-auto"
            >
              <Presentation className="w-5 h-5" />
              {t('عرض النموذج الأولي (Prototype)', 'View Prototype')}
            </Button>
            <a
              href="https://nano-clean.netlify.app/info"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-12 py-4 rounded-lg glass-card border border-border-glow/50 hover:border-primary hover:neon-glow transition-all duration-300 text-foreground font-medium w-full sm:w-auto whitespace-nowrap text-base lg:text-lg"
            >
              <FileText className="w-5 h-5" />
              {t('ملخص تنفيذي / Pitch Deck', 'Executive Summary / Pitch Deck')}
            </a>
          </div>

          {/* Small Note */}
          <p className="text-sm text-muted-foreground pt-4 max-w-xl">
            {t(
              'هذا العرض للاستخدام داخل البوث – الفكرة ما زالت في مرحلة التطوير والاختبارات الأولية.',
              'This demo is for booth display – The concept is still in early R&D and testing phase.'
            )}
          </p>
        </div>

        {/* Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Glow Effect Background */}
            <div className="absolute inset-0 bg-gradient-radial opacity-60 blur-3xl" />
            
            {/* Buoy Container */}
            <div className="relative glass-card p-8 rounded-3xl neon-glow animate-float">
              <img 
                src={buoy} 
                alt="NanoClean Smart Buoy"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
