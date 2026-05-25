import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const faqs = [
    { question: "Como funciona o processo de consultoria?", answer: "Iniciamos com um diagnóstico completo do seu e-commerce, analisando métricas, processos e oportunidades. Em seguida, desenvolvemos um plano estratégico personalizado e acompanhamos a implementação com reuniões periódicas." },
    { question: "Quais áreas do e-commerce vocês atendem?", answer: "Nossa consultoria abrange todas as dimensões do e-commerce: estratégia de vendas, gestão de operações, marketing digital, experiência do cliente, tecnologia e integração de sistemas, análise de dados e otimização de conversão." },
    { question: "O que está incluso nos planos de consultoria?", answer: "Todos os planos incluem: diagnóstico estratégico, plano de ação personalizado, reuniões de acompanhamento, acesso a metodologias exclusivas, relatórios de performance e suporte direto com consultores especializados." },
    { question: "Vocês trabalham com quais plataformas de e-commerce?", answer: "Temos expertise nas principais plataformas do mercado: Nuvemshop, Tray, Yampi, Shopify, VTEX, entre outras. Nossa consultoria é agnóstica e focada em resultados, independente da tecnologia utilizada." },
    { question: "Qual o tempo médio para ver resultados?", answer: "Os primeiros resultados geralmente aparecem entre 30 e 90 dias, dependendo da complexidade do negócio e das ações implementadas. Trabalhamos com metas progressivas e mensuráveis desde o início." },
    { question: "Vocês oferecem suporte contínuo após a consultoria?", answer: "Sim! Oferecemos planos de acompanhamento mensal para garantir a continuidade das estratégias implementadas, ajustes baseados em performance e evolução constante do seu e-commerce." },
    { question: "Como é definido o investimento na consultoria?", answer: "O investimento é personalizado de acordo com o tamanho do negócio, escopo da consultoria e duração do acompanhamento. Após o diagnóstico inicial, apresentamos uma proposta detalhada com valores e entregas." },
    { question: "Vocês atendem empresas de qual porte?", answer: "Atendemos desde e-commerces em fase de estruturação até operações consolidadas que buscam escalar. Nossa metodologia se adapta às necessidades específicas de cada estágio do negócio." }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-background" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-body block mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-border/50 rounded-lg overflow-hidden transition-all duration-700 hover:border-gold/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-card/50 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm sm:text-base pr-4 font-heading">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                <div className="p-5 sm:p-6 pt-0 text-text-body text-sm sm:text-base leading-relaxed font-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted mb-4 text-sm font-body">Não encontrou sua resposta?</p>
          <a
            href="https://wa.me/5514991302496?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20para%20e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold rounded-sm hover:bg-gold hover:text-background transition-all duration-300 text-sm font-body uppercase tracking-wide"
          >
            💬 Falar com Consultor
          </a>
        </div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        })}
      </script>
    </section>
  );
};

export default FAQSection;
