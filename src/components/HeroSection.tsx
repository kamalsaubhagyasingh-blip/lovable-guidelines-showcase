import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const HeroSection = () => {
  const features = ["24×7 support by qualified psychologists (chat, audio, video)", "On-campus face-to-face counselling", "Dedicated telephonic helpline and crisis response", "Workshops, webinars, and staff sensitisation", "Access to a 900+ expert network"];
  return <section className="max-w-7xl mx-auto px-6 py-12">
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
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">India's Supreme Court has issued 15 nationwide directives to curb student suicides and strengthen mental health support across schools, colleges, universities, and coaching centres. YourDOST operationalizes compliance end-to-end.</p>

          {/* Features List Card */}
          <div className="bg-card-background border border-border rounded-2xl p-6 shadow-[var(--shadow-md)]">
            <div className="space-y-4">
              {features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-yourdost-purple/10">
                    <Check className="w-3.5 h-3.5 text-yourdost-purple" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>)}
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-1">
          <div className="rounded-xl p-6 border border-golden-yellow/40 shadow-[var(--shadow-md)]" style={{
          background: "radial-gradient(120px 60px at 20% 80%, hsl(var(--golden-yellow-light)) 0%, transparent 70%)," + "radial-gradient(160px 80px at 90% 20%, hsl(var(--golden-yellow-light)) 0%, transparent 70%)," + "hsl(var(--golden-yellow-bg))"
        }}>
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


      {/* Operational Institutes Card */}
      <Card className="mt-10 bg-card-background border border-border rounded-2xl shadow-[var(--shadow-md)]">
        <CardContent className="p-6">
          <p className="text-base md:text-lg leading-7 text-muted-foreground">
            We are operational in leading institutes of the country like IIT Delhi, IIT Roorkee, IIT Madras, IIM Bangalore, IIM Kashipur, IIIT Delhi, NIT Delhi, JKLU Jaipur, Shiv Nadar University, Ahmedabad University, LPU Jalandhar, Gateway Education, BIMTech, Rishihood University, IMI Delhi, IMT Ghaziabad, Avantika University, SRM University, VIT University, O.P. Jindal Global University, IISC Bangalore, TIFR where we have shown great results in fostering emotional well-being of students and staff and supplementing the existing campus wellness efforts.
          </p>
        </CardContent>
      </Card>

    </section>;
};
export default HeroSection;