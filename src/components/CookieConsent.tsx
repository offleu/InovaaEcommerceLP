import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    if (window.gtag) {
      window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-dark border border-primary/20 rounded-2xl shadow-2xl p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/15 border border-primary/30 rounded-full flex items-center justify-center">
              <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                Cookies e Privacidade
              </h3>
              <p className="text-xs sm:text-sm text-text-body mb-4 leading-relaxed font-body">
                Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo.
                Ao aceitar, você concorda com o uso de cookies do Google Analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Aceitar Cookies
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-secondary text-foreground border border-border rounded-lg font-medium text-sm hover:bg-muted transition-all duration-300"
                >
                  Recusar
                </button>
              </div>
            </div>

            <button
              onClick={handleDecline}
              className="flex-shrink-0 p-2 text-text-muted hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
