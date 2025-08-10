import { useState } from "react";
interface GuidelineCardProps {
  number: number;
  title: string;
  onRead: () => void;
}
const GuidelineCard = ({
  number,
  title,
  onRead
}: GuidelineCardProps) => {
  return <div className="bg-card-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="flex-shrink-0 w-8 h-8 bg-yourdost-purple-light text-yourdost-purple rounded-full flex items-center justify-center text-sm font-semibold">
            {number}
          </div>
          <h3 className="font-semibold text-foreground text-base leading-tight">
            {title}
          </h3>
        </div>
        <button onClick={onRead} className="text-yourdost-purple text-sm font-medium hover:underline flex-shrink-0">
          Read
        </button>
      </div>
    </div>;
};
const GuidelinesSection = () => {
  const [showMore, setShowMore] = useState(false);
  const guidelines = [{
    id: 1,
    title: "24×7 Psychological Support"
  }, {
    id: 2,
    title: "On-Campus Counselling"
  }, {
    id: 3,
    title: "Telephonic Helpline"
  }, {
    id: 4,
    title: "Workshops & Sensitisation"
  }, {
    id: 5,
    title: "Crisis Management Protocol"
  },
  // Additional guidelines for "See more"
  {
    id: 6,
    title: "Mental Health Awareness Programs"
  }, {
    id: 7,
    title: "Faculty Training & Development"
  }, {
    id: 8,
    title: "Student Wellness Monitoring"
  }, {
    id: 9,
    title: "Emergency Response Protocols"
  }, {
    id: 10,
    title: "Compliance Documentation"
  }, {
    id: 11,
    title: "Regular Assessment & Evaluation"
  }, {
    id: 12,
    title: "Stakeholder Communication"
  }, {
    id: 13,
    title: "Resource Allocation Planning"
  }, {
    id: 14,
    title: "Quality Assurance Measures"
  }, {
    id: 15,
    title: "Continuous Improvement Process"
  }];
  const displayedGuidelines = showMore ? guidelines : guidelines.slice(0, 5);
  const handleRead = (id: number) => {
    console.log(`Reading guideline ${id}`);
  };
  return <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8">Supreme Court Guidelines - In Brief</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedGuidelines.map(guideline => <GuidelineCard key={guideline.id} number={guideline.id} title={guideline.title} onRead={() => handleRead(guideline.id)} />)}
      </div>

      {/* See More/Less Button */}
      <button onClick={() => setShowMore(!showMore)} className="text-yourdost-purple font-medium hover:underline">
        {showMore ? 'See less' : 'See more'}
      </button>
    </section>;
};
export default GuidelinesSection;