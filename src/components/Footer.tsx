import { Link } from "react-router-dom";
import inovaaLogo from "../assets/inovaa-logo.png";
import { Instagram, Facebook, Linkedin, Youtube, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const institucional = [
    { label: "Sobre Nós", href: "/#sobre" },
    { label: "Como Funciona", href: "/#como-funciona" },
    { label: "Depoimentos", href: "/#depoimentos" },
    { label: "Blog", href: "/blog" },
    { label: "Fale Conosco", href: "/formulario-contato" },
  ];

  const servicos = [
    { label: "Criação de E-commerce", href: "/servicos/criacao-site-ecommerce" },
    { label: "Gestão de E-commerce", href: "/servicos/gestao-ecommerce" },
    { label: "Treinamentos", href: "/servicos/treinamentos" },
    { label: "Ferramentas de IA", href: "/servicos/ferramentas-ia" },
    { label: "Microserviços", href: "/servicos/microservicos" },
  ];

  const atendimento = [
    { label: "Formulário de Contato", href: "/formulario-contato" },
    { label: "WhatsApp", href: "https://wa.me/5514998622547", external: true },
    { label: "Trabalhe Conosco", href: "/formulario-contato" },
  ];

  const socials = [
    { icon: Instagram, href: "https://instagram.com/inovaaconsultoria", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/inovaaconsultoria", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/inovaaconsultoria", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@inovaaconsultoria", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/">
              <img src={inovaaLogo} alt="Inovaa Consultoria para E-commerce" className="h-11 w-auto brightness-110" />
            </Link>
            <p className="text-sm text-text-body leading-relaxed max-w-sm font-body">
              Consultoria estratégica para e-commerces de alta performance. Transformamos operações digitais com inteligência, tecnologia e resultados reais.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-semibold text-gold mb-5 text-xs uppercase tracking-[0.15em] font-body">Institucional</h4>
            <ul className="space-y-3">
              {institucional.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-text-body hover:text-gold transition-colors font-body">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-gold mb-5 text-xs uppercase tracking-[0.15em] font-body">Serviços</h4>
            <ul className="space-y-3">
              {servicos.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-text-body hover:text-gold transition-colors font-body">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-semibold text-gold mb-5 text-xs uppercase tracking-[0.15em] font-body">Atendimento</h4>
            <ul className="space-y-3">
              {atendimento.map((item) =>
                (item as any).external ? (
                  <li key={item.label}><a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-text-body hover:text-gold transition-colors font-body">{item.label}</a></li>
                ) : (
                  <li key={item.label}><Link to={item.href} className="text-sm text-text-body hover:text-gold transition-colors font-body">{item.label}</Link></li>
                )
              )}
            </ul>

            <div className="mt-6 space-y-3">
              <a href="mailto:contato@inovaaconsultoria.com.br" className="flex items-center gap-2 text-sm text-text-body hover:text-gold transition-colors font-body">
                <Mail className="w-4 h-4 flex-shrink-0" />contato@inovaaconsultoria.com.br
              </a>
              <div className="flex items-start gap-2 text-sm text-text-body font-body">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Rua Alcindo Saul Amaral, 135<br />Marília, SP - CEP: 17520-183</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold mt-12 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-text-muted text-center sm:text-left space-y-0.5 font-body">
            <p>© 2025 Inovaa Consultoria Empresarial. Todos os direitos reservados.</p>
            <p><span className="font-medium text-text-body">CNPJ:</span> 59.046.070/0001-23</p>
          </div>
          <p className="text-xs text-text-muted font-body">Especialistas em e-commerce de alta performance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
