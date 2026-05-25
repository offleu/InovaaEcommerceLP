import { MessageCircle, Cog, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HowItWorksSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const steps = [
    { icon: MessageCircle, title: "Diagnóstico Inicial", description: "Analisamos seu e-commerce, identificamos oportunidades e mapeamos os principais desafios" },
    { icon: Cog, title: "Plano Estratégico", description: "Desenvolvemos um plano de ação personalizado com metas claras e cronograma definido" },
    { icon: CheckCircle, title: "Implementação Guiada", description: "Acompanhamos a execução das estratégias com reuniões periódicas e ajustes contínuos" },
    { icon: TrendingUp, title: "Crescimento Sustentável", description: "Monitoramos resultados e otimizamos processos para garantir crescimento consistente" }
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-background relative overflow-hidden" ref={elementRef}>
      {/* Subtle gold border top */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-body block mb-4">Processo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Como Funciona</h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center space-y-5 p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center relative">
                  <step.icon className="w-7 h-7 text-gold" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-gold text-background rounded-full flex items-center justify-center text-xs font-bold font-body">
                    {index + 1}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold">{step.title}</h3>
              
              <p className="text-text-body text-sm leading-relaxed font-body">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <InovaaButton size="lg" asChild>
            <Link to="/formulario-contato">Iniciar Minha Consultoria</Link>
          </InovaaButton>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
};

export default HowItWorksSection;
