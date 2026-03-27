import { Clock, HeadphonesIcon, Award } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WhyChooseSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: Clock,
      title: "Diagnóstico estratégico completo",
      description: "Análise aprofundada do seu negócio digital para identificar oportunidades de crescimento, gargalos operacionais e estratégias de otimização."
    },
    {
      icon: HeadphonesIcon,
      title: "Acompanhamento executivo contínuo",
      description: "Consultores dedicados que monitoram métricas, ajustam estratégias e garantem a implementação correta de cada etapa do plano de ação."
    },
    {
      icon: Award,
      title: "Soluções personalizadas e mensuráveis",
      description: "Cada consultoria é desenvolvida sob medida para seu negócio, com metas claras, KPIs definidos e relatórios de performance."
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-background" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-body block mb-4">Nossa Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Por que escolher a{" "}
            <span className="text-gradient-gold">Inovaa?</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`text-center space-y-5 p-8 rounded-lg border border-border/50 bg-card/30 hover:border-gold/20 transition-all duration-700 hover:shadow-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-gold" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              
              <p className="text-sm sm:text-base text-text-body leading-relaxed font-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
