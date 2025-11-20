import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { QrCode, FileText, Leaf, MessageSquare, Info } from 'lucide-react';

const QRSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const qrContent = [
    {
      icon: FileText,
      text: t('ملخص تنفيذي قصير عن المشروع (1–2 صفحة).', 'Brief executive summary (1-2 pages).'),
    },
    {
      icon: Leaf,
      text: t('معلومات الأثر البيئي.', 'Environmental impact information.'),
    },
    {
      icon: MessageSquare,
      text: t('نموذج تواصل/اهتمام.', 'Contact/interest form.'),
    },
    {
      icon: Info,
      text: t('تفاصيل تقنية مبسّطة.', 'Simplified technical details.'),
    },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 blob-container">
      <div className="blob blob-2" style={{ opacity: 0.1 }} />

      <div className={`max-w-6xl mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30 mb-4">
            <QrCode className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              {t('امسح للاستكشاف', 'Scan to Explore')}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            <span className="gradient-text">
              {t('امسح الـ QR لقراءة المزيد عن نانوكلين', 'Scan QR to Learn More About NanoClean')}
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* QR Code */}
          <div className="flex justify-center lg:order-1 order-first">
            <div className="relative">
              {/* Scan badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30">
                <QrCode className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium">
                  {t('امسح للاستكشاف', 'Scan to Explore')}
                </span>
              </div>

              {/* QR Container */}
              <div className="relative glass-card backdrop-blur-xl p-10 rounded-3xl">
                <div className="w-80 h-80 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="text-center space-y-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fff6463be05f5414390b1cc7ab38298c4%2F418b62091026403eb002ad1e735a4f1d?format=webp"
                      alt="NanoClean QR Code"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-8 lg:order-2 order-last">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {t('وش يفتح الـ QR؟', 'What Does the QR Open?')}
              </h3>
              
              <div className="space-y-4">
                {qrContent.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl glass-card border-border-glow/20 hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-foreground/80 leading-relaxed pt-1">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Note */}
            <div className="glass-card p-6 rounded-xl border-accent/30">
              <p className="text-sm text-foreground/70 leading-relaxed">
                {t(
                  'مناسب للمستثمرين، الجهات البيئية، وشركات النفط والغاز.',
                  'Suitable for investors, environmental agencies, and oil & gas companies.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
