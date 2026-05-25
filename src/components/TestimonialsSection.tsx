import { Star, Quote, MapPin } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const testimonials = [
    { name: "Carla Mendes", role: "Proprietária", company: "Bella Moda Feminina", city: "Marília, SP", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", rating: 5, text: "A consultoria da Inovaa transformou nosso e-commerce. Em 6 meses, triplicamos as vendas online. O diagnóstico inicial foi certeiro e o acompanhamento mensal fez toda a diferença." },
    { name: "Roberto Silva", role: "Diretor Comercial", company: "Casa & Decoração", city: "Assis, SP", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", rating: 5, text: "O treinamento em sistemas de gestão capacitou toda nossa equipe. Hoje operamos com muito mais eficiência e o controle de estoque ficou impecável. Recomendo demais!" },
    { name: "Fernanda Costa", role: "CEO", company: "Natural Fit Suplementos", city: "Marília, SP", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", rating: 5, text: "Migramos para a Nuvemshop com a ajuda da Inovaa e foi a melhor decisão. O treinamento na plataforma nos deu autonomia total para gerenciar a loja." },
    { name: "Marcos Oliveira", role: "Fundador", company: "TechParts Informática", city: "Tupã, SP", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", rating: 5, text: "O diagnóstico estratégico identificou gargalos que nem imaginávamos. Com as recomendações implementadas, nosso ticket médio aumentou 40% em apenas 3 meses." },
    { name: "Juliana Ferreira", role: "Gerente de E-commerce", company: "Doce Encanto Confeitaria", city: "Ourinhos, SP", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", rating: 5, text: "A Inovaa nos ajudou a estruturar todo o processo de vendas online. O treinamento em vendas para e-commerce foi excepcional. Nossa equipe agora converte muito mais!" },
    { name: "Eduardo Santos", role: "Proprietário", company: "Agro Center Máquinas", city: "Garça, SP", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", rating: 5, text: "Atendimento próximo e personalizado. Por serem da região, entendem as particularidades do nosso mercado. A consultoria foi fundamental para nossa expansão digital." }
  ];

  return (
    <section className="py-16 sm:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-body block mb-4">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            O Que Nossos Clientes <span className="text-gradient-gold">Dizem</span>
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto font-body">
            Empresas de Marília e região que transformaram seus negócios
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
            { value: "200+", label: "Clientes Atendidos" },
            { value: "4.9", label: "Avaliação Média" },
            { value: "15+", label: "Cidades Atendidas" },
            { value: "98%", label: "Taxa de Satisfação" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gold font-heading">{stat.value}</p>
              <p className="text-sm text-text-muted mt-1 font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
