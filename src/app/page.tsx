// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import Header from "@/components/layout/Header/Header";
import ArticlesSection from "@/components/sections/ArticlesSection/ArticlesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ArticlesSection/>
      </main>
    </div>
  );
}

