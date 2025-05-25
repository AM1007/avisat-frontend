import Container from '@/components/ui/Container/Container';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <Container>
        <h2 className={styles.title}>
          ПРО КОМПАНІЮ
        </h2>

        <div className={styles.contentWrapper}>
          <p className={styles.paragraph}>
            <span className={styles.companyName}>АвіСат</span> - компанія з багаторічним
            досвідом у сфері систем безпеки та автоматизації.
          </p>
          <p className={styles.paragraph}>
            Ми проєктуємо комплексні мережі, підєднуємо до відеонагляду та
            забезпечуємо системи бізнес-звіт і навчаємо.
          </p>
        </div>
      </Container>
    </section>
  );
}