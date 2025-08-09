import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Supreme Court Badge */}
          <div className="inline-flex items-center bg-yourdost-purple-light text-yourdost-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
            SUPREME COURT • JULY 25, 2025
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Make Your Institution{" "}
            <span className="text-yourdost-purple">Supreme Court Compliant</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            India's Supreme Court has issued 15 nationwide directives to curb 
            student suicides and strengthen mental health support across 
            schools, colleges, universities, and coaching centres. YourDOST 
            operationalizes compliance—end-to-end.
          </p>

          {/* Features List */}
          <div className="space-y-4">
            {[
              "24×7 support by qualified psychologists (chat, audio, video)",
              "On-campus face-to-face counselling", 
              "Dedicated telephonic helpline and crisis response",
              "Workshops, webinars, and staff sensitisation",
              "Access to a 900+ expert network"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-success-green rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-1">
          <div className="bg-golden-bg border border-golden-yellow/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              We help leading institutes create Happier Campuses.
            </h2>
            <p className="text-muted-foreground mb-6">
              Our technology platform offers stigma-free therapeutic solutions. 
              Join the leaders who have created happier campuses for{" "}
              <strong className="text-foreground">10+ million lives.</strong>
            </p>
            <Button className="bg-yourdost-purple text-white hover:bg-yourdost-purple/90 w-full rounded-lg font-medium">
              Request a Callback
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;