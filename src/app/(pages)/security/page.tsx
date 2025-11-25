import SecurityBenefitsSection from '@/components/sections/SecurityPage/SecurityBenefitsSection';
import SecurityCardsSection from '@/components/sections/SecurityPage/SecurityCardsSection';
import SecurityCTASection from '@/components/sections/SecurityPage/SecurityCTASection';
import SecurityHeroSection from '@/components/sections/SecurityPage/SecurityHeroSection';
import SecurityIntroSection from '@/components/sections/SecurityPage/SecurityIntroSection';
import SecurityObjectsSection from '@/components/sections/SecurityPage/SecurityObjectsSection';
import SecurityStepsSection from '@/components/sections/SecurityPage/SecurityStepsSection';
import SecurityWhenNeededSection from '@/components/sections/SecurityPage/SecurityWhenNeededSection';


export default function SecurityPage() {
  return (
    <main>
     <SecurityHeroSection />
     <SecurityIntroSection/>
     <SecurityCardsSection/>
     <SecurityObjectsSection/>
     <SecurityBenefitsSection/>
     <SecurityWhenNeededSection />
     <SecurityStepsSection />
     <SecurityCTASection />
    </main>
  );
}