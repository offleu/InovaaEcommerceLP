import { Search, Blocks, Rocket, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HowItWorksSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const steps = [
    { icon: Search, title: "Diagnóstico Tecnológico", description: "Mapeamos processos, gargalos, custos ocultos e oportunidades de automação na sua operação." },
    { icon: Blocks, title: "Arquitetura da Solução", description: "Desenhamos o stack: agentes, automações, integrações e sistemas que vão substituir o trabalho manual." },
    { icon: Rocket, title: "Implementação Ágil", description: "Desenvolvemos e implantamos em sprints curtos, com entregas validadas e go-live monitorado." },
    { icon: LineChart, title: "Operação & Evolução", description: "Acompanhamos métricas de custo e produtividade e evoluímos continuamente cada automação." }
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-background relative overflow-hidden" ref={elementRef}>
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary text-xs tracking-[0.25em] uppercase font-mono block mb-4">Processo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Como construímos sua <span className="text-gradient-gold">stack</span></h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border border-border bg-card/40 hover:border-primary/40 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-3xl font-bold text-primary/40 font-mono">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-text-body text-sm leading-relaxed font-body">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <InovaaButton size="lg" asChild>
            <Link to="/formulario-contato">Iniciar diagnóstico tecnológico</Link>
          </InovaaButton>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
};

export default HowItWorksSection;
