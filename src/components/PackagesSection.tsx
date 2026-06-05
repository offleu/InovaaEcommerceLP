import { Bot, Workflow, Cpu, Plug, Smartphone, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PackagesSection = () => {
  const [selectedType, setSelectedType] = useState<"automacao" | "sistemas">("automacao");
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const packagesByType = {
    automacao: [
      { icon: Bot, title: "Agentes de IA", price: "R$ 1.990,00", description: "Agentes para atendimento, pré-venda, pós-venda e SAC integrados ao seu WhatsApp, site e CRM, operando 24/7." },
      { icon: Workflow, title: "Automações de Processos", price: "R$ 2.490,00", description: "Fluxos automatizados de pedidos, estoque, financeiro e logística — sem retrabalho, sem planilha." },
      { icon: BarChart3, title: "Dashboards Inteligentes", price: "R$ 1.790,00", description: "Painéis em tempo real com KPIs de vendas, custos, conversão e produtividade do seu e-commerce." }
    ],
    sistemas: [
      { icon: Cpu, title: "CRM Personalizado", price: "R$ 3.490,00", description: "CRM e sistemas de gestão desenvolvidos sob medida para o fluxo da sua operação — não o contrário." },
      { icon: Plug, title: "Integradores & APIs", price: "R$ 2.290,00", description: "Conectamos plataforma, ERP, marketplaces, transportadoras e ferramentas terceiras em uma camada única." },
      { icon: Smartphone, title: "Apps & Gadgets", price: "R$ 4.990,00", description: "Aplicativos mobile, ferramentas internas e gadgets conectados para operar seu negócio em qualquer lugar." }
    ]
  };

  const typeLabels = { automacao: "Automação & IA", sistemas: "Sistemas & Integrações" };

  return (
    <section id="pacotes" className="py-16 sm:py-24 bg-card/30 relative overflow-hidden" ref={elementRef}>
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary text-xs tracking-[0.25em] uppercase font-mono block mb-4">Soluções</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Soluções para{" "}
            <span className="text-gradient-gold">operar com menos e produzir mais</span>
          </h2>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto mb-10 font-body">
            Escolha a frente de tecnologia e veja o que entregamos
          </p>

          <div className="inline-flex p-1 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-8">
            {(Object.keys(packagesByType) as Array<keyof typeof packagesByType>).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-body ${
                  selectedType === type
                    ? "bg-primary text-primary-foreground shadow-button"
                    : "text-text-body hover:text-primary"
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {packagesByType[selectedType].map((pkg, index) => (
            <div
              key={`${selectedType}-${index}`}
              className={`group relative rounded-2xl p-7 border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-700 hover:shadow-glow hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >

              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <pkg.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-2xl font-bold text-gradient-gold font-heading mb-4">A partir de {pkg.price}</p>
              <p className="text-sm text-text-body leading-relaxed font-body mb-6">{pkg.description}</p>

              <div className="flex flex-col gap-2">
                <InovaaButton size="sm" className="w-full" asChild>
                  <Link to="/formulario-contato">Solicitar Escopo</Link>
                </InovaaButton>
                <a
                  href="https://wa.me/5514991302496?text=Olá!%20Quero%20saber%20mais%20sobre%20esta%20solução"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-muted hover:text-primary font-medium text-center py-2 transition-colors font-body"
                >
                  Conversar no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-text-muted font-body">
            <strong className="text-foreground">Diagnóstico tecnológico gratuito:</strong> mapeamos onde sua operação perde dinheiro e tempo.
          </p>
          <InovaaButton size="default" className="w-full sm:w-auto" asChild>
            <Link to="/formulario-contato">Quero meu diagnóstico</Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
