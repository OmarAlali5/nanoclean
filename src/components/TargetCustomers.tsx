import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Building2, Anchor, TreePine, Waves } from 'lucide-react';

const TargetCustomers = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const customers = [
    {
      icon: Building2,
      text: t('شركات النفط والغاز', 'Oil & Gas Companies'),
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Anchor,
      text: t('الموانئ البحرية', 'Seaports'),
      gradient: 'from-secondary to-accent',
    },
    {
      icon: TreePine,
      text: t('الهيئات البيئية', 'Environmental Agencies'),
      gradient: 'from-accent to-primary',
    },
    {
      icon: Waves,
      text: t('المناطق الساحلية والمحميات', 'Coastal Areas & Reserves'),
      gradient: 'from-primary to-accent',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-6xl mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">
              {t('الجهات المستهدفة', 'Initial Target Customers')}
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </div>

        {/* Customers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customers.map((customer, index) => {
            const Icon = customer.icon;
            return (
              <div
                key={index}
                className="group glass-card p-6 rounded-2xl hover:neon-glow transition-all duration-500 hover:scale-105 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="relative mb-4 inline-block">
                  <div className={`absolute inset-0 bg-gradient-to-br ${customer.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className={`relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${customer.gradient} p-0.5`}>
                    <div className="w-full h-full bg-background-secondary rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {customer.text}
                </p>

                {/* Bottom Accent */}
                <div className={`mt-4 h-1 w-0 group-hover:w-full mx-auto bg-gradient-to-r ${customer.gradient} rounded-full transition-all duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetCustomers;
