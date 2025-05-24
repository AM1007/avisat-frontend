'use client';

// import Image from "next/image";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
        <div className={styles.leftHero}>
          <div className={styles.leftHeroContent}>
            {/* <h1 className={styles.heroTitle}>
              <span className={styles.titleLarge}>Комплексні рішення</span>
              <span className={styles.titleSmall}>з безпеки та автоматизації</span>
            </h1>
            <button className={styles.ctaButton}>
              ОТРИМАТИ КОНСУЛЬТАЦІЮ
            </button> */}
          </div>
          <div className={styles.backgroundImage}>
            {/* Специальный div для тени внизу */}
      
          </div>

          
          {/* Мобильный контент (отображается только на мобильных устройствах) */}
          <div className={styles.mobileContent}>

            <div className={styles.mobileImageContainer}>
              {/* <h1 className={styles.heroTitle}>
              <span className={styles.titleLarge}>Комплексні рішення</span>
              <span className={styles.titleSmall}>з безпеки та автоматизації</span>
            </h1>
            <button className={styles.ctaButton}>
              ОТРИМАТИ КОНСУЛЬТАЦІЮ
            </button> */}
            </div>

          </div>
          
        </div>
        
        {/* Правая часть Hero (фон с ограждением) */}
        <div className={styles.rightHero}>
          <div className={styles.backgroundImage}>
            {/* Специальный div для тени внизу */}
            <div className={styles.shadowOverlay}></div>
          </div>
          

        </div>
      
    </section>
  );
}