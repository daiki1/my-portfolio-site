import Me from './Me';

const Header = () => {
  return (
    <>
      {/* Desktop version - fixed sidebar */}
      <header className="hidden lg:flex lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-1/3 lg:justify-center lg:items-center p-8 bg-orange-100">
        <Me />
      </header>

      {/* Mobile version - inline at top */}
      <div className="pt-12 bg-orange-100 lg:hidden">
        <header className="text-center p-4 mb-4">
          <Me />
        </header>
      </div>
      
    </>
  );
};

export default Header;