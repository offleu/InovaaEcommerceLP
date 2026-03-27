const PlatformsSection = () => {
  const platforms = [
    { name: "Nuvemshop", url: "https://www.nuvemshop.com.br/" },
    { name: "Tray", url: "https://tray.com.br/" },
    { name: "Yampi", url: "https://www.yampi.com.br/" },
    { name: "Shopify", url: "https://www.shopify.com/br" },
  ];

  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms];

  return (
    <section className="py-12 sm:py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-body block mb-3">Parceiros</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Plataformas de E-commerce
          </h2>
          <p className="text-sm text-text-muted font-body">
            Trabalhamos com as principais plataformas do mercado
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll">
            {duplicatedPlatforms.map((platform, index) => (
              <div key={`${platform.name}-${index}`} className="flex-shrink-0 mx-8 sm:mx-12">
                <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block transition-all duration-300 hover:scale-110">
                  <div className="px-10 py-5 flex items-center justify-center border border-border/50 rounded-lg hover:border-gold/30 hover:shadow-glow transition-all duration-300">
                    <span className="text-lg sm:text-xl font-semibold text-foreground whitespace-nowrap font-heading">{platform.name}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-text-muted font-body">E muitas outras plataformas personalizadas</p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PlatformsSection;
