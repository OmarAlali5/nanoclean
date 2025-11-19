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
      email: 'example2@nanoclean.sa',
      phone: '0540705086',
      linkedinUrl: 'https://www.linkedin.com/in/abdallah-mohrab-63462834a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BpxJjYg8TuKnyqZDl%2FcGug%3D%3D',
    },
    {
      label: t('عبدالله محمد', 'Abdullah Mohammed'),
      email: 'example3@nanoclean.sa',
      phone: '0501714085',
      linkedinUrl: 'https://www.linkedin.com/in/abdullahmohammedsaifali',
    },
    {
      label: t('شيماء الزهراني', 'Shaymaa Alzahrani'),
      email: 'example4@nanoclean.sa',
      phone: '0532388066',
      linkedinUrl: 'https://www.linkedin.com/in/shaymaa-alzahrani/',
    },
    {
      label: t('نهال النونو', 'Nihal Alnounou'),
      email: 'example5@nanoclean.sa',
      phone: '0554461036',
      linkedinUrl: 'https://www.linkedin.com/in/nihal-alnounou/',
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
                
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary hover:text-primary-glow transition-colors duration-300 cursor-pointer font-medium">
                    {t('لينكدان', 'LinkedIn')}
                  </span>
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
