import Script from 'next/script';
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import Header from "@/components/layout/Header/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>

      {/* Скрипт формы от сервиса рассылок */}
      <Script
        src="https://web.webformscr.com/apps/fc3/build/loader.js"
        strategy="afterInteractive"
        sp-form-id="6867f3e01d57b60bdaf1a84e70d521c87a2633216a80370c44aad80a05bff4fc"
      />
    </div>
  );
}