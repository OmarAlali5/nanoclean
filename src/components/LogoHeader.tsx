import logo from '@/assets/nanoclean-logo.png';

const LogoHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 border-b border-border-glow/20 backdrop-blur-xl" style={{ pointerEvents: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
        <img
          src={logo}
          alt="NanoClean Logo"
          className="h-16 w-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default LogoHeader;
