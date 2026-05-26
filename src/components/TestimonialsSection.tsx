import { Star, Quote, MapPin } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const testimonials = [
    { name: "Carla Mendes", role: "Proprietária", company: "Bella Moda Feminina", city: "Marília, SP", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", rating: 5, text: "Automatizamos o pós-venda inteiro com o agente de IA da Inovaa. Reduzimos 60% do tempo da equipe respondendo o mesmo no WhatsApp." },
    { name: "Roberto Silva", role: "Diretor de Operações", company: "Casa & Decoração", city: "Assis, SP", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", rating: 5, text: "O integrador construído pela Inovaa conecta nossos 4 marketplaces, ERP e transportadora. Eliminamos planilhas e erros de estoque." },
    { name: "Fernanda Costa", role: "CEO", company: "Natural Fit Suplementos", city: "Marília, SP", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", rating: 5, text: "O CRM personalizado virou o coração da operação. Hoje todo time vê pedido, cliente e custo no mesmo lugar — em tempo real." },
    { name: "Marcos Oliveira", role: "Fundador", company: "TechParts Informática", city: "Tupã, SP", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", rating: 5, text: "Automatizamos o processo de cotação e emissão de pedido. O que levava 2 horas por dia agora roda sozinho em segundo plano." },
    { name: "Juliana Ferreira", role: "Gerente de E-commerce", company: "Doce Encanto Confeitaria", city: "Ourinhos, SP", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", rating: 5, text: "O app interno desenvolvido pela Inovaa permite que a produção registre tudo pelo celular. Acabou o gargalo de digitação." },
    { name: "Eduardo Santos", role: "Proprietário", company: "Agro Center Máquinas", city: "Garça, SP", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", rating: 5, text: "Time técnico que entende de operação real. Entregaram automações que cortaram custo fixo e ainda escalam com o crescimento." }
  ];

  return (
    <section className="py-16 sm:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-primary text-xs tracking-[0.25em] uppercase font-mono block mb-4">Cases</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            E-commerces que <span className="text-gradient-gold">automatizaram com a gente</span>
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto font-body">
            Operações reais que cortaram custo e ganharam produtividade
          </p>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg p-6 border border-border/50 hover:border-gold/20 transition-all duration-500 hover:shadow-glow ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <Quote className="w-8 h-8 text-gold/20" />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-text-body leading-relaxed mb-6 text-sm font-body">"{testimonial.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm font-heading">{testimonial.name}</h4>
                  <p className="text-xs text-text-muted font-body">{testimonial.role} • {testimonial.company}</p>
                  <p className="text-xs text-gold font-medium flex items-center gap-1 mt-0.5 font-body">
                    <MapPin className="w-3 h-3" />{testimonial.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "200+", label: "Operações automatizadas" },
            { value: "-38%", label: "Custo médio reduzido" },
            { value: "4.2x", label: "Ganho de produtividade" },
            { value: "24/7", label: "Operação contínua" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient-gold font-heading">{stat.value}</p>
              <p className="text-sm text-text-muted mt-1 font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
