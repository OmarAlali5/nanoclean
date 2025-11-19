import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FileText, Leaf, ClipboardList, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from '@/components/LanguageToggle';

const Info = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const sections = [
    {
      id: 'executive',
      icon: FileText,
      titleAr: 'الملخص التنفيذي (Executive Summary)',
      titleEn: 'Executive Summary',
      descAr: 'وثيقة مختصرة (1–2 صفحة) تشرح فكرة نانوكلين، التقنية، النموذج الربحي، والقيمة البيئية.',
      descEn: 'A short 1–2 page document explaining the NanoClean concept, technology, business model, and environmental value.',
      buttonAr: 'تحميل الملخص التنفيذي PDF',
      buttonEn: 'Download Executive Summary (PDF)',
      link: '#pdf-executive-summary',
      gradient: 'from-primary to-secondary',
    },
    {
      id: 'environmental',
      icon: Leaf,
      titleAr: 'الأثر البيئي للمشروع',
      titleEn: 'Environmental Impact',
      descAr: 'نظرة سريعة حول تأثير نانوكلين في الحد من التلوث البحري، حماية السواحل، وتقليل الانبعاثات.',
      descEn: 'A quick overview of how NanoClean reduces marine pollution, protects coastlines, and minimizes emissions.',
      buttonAr: 'عرض ورقة الأثر البيئي',
      buttonEn: 'View Environmental Impact Sheet',
      link: '#pdf-environmental',
      gradient: 'from-accent to-primary',
    },
    {
      id: 'partnership',
      icon: ClipboardList,
      titleAr: 'نموذج اهتمام للتعاون',
      titleEn: 'Partnership Interest Form',
      descAr: 'نموذج خاص للجهات الراغبة في تجربة نانوكلين، دعم المشروع، أو فتح باب الشراكات.',
      descEn: 'A dedicated form for organizations interested in piloting NanoClean, supporting the project, or exploring collaborations.',
      buttonAr: 'فتح نموذج الاهتمام',
      buttonEn: 'Open Interest Form',
      link: '#form-partnership',
      gradient: 'from-secondary to-accent',
    },
    {
      id: 'technical',
      icon: Zap,
      titleAr: 'نظرة تقنية مبسّطة',
      titleEn: 'Technical Overview',
      descAr: 'شرح بسيط للحساسات النانوية، الذكاء الاصطناعي، وحدة التحويل الحيوي، وآلية الاتصال السحابي.',
      descEn: 'A simplified explanation of the nano-sensors, AI detection, biofuel conversion unit, and cloud connectivity.',
      buttonAr: 'قراءة التفاصيل التقنية',
      buttonEn: 'View Technical Details',
      link: '#pdf-technical',
      gradient: 'from-primary to-accent',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-40 border-b border-border-glow/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold gradient-text">
            {t('NanoClean', 'NanoClean')}
          </a>
          <div className="flex items-center gap-6">
            <div>
              <LanguageToggle />
            </div>
            <a href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              {t('← العودة إلى الرئيسية', '← Back to Home')}
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 blob-container overflow-hidden">
          <div className="blob blob-1" style={{ opacity: 0.1 }} />
          <div className="blob blob-2" style={{ opacity: 0.08 }} />
          
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              <span className="gradient-text">
                {t('مركز المعلومات – NanoClean', 'NanoClean – Information Center')}
              </span>
            </h1>
            
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              {t(
                'جميع المواد التعريفية الأساسية حول مشروع نانوكلين، تشمل الملخص التنفيذي، الأثر البيئي، التفاصيل التقنية، ونموذج الاهتمام للتعاون.',
                'All essential materials about the NanoClean project including the executive summary, environmental impact, technical overview, and partnership interest form.'
              )}
            </p>
          </div>
        </section>

        {/* Information Sections */}
        <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-7xl mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                const title = t(section.titleAr, section.titleEn);
                const description = t(section.descAr, section.descEn);
                const buttonText = t(section.buttonAr, section.buttonEn);
                
                return (
                  <div
                    key={section.id}
                    className="group glass-card p-8 rounded-2xl border border-border-glow/40 hover:border-primary/50 hover:neon-glow transition-all duration-300 h-full flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="relative mb-6 inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} p-0.5`}>
                        <div className="w-full h-full bg-background-secondary rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {title}
                    </h3>
                    
                    <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
                      {description}
                    </p>

                    {/* Button */}
                    <Button 
                      asChild
                      className={`w-full gap-2 bg-gradient-to-r ${section.gradient} hover:opacity-90 transition-all duration-300 text-primary-foreground font-semibold mt-auto`}
                    >
                      <a href={section.link}>
                        {buttonText}
                      </a>
                    </Button>

                    {/* Bottom Accent Line */}
                    <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${section.gradient} rounded-full transition-all duration-500`} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Info Footer */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-border/30">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-foreground/60 text-sm leading-relaxed">
              {t(
                'جميع المستندات والنماذج أعلاه متوفرة للجهات المستثمرة والشركاء المحتملين. للمزيد من المعلومات، يرجى التواصل معنا عبر البريد الإلكتروني.',
                'All documents and forms above are available for potential investors and partners. For more information, please contact us via email.'
              )}
            </p>
            <a 
              href="mailto:NanoClean.sa@outlook.com"
              className="inline-block mt-4 text-primary hover:text-primary-glow font-semibold transition-colors"
            >
              NanoClean.sa@outlook.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Info;
