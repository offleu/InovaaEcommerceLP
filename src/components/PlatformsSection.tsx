const PlatformsSection = () => {
  const platforms = [
    "Nuvemshop", "Tray", "Yampi", "Shopify", "VTEX",
    "Bling", "Tiny ERP", "Omie", "WhatsApp API", "OpenAI",
  ];

  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms];

  return (
    <section className="py-12 sm:py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Plataformas, ERPs e APIs que integramos
          </h2>
          <p className="text-sm text-text-muted font-body">
            Conectamos tudo que sua operação usa — e o que ainda vai usar
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll">
            {duplicatedPlatforms.map((name, index) => (
              <div key={`${name}-${index}`} className="flex-shrink-0 mx-4 sm:mx-6">
                <div className="px-8 py-4 flex items-center justify-center border border-border rounded-xl bg-card/40 hover:border-primary/40 hover:shadow-glow transition-all duration-300">
                  <span className="text-base sm:text-lg font-semibold text-foreground whitespace-nowrap font-heading">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-text-muted font-mono">+ qualquer API REST, Webhook ou sistema legado</p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default PlatformsSection;
