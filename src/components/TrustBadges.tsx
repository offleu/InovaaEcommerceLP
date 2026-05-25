import { Shield, Award, Clock, ThumbsUp } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { icon: Shield, title: "100% Seguro", description: "Pagamento protegido" },
    { icon: Clock, title: "Entrega Rápida", description: "Até 20 dias úteis" },
    { icon: Award, title: "Garantia Total", description: "Ou seu dinheiro de volta" },
    { icon: ThumbsUp, title: "Satisfação", description: "98% de aprovação" }
  ];

  return (
    <section className="py-8 sm:py-10 border-y border-border/50 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 border border-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-gold" />
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
