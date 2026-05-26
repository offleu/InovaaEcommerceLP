import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TrustBadges from "../components/TrustBadges";
import WhyChooseSection from "../components/WhyChooseSection";
import PackagesSection from "../components/PackagesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";
import DoubtSection from "../components/DoubtSection";
import PlatformsSection from "../components/PlatformsSection";
import WhatsAppButton from "../components/WhatsAppButton";
import ChatPopup from "../components/ChatPopup";
import CookieConsent from "../components/CookieConsent";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Inovaa Tech | Automações, IA e Sistemas para E-commerce";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Tecnologia para e-commerce: automações, agentes de IA, CRM personalizado, integradores e apps sob medida para reduzir custos e multiplicar produtividade.");
    }
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 sm:pt-20">
        <HeroSection />
        <TrustBadges />
        <WhyChooseSection />
        <PackagesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
        <DoubtSection />
        <PlatformsSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatPopup />
      <CookieConsent />
    </div>
  );
};

export default Index;