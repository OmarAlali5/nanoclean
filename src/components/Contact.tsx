import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, Linkedin, Users } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const teamMembers = [
    {
      label: t('عمر العلي', 'Omar Alali'),
      email: 'omar.alali966@gmail.com',
      phone: '0530642803',
      linkedinUrl: 'https://www.linkedin.com/in/omar-alali-/',
    },
    {
      label: t('عبدالله مهراب', 'Abdullah Mohrab'),
      email: 'abadymd77@gmail.com',
      phone: '0540705086',
      linkedinUrl: 'https://www.linkedin.com/in/abdallah-mohrab-63462834a',
    },
    {
      label: t('عبدالله محمد', 'Abdullah Mohammed'),
      email: 'abdullah.mohammedsa2005@gmail.com',
      phone: '0501714085',
      linkedinUrl: 'https://www.linkedin.com/in/abdullahmohammedsaifali',
    },
    {
      label: t('شيماء الزهراني', 'Shaymaa Alzahrani'),
      email: 'shaymaabdullah29@gmail.com',
      phone: '0532388066',
      linkedinUrl: 'https://www.linkedin.com/in/shaymaaalzahrani',
    },
    {
      label: t('نهال النونو', 'Nihal Alnounou'),
      email: 'nehal1nono1@gmail.com',
      phone: '0554461036',
      linkedinUrl: 'https://www.linkedin.com/in/nihalt',
    },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 blob-container">
      <div className="blob blob-1" style={{ opacity: 0.1 }} />

      <div className={`max-w-7xl mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              {t('تواصل معنا', 'Contact Us')}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            <span className="gradient-text">
              {t('معلومات التواصل', 'Contact Information')}
            </span>
          </h2>
        </div>

        {/* Team Email */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="glass-card p-10 rounded-3xl border border-border-glow/40 neon-glow text-center">
            <Mail className="w-14 h-14 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-3 text-foreground">
              {t('البريد الإلكتروني للفريق', 'Team Email')}
            </h3>
            <a
              href="mailto:NanoClean.sa@outlook.com"
              className="text-2xl font-bold text-primary hover:text-primary-glow transition-colors duration-300 break-all"
            >
              NanoClean.sa@outlook.com
            </a>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card p-7 rounded-2xl border border-border-glow/40 hover:border-primary/50 hover:neon-glow transition-all duration-300 h-full flex flex-col"
            >
              <h4 className="text-base font-bold mb-5 text-foreground flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0">
                  {index + 1}
                </div>
                <span className="line-clamp-2">{member.label}</span>
              </h4>

              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <p className="text-xs text-foreground/60 mb-1">Email</p>
                    <p className="text-foreground/80 break-all text-sm">{member.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <p className="text-xs text-foreground/60 mb-1">Phone</p>
                    <p className="text-foreground/80 text-sm">{member.phone}</p>
                  </div>
                </div>

                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/25 transition-colors">
                    <Linkedin className="w-4 h-4 text-accent" />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <p className="text-xs text-foreground/60 mb-1">LinkedIn</p>
                    <span className="text-primary hover:text-primary-glow transition-colors duration-300 font-medium text-sm">
                      {t('اضغط للزيارة', 'View Profile')}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
