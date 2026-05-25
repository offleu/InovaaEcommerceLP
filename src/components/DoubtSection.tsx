import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const DoubtSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-16 sm:py-24 bg-card/30" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-body">Próximo Passo</span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Ainda tem dúvidas?{" "}
            <span className="text-gradient-gold block sm:inline mt-2 sm:mt-0">
              Fale com um especialista.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl mx-auto font-body">
            Nossa equipe de consultores está pronta para analisar seu negócio e propor a melhor estratégia. 
            <strong className="text-foreground"> Diagnóstico gratuito.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <InovaaButton size="default" className="w-full sm:w-auto" asChild>
              <Link to="/formulario-contato">📋 Solicitar Diagnóstico</Link>
            </InovaaButton>
            
            <a
              href="https://wa.me/5514991302496?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20para%20meu%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold rounded-sm hover:bg-gold hover:text-background transition-all duration-300 w-full sm:w-auto text-sm font-body uppercase tracking-wide"
            >
              💬 Chat no WhatsApp
            </a>
          </div>

          <div className="border border-gold/20 rounded-lg p-4 max-w-md mx-auto bg-card/50">
            <p className="text-sm text-gold font-medium font-body">
              ⚡ <strong>Vagas limitadas:</strong> Nossa agenda de consultoria tem capacidade restrita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtSection;
