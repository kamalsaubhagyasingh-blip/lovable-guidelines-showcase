interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
}

const PricingCard = ({ title, price, features, isHighlighted = false }: PricingCardProps) => {
  return (
    <div className={`
      bg-card-background rounded-lg p-6 border-2 
      ${isHighlighted 
        ? 'border-golden-yellow shadow-lg' 
        : 'border-border shadow-sm'
      }
    `}>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <div className="text-3xl font-bold text-yourdost-purple mb-6">{price}</div>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PackagesSection = () => {
  const packages = [
    {
      title: "Basic",
      price: "₹2L / Year",
      features: [
        "Dedicated Telephonic Helpline",
        "Mental Protocol Guidance",
        "Helpline Visibility Kit (print + digital)",
        "Biannual Faculty Sensitisation Training",
        "Crisis Management Protocol"
      ]
    },
    {
      title: "Premium", 
      price: "₹5L / Year",
      features: [
        "Everything in Basic",
        "24×7 Counselling (Chat/Audio/Video)",
        "2 On-Campus Counselling Days / Month",
        "2 Awareness Workshops / Year",
        "Biannual Faculty Sensitisation Training",
        "Crisis Management Protocol"
      ]
    },
    {
      title: "Premium Plus",
      price: "₹12L / Year", 
      features: [
        "Everything in Premium",
        "Weekly On-Campus Counselling",
        "Annual Compliance Report Preparation",
        "Biannual Faculty Sensitisation Training",
        "Crisis Management Protocol"
      ],
      isHighlighted: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-foreground mb-4">Packages</h2>
      <p className="text-muted-foreground mb-8">
        Each plan includes <strong className="text-foreground">Biannual Faculty Sensitisation Training</strong> and 
        a campus-ready <strong className="text-foreground">Crisis Management Protocol</strong>. Pricing excludes taxes.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PricingCard
            key={index}
            title={pkg.title}
            price={pkg.price}
            features={pkg.features}
            isHighlighted={pkg.isHighlighted}
          />
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;