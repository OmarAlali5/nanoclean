import { useLanguage } from '@/contexts/LanguageContext';
import { QrCode, FileText, Leaf, MessageSquare, Info } from 'lucide-react';

const QRSection = () => {
  const { t } = useLanguage();

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
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 blob-container">
      <div className="blob blob-2" style={{ opacity: 0.1 }} />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30 mb-4">
            <QrCode className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              {t('امسح للاستكشاف', 'Scan to Explore')}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">
              {t('امسح الـ QR لقراءة المزيد عن نانوكلين', 'Scan QR to Learn More About NanoClean')}
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
              
              {/* QR Container */}
              <div className="relative glass-card p-8 rounded-3xl neon-glow">
                <div className="w-64 h-64 bg-white rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <QrCode className="w-20 h-20 mx-auto text-gray-400" />
                    <p className="text-sm font-medium text-gray-600">
                      QR Code
                      <br />
                      Placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-8">
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
