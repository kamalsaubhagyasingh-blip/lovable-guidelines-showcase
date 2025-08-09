import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import GuidelineCard from "@/components/GuidelineCard";
import WhatsAtStake from "@/components/WhatsAtStake";
import { supremeCourtGuidelines } from "@/data/guidelines";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedGuidelines = showAll 
    ? supremeCourtGuidelines 
    : supremeCourtGuidelines.slice(0, 5);

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-bg)' }}>
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            YourDOST – Supreme Court Compliance
          </h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive guidelines for workplace harassment prevention and mental health support
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Supreme Court Guidelines (in Gist)
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Following 15 key compliance requirements with top 5 aligned to our mental health offerings shown first:
              </p>
            </div>

            <div className="space-y-4">
              {displayedGuidelines.map((guideline) => (
                <GuidelineCard
                  key={guideline.id}
                  number={guideline.id}
                  title={guideline.title}
                  description={guideline.description}
                  isHighlighted={guideline.isHighlighted}
                />
              ))}
            </div>

            {/* See More / See Less Button */}
            {supremeCourtGuidelines.length > 5 && (
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(!showAll)}
                  className="gap-2 px-6 py-2 font-medium border-compliance-blue text-compliance-blue hover:bg-compliance-light hover:border-compliance-blue"
                >
                  {showAll ? (
                    <>
                      See Less
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      See More ({supremeCourtGuidelines.length - 5} more guidelines)
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <WhatsAtStake />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
