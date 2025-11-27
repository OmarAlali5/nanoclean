import LanguageToggle from '@/components/LanguageToggle';
import LogoHeader from '@/components/LogoHeader';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050A15] via-[#0A1525] to-[#0A2235] relative overflow-hidden">
      {/* Logo - Fixed Position */}
      <LogoHeader />

      {/* Language Toggle - Fixed Position */}
      <div className="fixed top-4 right-6 z-40">
        <LanguageToggle />
      </div>

      {/* Subtle background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="blob blob-1" style={{ opacity: 0.15 }} />
        <div className="blob blob-2" style={{ opacity: 0.15 }} />
      </div>

      {/* Main Content - Single Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-foreground">
            {t('نانوكلين – حل ذكي لحماية البحر', 'NanoClean – Smart Solution for Ocean Protection')}
          </h1>

          {/* Short Description */}
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            {t(
              'تقنية مبتكرة تعتمد على الذكاء الاصطناعي وتقنية النانو لمراقبة وتنبيه ومعالجة التسربات النفطية بشكل سريع وفعّال.',
              'An innovative technology that uses artificial intelligence and nanotechnology to monitor, alert to, and treat oil leaks quickly and effectively.'
            )}
          </p>

          {/* Glowing divider */}
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-60" />

          {/* Three Bullet Points */}
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-foreground/70">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(20,241,200,0.5)]" />
              <p className="text-base sm:text-lg">
                {t('رصد سريع للتسربات', 'Rapid spill detection')}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 text-foreground/70">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(20,241,200,0.5)]" />
              <p className="text-base sm:text-lg">
                {t('تقليل أثر التلوث على البيئة البحرية', 'Reduce pollution impact on marine environment')}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 text-foreground/70">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(20,241,200,0.5)]" />
              <p className="text-base sm:text-lg">
                {t('تصميم يعتمد على تقنيات حديثة ومستقبلية', 'Design based on modern and future technologies')}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto px-10 py-7 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(20,241,200,0.3)] hover:shadow-[0_0_40px_rgba(20,241,200,0.5)] transition-all duration-300"
              onClick={() => window.open('https://tally.so/r/jaa4v9', '_blank')}
            >
              <span>{t('سجّل اهتمامك بالتعاون معنا', 'Register Your Interest in Collaborating')}</span>
              <ExternalLink className="w-5 h-5 mr-2 ml-2" />
            </Button>
          </div>

          {/* QR Code Section */}
          <div className="pt-12 space-y-8">
            {/* QR Headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t('امسح الـ QR لتسجيل اهتمامك بالتعاون مع نانوكلين', 'Scan the QR to Register Your Interest in Collaborating with NanoClean')}
            </h2>

            {/* QR Description */}
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              {t(
                'نموذج مخصص للجهات والأفراد الراغبين في التعاون، الشراكة، أو الحصول على معلومات إضافية عن مشروع نانوكلين.',
                'A dedicated form for entities and individuals interested in collaboration, partnership, or obtaining additional information about the NanoClean project.'
              )}
            </p>

            {/* Glowing horizontal line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-60" />

            <div className="relative group inline-block">
              {/* Glowing ring behind QR */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
              
              {/* QR Container */}
              <div className="relative glass-card backdrop-blur-xl p-8 sm:p-10 rounded-[40px] border-2 border-primary/30 shadow-2xl group-hover:scale-[1.03] transition-transform duration-300">
                <div className="w-56 sm:w-64 h-56 sm:h-64 bg-white rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(20,241,200,0.2)]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fff6463be05f5414390b1cc7ab38298c4%2F418b62091026403eb002ad1e735a4f1d?format=webp"
                    alt="NanoClean Interest Form QR Code"
                    className="w-full h-full object-cover rounded-3xl p-4"
                  />
                </div>
                
                {/* Caption under QR */}
                <p className="text-center mt-6 text-sm font-medium text-foreground/60 tracking-wide">
                  Scan to Learn More
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
