import { Laptop, ShoppingCart, Zap, GraduationCap, TrendingUp, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PackagesSection = () => {
  const [selectedType, setSelectedType] = useState<"ecommerce" | "treinamentos">("ecommerce");
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const packagesByType = {
    ecommerce: [
      { icon: Laptop, title: "Diagnóstico", price: "R$ 1.490,00", description: "Análise completa do seu e-commerce com relatório detalhado de oportunidades, gargalos e plano de ação estratégico." },
      { icon: ShoppingCart, title: "Consultoria", price: "R$ 2.990,00", description: "Acompanhamento mensal com reuniões estratégicas, implementação de melhorias e monitoramento de KPIs." },
      { icon: Zap, title: "Transformação", price: "R$ 4.990,00", description: "Consultoria executiva completa com squad dedicado, implementação de processos e gestão de performance." }
    ],
    treinamentos: [
      { icon: TrendingUp, title: "Vendas", price: "R$ 1.290,00", description: "Treinamento em técnicas avançadas de vendas para e-commerce, funil de conversão e atendimento consultivo." },
      { icon: Settings, title: "Sistemas de Gestão", price: "R$ 2.147,00", description: "Capacitação em ERPs, gestão de estoque, controle financeiro e integração entre sistemas." },
      { icon: GraduationCap, title: "Plataformas", price: "R$ 1.590,00", description: "Domine Nuvemshop, Tray, Shopify e Yampi com treinamento prático e hands-on." }
    ]
  };

  const typeLabels = { ecommerce: "E-commerce", treinamentos: "Treinamentos" };

  return (
    <section id="pacotes" className="py-16 sm:py-24 bg-card/30" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-body block mb-4">Soluções</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Consultoria para Seu{" "}
            <span className="text-gradient-gold">E-commerce</span>
          </h2>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto mb-10 font-body">
            Selecione a área de atuação e encontre a consultoria ideal
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(Object.keys(packagesByType) as Array<keyof typeof packagesByType>).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-sm text-sm tracking-wide transition-all duration-300 font-body uppercase ${
                  selectedType === type
                    ? "bg-gold text-background shadow-button"
                    : "border border-border text-text-body hover:border-gold/30 hover:text-gold"
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
              key={index} 
              className={`bg-card rounded-lg p-8 border border-border/50 hover:border-gold/20 transition-all duration-700 hover:shadow-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-14 h-14 border border-gold/30 rounded-full flex items-center justify-center">
                    <pkg.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-2xl font-bold text-gold font-heading">A partir de {pkg.price}</p>
                </div>
                
                <p className="text-sm text-text-body leading-relaxed font-body">{pkg.description}</p>
                
                <div className="flex flex-col gap-3 pt-2">
                  <InovaaButton size="sm" className="w-full" asChild>
                    <Link to="/formulario-contato">Solicitar Orçamento</Link>
                  </InovaaButton>
                  <a
                    href="https://wa.me/5514991302496?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20pacote%20de%20e-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-gold font-medium text-center py-2 transition-colors font-body"
                  >
                    💬 Tirar dúvidas no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-sm text-text-muted font-body">
            📊 <strong className="text-foreground">Diagnóstico Gratuito:</strong> Agende uma análise inicial sem compromisso!
          </p>
          <InovaaButton size="default" className="w-full sm:w-auto" asChild>
            <Link to="/formulario-contato">Agendar Meu Diagnóstico</Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
