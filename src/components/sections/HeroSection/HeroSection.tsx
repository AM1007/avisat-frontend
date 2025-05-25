'use client';

import Container from '@/components/ui/Container/Container';
// import Image from "next/image";
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
            <button className={styles.ctaButton}>
              ОТРИМАТИ КОНСУЛЬТАЦІЮ
            </button>
          </div>
          <div className={styles.backgroundImage}>
            {/* Специальный div для тени внизу */}
      
          </div>
        </div>
        
        {/* Правая часть Hero (фон с ограждением) */}
        <div className={styles.rightHero}>
            {/* Специальный div для тени внизу */}
            <div className={styles.shadowOverlay}></div>
          
        </div>
     </Container>
    </section>
  );
}