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
    <div className="min-h-screen bg-background">
      {/* Logo - Fixed Position */}
      <LogoHeader />

      {/* Language Toggle - Fixed Position */}
      <div className="fixed top-4 right-6 z-40">
        <LanguageToggle />
      </div>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <Features />
        <Metrics />
        <QRSection />
        <TargetCustomers />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
