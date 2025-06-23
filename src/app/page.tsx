// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import Header from "@/components/layout/Header/Header";
import SendPulseForm from "@/components/ui/SendPulseForm/SendPulseForm";

export default function Home() {
  const handleFormLoad = () => {
    console.log('SendPulse форма успешно загружена');
  };

  const handleFormError = (error: Error | Event) => {
    console.error('Ошибка загрузки SendPulse формы:', error);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>

      {/* SendPulse форма подписки */}
      <SendPulseForm 
        onLoad={handleFormLoad}
        onError={handleFormError}
      />
    </div>
  );
}