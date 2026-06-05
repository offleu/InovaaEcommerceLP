import { useState, useEffect } from "react";
import { X, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { trackChatPopupInteraction, trackWhatsAppClick } from "../utils/tracking";

const ChatPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    // Verificar se já foi fechado nesta sessão
    const wasClosed = sessionStorage.getItem("chatPopupClosed");
    if (wasClosed) {
      setIsClosed(true);
      return;
    }

    // Mostrar popup após 10 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
      trackChatPopupInteraction('popup_shown');
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    sessionStorage.setItem("chatPopupClosed", "true");
    trackChatPopupInteraction('popup_closed');
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    trackChatPopupInteraction(`option_clicked_${option}`);
    trackWhatsAppClick('chat_popup');
  };

  if (isClosed || !isVisible) return null;

  const quickOptions = [
    { 
      id: "how-it-works", 
      label: "Como Funciona",
      message: "Olá! Gostaria de saber como funciona a consultoria da Inovaa"
    },
    { 
      id: "consultoria", 
      label: "Agendar Consultoria",
      message: "Olá! Gostaria de agendar uma consultoria"
    },
    { 
      id: "treinamento", 
      label: "Agendar Treinamento",
      message: "Olá! Gostaria de agendar um treinamento"
    }
  ];

  const whatsappNumber = "5514991302496"; // Número real da empresa
  const getWhatsAppUrl = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-20 sm:bottom-24 right-3 sm:right-4 z-[60] animate-slide-up">
      <div className="glass-dark border border-primary/25 rounded-2xl shadow-2xl w-[calc(100vw-1.5rem)] max-w-72 sm:max-w-80 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent-violet p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Olá! 👋</h3>
              <p className="text-white/90 text-xs">Como podemos ajudar?</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Fechar chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-3 space-y-3 bg-card/60">
          <div className="bg-secondary/60 border border-border rounded-lg p-2.5">
            <p className="text-xs text-text-body leading-relaxed">
              Estamos aqui para te ajudar! Escolha uma opção:
            </p>
          </div>

          {/* Quick Options */}
          <div className="space-y-1.5">
            {quickOptions.map((option) => (
              <a
                key={option.id}
                href={getWhatsAppUrl(option.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleOptionClick(option.id)}
                className="block bg-secondary/50 hover:bg-primary/10 rounded-lg p-2 transition-all duration-300 border border-border hover:border-primary/50 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                    {option.label}
                  </span>
                  <Send className="w-3.5 h-3.5 text-text-muted group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* CTA Principal */}
          <div className="pt-1 space-y-1.5">
            <a
              href={getWhatsAppUrl("Olá! Vim pelo site e gostaria de falar com um especialista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#1faa54] text-white rounded-lg py-2 px-3 font-semibold text-center transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>

            <Link
              to="/formulario-contato"
              onClick={handleClose}
              className="block w-full bg-primary hover:opacity-90 text-primary-foreground rounded-lg py-2 px-3 font-semibold text-center transition-all duration-300 hover:shadow-lg text-xs"
            >
              Preencher Formulário
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="text-center pt-1">
            <p className="text-[10px] text-text-muted">
              ⚡ Resposta em até 5 minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ChatPopup;
