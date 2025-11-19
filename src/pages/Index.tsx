import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import LogoHeader from '@/components/LogoHeader';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Metrics from '@/components/Metrics';
import QRSection from '@/components/QRSection';
import TargetCustomers from '@/components/TargetCustomers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        {/* Logo - Fixed Position */}
        <LogoHeader />
        
        {/* Language Toggle - Fixed Position */}
        <div className="fixed top-6 right-6 z-50">
          <LanguageToggle />
        </div>

        {/* Main Content */}
        <main>
          <Hero />
          <Features />
          <Metrics />
          <QRSection />
          <TargetCustomers />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
