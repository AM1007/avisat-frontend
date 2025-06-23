import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
// import ArticlesSection from "@/components/sections/ArticlesSection";
// import ContactSection from "@/components/sections/ContactSection";
import Header from "@/components/layout/Header/Header";
// import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* <ArticlesSection />
        <ContactSection /> */}
      </main>

      <script
        src="https://web.webformscr.com/apps/fc3/build/loader.js"
        strategy="afterInteractive"            
        async                                      
        dataSpFormId="6867f3e01d57b60bdaf1a84e70d521c87a2633216a80370c44aad80a05bff4fc"  // 🔑 CamelCase замість "data-sp-form-id"
      />
          
      {/* <Footer /> */}
    </div>
  );
}
