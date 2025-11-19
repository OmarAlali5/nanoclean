import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { DollarSign, TrendingUp } from 'lucide-react';

const Metrics = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const metrics = [
    {
      icon: DollarSign,
      text: t(
        'تكلفة تقديرية للوحدة: 27,000 – 63,000 ريال',
        'Estimated Unit Cost: 27,000 – 63,000 SAR'
      ),
    },
    {
      icon: TrendingUp,
      text: t(
        'نماذج ربحية: بيع، تأجير، صيانة، منصة رقمية',
        'Revenue Models: Sales, Rental, Maintenance, Digital Platform'
      ),
    },
  ];

  return (
    <section ref={ref} className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-5xl mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}>
        <div className="grid md:grid-cols-2 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border-border-glow/30 hover:border-primary/50 hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5 flex-shrink-0">
                    <div className="w-full h-full bg-background-secondary rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {metric.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
