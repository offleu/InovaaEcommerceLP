import { TrendingDown, Gauge, Cpu } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WhyChooseSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: TrendingDown,
      title: "Redução real de custos operacionais",
      description: "Substituímos tarefas manuais e repetitivas por automações e agentes de IA, reduzindo retrabalho, erros e a necessidade de ampliar o time conforme você cresce."
    },
    {
      icon: Gauge,
      title: "Produtividade que multiplica",
      description: "Sistemas personalizados de CRM e gestão, integrados ponta a ponta, liberam horas do seu time para o que realmente importa: estratégia, cliente e venda qualificada."
    },
    {
      icon: Cpu,
      title: "Tecnologia sob medida, não enlatada",
      description: "Desenvolvemos integradores, dashboards, apps e automações específicas para a sua operação, conectando ERPs, marketplaces, plataformas e ferramentas de terceiros."
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-background" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary text-xs tracking-[0.25em] uppercase font-mono block mb-4">Por que Inovaa</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tecnologia que{" "}
            <span className="text-gradient-gold">trabalha pelo seu e-commerce</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-border bg-card/40 hover:border-primary/40 transition-all duration-700 hover:shadow-glow hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
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
