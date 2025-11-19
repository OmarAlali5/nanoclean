import logo from '@/assets/nanoclean-logo.png';

const LogoHeader = () => {
  return (
    <div className="fixed top-6 left-6 z-50" style={{ pointerEvents: 'auto' }}>
      <img
        src={logo}
        alt="NanoClean Logo"
        className="h-32 w-auto drop-shadow-lg"
      />
    </div>
  );
};

export default LogoHeader;
