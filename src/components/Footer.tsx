import { Link } from "react-router-dom";
import inovaaLogo from "../assets/inovaa-logo.png";
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/">
              <img
                src={inovaaLogo}
                alt="Inovaa Consultoria para E-commerce"
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Consultoria estratégica para e-commerces de alta performance. Transformamos operações digitais com inteligência, tecnologia e resultados reais.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Institucional
            </h4>
            <ul className="space-y-2.5">
              {institucional.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {servicos.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Atendimento
            </h4>
            <ul className="space-y-2.5">
              {atendimento.map((item) =>
                (item as any).external ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:contato@inovaaconsultoria.com.br"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                contato@inovaaconsultoria.com.br
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Rua Alcindo Saul Amaral, 135<br />Marília, SP - CEP: 17520-183</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground text-center sm:text-left space-y-0.5">
            <p>© 2025 Inovaa Consultoria Empresarial. Todos os direitos reservados.</p>
            <p><span className="font-medium">CNPJ:</span> 59.046.070/0001-23</p>
          </div>
          <p className="text-xs text-muted-foreground">
            Especialistas em e-commerce de alta performance
          </p>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-1.5 bg-gradient-primary" />
    </footer>
  );
};

export default Footer;
