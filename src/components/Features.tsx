import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Waves, Zap, Sun } from 'lucide-react';

const Features = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Waves,
      title: t('رصد ذكي للتسرب', 'Smart Spill Detection'),
      description: t(
        'حساسات نانوية تستشعر المركبات الهيدروكربونية خلال ثوانٍ.',
        'Nano-sensors detect hydrocarbon compounds within seconds.'
      ),
      gradient: 'from-primary to-primary-glow',
    },
    {
      icon: Zap,
      title: t('معالجة وتحويل حيوي', 'Bioconversion Treatment'),
      description: t(
        'وحدة تحويل داخلية تمتص الملوثات وتحولها إلى وقود حيوي.',
        'Internal conversion unit absorbs pollutants and converts them to biofuel.'
      ),
      gradient: 'from-secondary to-accent',
    },
    {
      icon: Sun,
      title: t('تشغيل ذاتي بالكامل', 'Fully Autonomous'),
      description: t(
        'طاقة شمسية + ملاحة + اتصال مباشر مع المنصة السحابية.',
        'Solar power + navigation + direct cloud platform connection.'
      ),
      gradient: 'from-accent to-primary',
    },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-7xl mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="gradient-text">
              {t('المميزات الرئيسية', 'Key Features')}
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card backdrop-blur-xl bg-card/30 p-8 rounded-2xl border border-border-glow/30 hover:border-primary/50 hover:neon-glow hover-lift transition-all duration-200 flex flex-col h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  <Icon className="w-9 h-9 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
