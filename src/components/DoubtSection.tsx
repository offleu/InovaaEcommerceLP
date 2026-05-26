import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Sparkles } from "lucide-react";

const DoubtSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-16 sm:py-24 bg-card/30 relative overflow-hidden" ref={elementRef}>
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className={`max-w-4xl mx-auto text-center space-y-7 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 bg-primary/5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Próximo passo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Pronto para tirar o trabalho repetitivo do seu time?{" "}
            <span className="text-gradient-gold block mt-2">Vamos automatizar.</span>
          </h2>

          <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl mx-auto font-body">
            Em uma conversa de 30 minutos mostramos onde sua operação perde tempo e dinheiro — e como
            tecnologia resolve. <strong className="text-foreground">Diagnóstico sem custo.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <InovaaButton size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/formulario-contato">Quero meu diagnóstico</Link>
            </InovaaButton>
            <a
              href="https://wa.me/5514991302496?text=Olá!%20Quero%20automatizar%20meu%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 h-14 border border-primary/40 text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto text-sm font-body"
            >
              Chat no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtSection;
