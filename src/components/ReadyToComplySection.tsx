import { Button } from "@/components/ui/button";

const ReadyToComplySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-left">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Comply?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          We'll audit current processes, define gaps, and propose a compliance roadmap.
        </p>
        <Button className="bg-yourdost-purple text-white hover:bg-yourdost-purple/90 px-8 py-3 rounded-lg font-medium text-lg">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default ReadyToComplySection;