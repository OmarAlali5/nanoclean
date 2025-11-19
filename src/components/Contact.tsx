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
      linkedin: t('رابط الحساب', 'Profile Link'),
    },
    {
      label: t('عضو 2', 'Member 2'),
      email: 'example2@nanoclean.sa',
      phone: '05xxxxxxxx',
      linkedin: t('رابط الحساب', 'Profile Link'),
    },
    {
      label: t('عضو 3', 'Member 3'),
      email: 'example3@nanoclean.sa',
      phone: '05xxxxxxxx',
      linkedin: t('رابط الحساب', 'Profile Link'),
    },
    {
      label: t('عضو 4', 'Member 4'),
      email: 'example4@nanoclean.sa',
      phone: '05xxxxxxxx',
      linkedin: t('رابط الحساب', 'Profile Link'),
    },
    {
      label: t('عضو 5', 'Member 5'),
      email: 'example5@nanoclean.sa',
      phone: '05xxxxxxxx',
      linkedin: t('رابط الحساب', 'Profile Link'),
    },
  ];

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 blob-container">
      <div className="blob blob-1" style={{ opacity: 0.1 }} />
      
      <div className={`max-w-7xl mx-auto scroll-animate ${isVisible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              {t('تواصل معنا', 'Contact Us')}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">
              {t('معلومات التواصل', 'Contact Information')}
            </span>
          </h2>
        </div>

        {/* Team Email */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="glass-card p-8 rounded-2xl neon-glow text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-foreground">
              {t('البريد الإلكتروني للفريق', 'Team Email')}
            </h3>
            <a 
              href="mailto:NanoClean.sa@outlook.com"
              className="text-2xl font-semibold text-primary hover:text-primary-glow transition-colors duration-300"
            >
              NanoClean.sa@outlook.com
            </a>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border-l-4 border-l-primary/50 hover:border-l-primary hover:neon-glow transition-all duration-300"
            >
              <h4 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                {member.label}
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/70 truncate">{member.email}</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground/70">{member.phone}</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/70">{member.linkedin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
