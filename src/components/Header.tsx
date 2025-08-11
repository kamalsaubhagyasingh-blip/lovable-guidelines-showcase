import YourDOSTLogo from "@/assets/yourdost-logo.svg";
import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="bg-card-background shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={YourDOSTLogo} alt="YourDOST Logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold text-foreground">
          </span>
          </div>
          <Button
            onClick={() => window.Tally?.openPopup('3EO7N4', {
              layout: 'modal',
              width: 700,
              hiddenFields: { ref: 'header', url: window.location.href },
            })}
            className="bg-yourdost-purple text-white hover:bg-yourdost-purple/90 px-6 py-2 rounded-full font-medium"
          >
            Book a Compliance Call
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;