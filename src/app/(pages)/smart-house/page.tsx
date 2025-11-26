import SmartHouseAutomationSection from '@/components/sections/SmartHousePage/SmartHouseAutomationSection';
import SmartHouseBenefitsSection from '@/components/sections/SmartHousePage/SmartHouseBenefitsSection';
import SmartHouseCTASection from '@/components/sections/SmartHousePage/SmartHouseCTASection';
import SmartHouseForWhomSection from '@/components/sections/SmartHousePage/SmartHouseForWhomSection';
import SmartHouseHeroSection from '@/components/sections/SmartHousePage/SmartHouseHeroSection';
import SmartHouseHowItLooksSection from '@/components/sections/SmartHousePage/SmartHouseHowItLooksSection';
import SmartHouseIntroSection from '@/components/sections/SmartHousePage/SmartHouseIntroSection';
import SmartHouseScenariosSection from '@/components/sections/SmartHousePage/SmartHouseScenariosSection';
import SmartHouseStepsSection from '@/components/sections/SmartHousePage/SmartHouseStepsSection';
import SmartHouseWhatIsSection from '@/components/sections/SmartHousePage/SmartHouseWhatIsSection';

export default function SmartHousePage() {
  return (
    <main>
      <SmartHouseHeroSection/>
      <SmartHouseIntroSection/>
      <SmartHouseWhatIsSection/>
      <SmartHouseScenariosSection/>
      <SmartHouseAutomationSection/>
      <SmartHouseForWhomSection/>
      <SmartHouseHowItLooksSection/>
      <SmartHouseBenefitsSection/>
      <SmartHouseStepsSection/>
      <SmartHouseCTASection/>
    </main>
  );
}

