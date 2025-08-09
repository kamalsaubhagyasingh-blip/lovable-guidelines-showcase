import YourDOSTLogo from "@/assets/yourdost-logo.svg";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          <img 
            src={YourDOSTLogo} 
            alt="YourDOST" 
            className="h-8 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;