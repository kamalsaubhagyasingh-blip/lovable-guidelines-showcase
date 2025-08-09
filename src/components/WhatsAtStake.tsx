const WhatsAtStake = () => {
  return (
    <div className="bg-stake-light border border-stake-warning/20 rounded-lg p-6 shadow-card">
      <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-stake-warning rounded-full"></div>
        What's at Stake
      </h2>
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          Non-compliance with Supreme Court guidelines can result in serious legal and regulatory consequences for organizations.
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-stake-warning rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>Legal liability</strong> for workplace harassment incidents</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-stake-warning rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>Regulatory penalties</strong> and compliance violations</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-stake-warning rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>Reputational damage</strong> affecting business operations</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-stake-warning rounded-full mt-2 flex-shrink-0"></div>
            <span><strong>Employee trust erosion</strong> and workplace culture issues</span>
          </div>
        </div>
        <p className="font-medium text-stake-warning">
          Ensure full compliance to protect your organization and employees.
        </p>
      </div>
    </div>
  );
};

export default WhatsAtStake;