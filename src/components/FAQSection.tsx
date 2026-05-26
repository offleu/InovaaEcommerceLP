import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const faqs = [
    { question: "O que exatamente a Inovaa entrega?", answer: "Soluções de tecnologia para e-commerce: automações de processos, agentes de IA, sistemas personalizados de CRM e gestão, integradores entre plataformas, ERPs e ferramentas de terceiros, além de apps e gadgets sob medida." },
    { question: "Como vocês reduzem custos operacionais?", answer: "Substituímos tarefas repetitivas e manuais por automações e agentes de IA, eliminando retrabalho, reduzindo erros e diminuindo a necessidade de contratar à medida que a operação cresce." },
    { question: "Vocês trabalham com quais plataformas e sistemas?", answer: "Integramos com Nuvemshop, Tray, Yampi, Shopify, VTEX, ERPs como Bling, Tiny, Omie, marketplaces, gateways de pagamento, transportadoras e qualquer API REST/Webhook." },
    { question: "Os sistemas são prontos ou desenvolvidos do zero?", answer: "Desenvolvemos sob medida. CRM, dashboards, integradores e apps são construídos a partir do fluxo real da sua operação — não te obrigamos a se adaptar a um software enlatado." },
    { question: "Em quanto tempo vejo resultado?", answer: "As primeiras automações entram em produção em 2 a 6 semanas. Resultados de redução de custo e ganho de produtividade aparecem já no primeiro mês de operação automatizada." },
    { question: "Vocês oferecem suporte e evolução contínua?", answer: "Sim. Após o go-live, monitoramos métricas, ajustamos fluxos e evoluímos cada automação. Você tem squad técnico dedicado para novas demandas." },
    { question: "Funciona para e-commerces pequenos?", answer: "Funciona para qualquer porte. Começamos pelo que mais dói (custo ou tempo) com automações pontuais e crescemos junto com sua operação." },
    { question: "Como é o investimento?", answer: "Definido por escopo após o diagnóstico tecnológico gratuito. Apresentamos arquitetura, prazos e investimento total — sem mensalidade obrigatória de produto." }
  ];

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-16 sm:py-24 bg-background" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary text-xs tracking-[0.25em] uppercase font-mono block mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-border rounded-xl overflow-hidden bg-card/40 transition-all duration-700 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm sm:text-base pr-4 font-heading">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                <div className="p-5 sm:p-6 pt-0 text-text-body text-sm sm:text-base leading-relaxed font-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted mb-4 text-sm font-body">Tem uma necessidade específica?</p>
          <a
            href="https://wa.me/5514991302496?text=Olá!%20Quero%20conversar%20sobre%20automações%20para%20meu%20e-commerce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-body"
          >
            Falar com especialista técnico
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
