'use client';

import Container from '@/components/ui/Container/Container';
import ConsultButton from '@/components/ui/ConsultButton/ConsultButton';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
     <Container>
        <div className={styles.leftHero}>
          <div className={styles.leftHeroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLarge}>Комплексні рішення</span>
              <span className={styles.titleSmall}>з безпеки та автоматизації</span>
            </h1>
          <ConsultButton variant="hero" />
          </div>
        </div>
        <div className={styles.rightHero}>
        </div>
     </Container>
    </section>
  );
}