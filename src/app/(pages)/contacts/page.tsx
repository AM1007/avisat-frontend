import ContactsCardsSection from '@/components/sections/ContactsPage/ContactsCardsSection';
import ContactsHeroSection from '@/components/sections/ContactsPage/ContactsHeroSection';
import ContactsHowToSection from '@/components/sections/ContactsPage/ContactsHowToSection';
import ContactsMapSection from '@/components/sections/ContactsPage/ContactsMapSection';

export default function ContactsPage() {
  return (
    <main>
      <ContactsHeroSection/>
      <ContactsCardsSection/>
      <ContactsHowToSection />
      <ContactsMapSection/>
    </main>
  );
}