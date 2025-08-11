import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { supremeCourtGuidelines } from "@/data/guidelines";

const GuidelinesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const guidelines = supremeCourtGuidelines;
  const displayedGuidelines = showMore ? guidelines : guidelines.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8">
        Supreme Court’s 15 Mental Health Guidelines
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedGuidelines.map((g) => (
          <Collapsible key={g.id}>
            <div className="bg-card-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-8 h-8 bg-yourdost-purple-light text-yourdost-purple rounded-full flex items-center justify-center text-sm font-semibold">
                    {g.id}
                  </div>
                  <h3 className="font-semibold text-foreground text-base leading-tight">
                    {g.title}
                  </h3>
                </div>
                <CollapsibleTrigger className="text-yourdost-purple text-sm font-medium hover:underline flex-shrink-0">
                  Read
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="mt-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {g.description}
                </p>
              </CollapsibleContent>
            </div>
          </Collapsible>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-yourdost-purple font-medium hover:underline"
      >
        {showMore ? "See less" : "See more"}
      </button>
    </section>
  );
};

export default GuidelinesSection;
