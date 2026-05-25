import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] sm:min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--gradient-hero-bg)' }}>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Background desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroWoman})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 pt-8 sm:pt-0 flex flex-col md:flex-row items-center justify-between">

        {/* Texto */}
        <div className="max-w-2xl space-y-6 sm:space-y-8 md:mr-8">
          {/* Badge de prova social */}
          <div className="inline-flex items-center gap-2 border border-gold/20 rounded-full px-4 py-2 bg-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-gold tracking-wide font-body">+500 empresas transformadas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
            Consultoria Estratégica para{" "}
            <span className="text-gradient-gold">
              E-commerces de Alta Performance
            </span>
          </h1>

          <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-xl font-body">
            Transformamos sua operação digital em resultados mensuráveis com análise estratégica, 
            implementação de processos e acompanhamento contínuo.
          </p>

          {/* Benefícios rápidos */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {["Metodologia comprovada", "Consultores especializados", "Resultados mensuráveis"].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-xs sm:text-sm font-medium text-text-body font-body">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <InovaaButton size="default" className="group w-full sm:w-auto" asChild>
              <Link to="/formulario-contato">
                <span className="text-sm sm:text-base">Diagnóstico Gratuito</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </InovaaButton>
            
            <a 
              href="https://wa.me/5514991302496?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20para%20meu%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-medium rounded-sm transition-all duration-300 hover:border-gold/40 hover:text-gold text-sm sm:text-base w-full sm:w-auto font-body"
            >
              💬 Falar com Consultor
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {["C", "R", "F"].map((letter, i) => (
                <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold bg-card text-gold">{letter}</div>
              ))}
            </div>
            <div className="text-xs sm:text-sm font-body">
              <div className="font-semibold text-foreground">4.9/5 ⭐</div>
              <div className="text-text-muted">200+ avaliações</div>
            </div>
          </div>
        </div>

        {/* Imagem Mobile */}
        <div className="md:hidden w-full mt-8 flex justify-center">
          <img
            src={heroWoman}
            alt="Mulher sorrindo trabalhando com e-commerce"
            className="w-full max-w-xs sm:max-w-sm object-contain opacity-80"
          />
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
