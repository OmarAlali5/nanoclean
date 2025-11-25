import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const QRSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050A15] via-[#0A1525] to-[#0A2235]" />
      
      {/* Subtle neon particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="blob blob-1" style={{ opacity: 0.15 }} />
        <div className="blob blob-2" style={{ opacity: 0.15 }} />
      </div>

      <div className={`relative max-w-7xl mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}>
        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE - Text Content */}
          <div className="space-y-8 text-center lg:text-right order-2 lg:order-1">
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-foreground">
              {t(
                'امسح الـ QR لتسجيل اهتمامك بالتعاون مع نانوكلين',
                'Scan the QR to Register Your Interest in Collaborating with NanoClean'
              )}
            </h2>

            {/* Subtitle */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-foreground/70 leading-loose">
                {t(
                  'نموذج مخصص للجهات والأفراد الراغبين في التعاون، الشراكة، أو الحصول على معلومات إضافية عن مشروع نانوكلين.',
                  'A dedicated form for entities and individuals interested in collaboration, partnership, or obtaining additional information about the NanoClean project.'
                )}
              </p>
              
              {/* Glowing horizontal line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto lg:mx-0 lg:mr-auto opacity-60" />
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(20,241,200,0.3)] hover:shadow-[0_0_40px_rgba(20,241,200,0.5)] transition-all duration-300"
                onClick={() => window.open('https://tally.so/r/jaa4v9', '_blank')}
              >
                <span>{t('فتح نموذج الاهتمام', 'Open Interest Form')}</span>
                <ExternalLink className="w-5 h-5 mr-2 ml-2" />
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE - QR Code */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Glowing ring behind QR (blurred) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
              
              {/* QR Container */}
              <div className="relative glass-card backdrop-blur-xl p-8 sm:p-12 rounded-[40px] border-2 border-primary/30 shadow-2xl group-hover:scale-[1.03] transition-transform duration-300">
                <div className="w-64 sm:w-80 h-64 sm:h-80 bg-white rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(20,241,200,0.2)]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fff6463be05f5414390b1cc7ab38298c4%2F418b62091026403eb002ad1e735a4f1d?format=webp"
                    alt="NanoClean Interest Form QR Code"
                    className="w-full h-full object-cover rounded-3xl p-4"
                  />
                </div>
                
                {/* Text under QR */}
                <p className="text-center mt-6 text-sm font-medium text-foreground/60 tracking-wide">
                  Scan to Register Your Interest
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QRSection;
