'use client';

import Container from '@/components/ui/Container/Container';
// import Image from "next/image";
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
            {/* <button className={styles.ctaButton}>
              ОТРИМАТИ КОНСУЛЬТАЦІЮ
            </button> */}
            <ConsultButton variant="hero" 
            onClick={() => console.log('clicked')}
            />
          </div>
          {/* <div className={styles.backgroundImage}>
     
          </div> */}
        </div>
        
        {/* Правая часть Hero (фон с ограждением) */}
        <div className={styles.rightHero}>
           
            {/* <div className={styles.shadowOverlay}></div> */}
          
        </div>
     </Container>
    </section>
  );
}