import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import ConsultButton from '@/components/ui/ConsultButton/ConsultButton';
import styles from './SmartHouseHeroSection.module.css';

export default function SmartHouseHeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/modern-smart-home-interior-with-tablet-control-pan.jpg"
          alt="Розумний дім - автоматизоване керування"
          fill
          priority
        />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Розумний дім</h1>
          <p className={styles.subtitle}>
            Дім, який працює замість вас.
          </p>
          <p className={styles.description}>
            Система &quot;розумний дім&quot; — це не про майбутнє.
            Це про комфорт, безпеку і контроль вже сьогодні.
          </p>
          <ConsultButton variant="hero" className={styles.consultButton} />
        </div>
      </Container>
    </section>
  );
}