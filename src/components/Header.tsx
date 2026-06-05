import inovaaLogo from "../assets/inovaa-logo.png";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    { name: "Automações & Agentes de IA", path: "/servicos/ferramentas-ia" },
    { name: "CRM & Sistemas Personalizados", path: "/servicos/microservicos" },
    { name: "Integrações & APIs", path: "/servicos/gestao-ecommerce" },
    { name: "Apps & Desenvolvimento", path: "/servicos/criacao-site-ecommerce" },
    { name: "Treinamentos Técnicos", path: "/servicos/treinamentos" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-dark border-b border-gold/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 transition-all duration-300">
          <div className="flex items-center">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img 
                src={inovaaLogo} 
                alt="Inovaa Consultoria - Especialistas em E-commerce" 
                className="h-7 sm:h-9 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center text-sm tracking-wide transition-all duration-300 text-text-body hover:text-gold font-body uppercase"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Serviços
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 rounded-lg py-2 z-50 animate-fade-in glass-dark border border-gold/10 shadow-xl">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={handleServiceClick}
                      className="block px-5 py-3 text-sm transition-all duration-300 hover:translate-x-1 text-text-body hover:text-gold font-body"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a 
              href="#pacotes" 
              onClick={(e) => handleAnchorClick(e, '#pacotes')}
              className="text-sm tracking-wide transition-all duration-300 text-text-body hover:text-gold font-body uppercase"
            >
              Pacotes
            </a>
            <a 
              href="#como-funciona" 
              onClick={(e) => handleAnchorClick(e, '#como-funciona')}
              className="text-sm tracking-wide transition-all duration-300 text-text-body hover:text-gold font-body uppercase"
            >
              Como Funciona
            </a>
            <Link 
              to="/formulario-contato" 
              className="px-6 py-2.5 border border-gold/40 text-gold text-sm tracking-wide rounded-sm hover:bg-gold hover:text-background transition-all duration-300 font-body uppercase"
            >
              Contato
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 transition-colors text-text-body hover:text-gold"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gold/10 animate-fade-in glass-dark">
            <div className="space-y-1">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm transition-colors text-text-body hover:text-gold font-body uppercase tracking-wide"
              >
                <span>Serviços</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1 rounded-lg py-2 mx-4 animate-fade-in bg-accent/50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={handleServiceClick}
                      className="block px-4 py-2 text-sm transition-colors text-text-body hover:text-gold font-body"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

              <a 
                href="#pacotes" 
                onClick={(e) => handleAnchorClick(e, '#pacotes')}
                className="block px-4 py-3 text-sm transition-colors text-text-body hover:text-gold font-body uppercase tracking-wide"
              >
                Pacotes
              </a>
              <a 
                href="#como-funciona" 
                onClick={(e) => handleAnchorClick(e, '#como-funciona')}
                className="block px-4 py-3 text-sm transition-colors text-text-body hover:text-gold font-body uppercase tracking-wide"
              >
                Como Funciona
              </a>
              <Link 
                to="/formulario-contato" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm transition-colors text-gold font-body uppercase tracking-wide"
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
