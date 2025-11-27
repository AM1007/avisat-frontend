import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import styles from './SecurityHeroSection.module.css';
import ConsultButton from '@/components/ui/ConsultButton/ConsultButton';

export default function SecurityHeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/modern-security-control-room-with-multiple-monitor.jpg"
          alt="Центр управління системами безпеки"
          fill
          priority
        />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Системи безпеки</h1>
          <p className={styles.subtitle}>
            Захист — не розкіш, а база для спокійного життя
          </p>
          <p className={styles.description}>
            Це система, яка передбачає ризики, реагує миттєво та інтегрується у ваш побут.<br/> У сучасному світі безпека — це не просто сигналізація чи кілька камер. 
          </p>

          <p className={styles.subtitle}>
            <span className={styles.company}>AViSaT</span> створює такі системи
          </p>

          <p className={styles.description}>
            Ми працюємо для приватних осіб, бізнесу та організацій, 
            які розуміють: 
          </p>

          <p className={`${styles.description} ${styles.lastDescription}`}>
           дешевше запобігти, ніж відновлювати
          </p>

          <div className={styles.buttons}>
            <ConsultButton variant="hero" className={styles.consultButton} />
          </div>
        </div>

      </Container>
    </section>
  );
}