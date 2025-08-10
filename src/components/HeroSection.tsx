import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  const features = [
    "24×7 support by qualified psychologists (chat, audio, video)",
    "On-campus face-to-face counselling",
    "Dedicated telephonic helpline and crisis response",
    "Workshops, webinars, and staff sensitisation",
    "Access to a 900+ expert network",
  ];

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

          {/* Features List Card */}
          <div className="bg-card-background border border-border rounded-2xl p-6 shadow-[var(--shadow-md)]">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-yourdost-purple/10">
                    <Check className="w-3.5 h-3.5 text-yourdost-purple" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-1">
          <div
            className="rounded-xl p-6 border border-golden-yellow/40 shadow-[var(--shadow-md)]"
            style={{
              background:
                "radial-gradient(120px 60px at 20% 80%, hsl(var(--golden-yellow-light)) 0%, transparent 70%)," +
                "radial-gradient(160px 80px at 90% 20%, hsl(var(--golden-yellow-light)) 0%, transparent 70%)," +
                "hsl(var(--golden-yellow-bg))",
            }}
          >
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

      {/* Trust Built With Leaders */}
      <div role="region" aria-labelledby="trust-leaders" className="mt-12">
        <h2 id="trust-leaders" className="text-2xl font-semibold text-foreground text-center mb-8">
          Trust Built With Leaders
        </h2>

        <div className="grid gap-8 sm:grid-cols-3">
          <article className="text-center">
            <div className="mx-auto mb-4 h-20 w-20 rounded-full ring-2 ring-border overflow-hidden">
              <img src="/placeholder.svg" alt="Leader portrait placeholder" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Hon. President Droupadi Murmu</h3>
            <p className="text-muted-foreground mt-1">Invited to present our work at the Rashtrapati Bhavan</p>
          </article>

          <article className="text-center">
            <div className="mx-auto mb-4 h-20 w-20 rounded-full ring-2 ring-border overflow-hidden">
              <img src="/placeholder.svg" alt="Leader portrait placeholder" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Hon. PM Narendra Modi</h3>
            <p className="text-muted-foreground mt-1">Presented Mental Health Policy recommendations to the Prime Minister</p>
          </article>

          <article className="text-center">
            <div className="mx-auto mb-4 h-20 w-20 rounded-full ring-2 ring-border overflow-hidden">
              <img src="/placeholder.svg" alt="Institution emblem placeholder" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Whitehouse/United Nations</h3>
            <p className="text-muted-foreground mt-1">Invited to present our parenthood program at the White House (U.S.A)</p>
          </article>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-full border border-border px-4 py-2 text-center">
            <strong className="text-foreground">National Startup Awards</strong>
            <div className="text-muted-foreground text-sm">Health & Wellness</div>
          </div>
          <div className="rounded-full border border-border px-4 py-2 text-center">
            <strong className="text-foreground">IHW Gold Award</strong>
            <div className="text-muted-foreground text-sm">Mental Well Being</div>
          </div>
          <div className="rounded-full border border-border px-4 py-2 text-center">
            <strong className="text-foreground">Forbes</strong>
            <div className="text-muted-foreground text-sm">30 Under 30 Asia</div>
          </div>
          <div className="rounded-full border border-border px-4 py-2 text-center hidden lg:block">
            <strong className="text-foreground">More Recognitions</strong>
            <div className="text-muted-foreground text-sm">Across India & global</div>
          </div>
        </div>
      </div>

      {/* Operational Institutes Card */}
      <Card className="mt-8">
        <CardContent className="pt-6">
          <p className="text-sm leading-7 text-muted-foreground">
            We are operational in leading institutes of the country like IIT Delhi, IIT Roorkee, IIT Madras, IIM Bangalore, IIM Udaipur, IIM Kashipur, IIIT Delhi, NIT Delhi, JKLU Jaipur, Shiv Nadar University, Ahmedabad University, LPU Jalandhar, Gateway Education, BIMTech, Rishihood University, IMI Delhi, IMT Ghaziabad, Avantika University, SRM University, VIT University, O.P. Jindal Global University where we have shown great results in fostering emotional well-being of students and staff and supplementing the existing campus wellness efforts.
          </p>
        </CardContent>
      </Card>

    </section>
  );
};

export default HeroSection;
