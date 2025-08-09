interface GuidelineCardProps {
  number: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const GuidelineCard = ({ number, title, description, isHighlighted = false }: GuidelineCardProps) => {
  return (
    <div className={`
      p-6 rounded-lg border transition-all duration-200 hover:shadow-elevated
      ${isHighlighted 
        ? 'bg-compliance-light border-compliance-blue shadow-md' 
        : 'bg-white border-border shadow-card hover:border-compliance-blue/30'
      }
    `}>
      <div className="flex items-start gap-4">
        <div className={`
          flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
          ${isHighlighted 
            ? 'bg-compliance-blue text-white' 
            : 'bg-primary/10 text-primary'
          }
        `}>
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuidelineCard;