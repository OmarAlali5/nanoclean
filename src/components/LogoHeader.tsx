import logo from '@/assets/nanoclean-logo.png';

const LogoHeader = () => {
  return (
    <div className="fixed top-6 left-6 z-50 animate-fade-in">
      <a href="/" className="block">
        <img 
          src={logo} 
          alt="NanoClean Logo" 
          className="h-12 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </a>
    </div>
  );
};

export default LogoHeader;
