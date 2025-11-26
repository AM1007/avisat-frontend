import AboutApproachSection from '@/components/sections/AboutPage/AboutApproachSection';
import AboutCTASection from '@/components/sections/AboutPage/AboutCTASection';
import AboutHeroSection from '@/components/sections/AboutPage/AboutHeroSection';
import AboutWhatWeDoSection from '@/components/sections/AboutPage/AboutWhatWeDoSection';
import AboutWhyUsSection from '@/components/sections/AboutPage/AboutWhyUsSection';

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutWhatWeDoSection />
      <AboutApproachSection />
      <AboutWhyUsSection />
      <AboutCTASection />
    </main>
  );
}