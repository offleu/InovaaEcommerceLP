import { Cpu, Workflow, Bot, Zap } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { icon: Workflow, title: "Automações", description: "Rotinas 24/7 sem erro" },
    { icon: Bot, title: "Agentes de IA", description: "Atendem e operam" },
    { icon: Cpu, title: "Sistemas sob medida", description: "CRM e ERPs próprios" },
    { icon: Zap, title: "Integrações", description: "ERPs, marketplaces, APIs" }
  ];

  return (
    <section className="py-10 sm:py-14 border-y border-border/50 bg-card/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm sm:text-base font-heading">{badge.title}</div>
                <div className="text-xs sm:text-sm text-text-muted font-body">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
