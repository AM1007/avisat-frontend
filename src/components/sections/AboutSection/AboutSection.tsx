import Container from '@/components/ui/Container/Container';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <Container>
      <div className={styles.aboutSectionContent}>
        <h2 className={styles.title}>
          ПРО КОМПАНІЮ
        </h2>
        <div className={styles.contentWrapper}>
          <p className={styles.subtitle}>
            AViSaT проєктує та впроваджує системи безпеки з 2012 року.
          </p>
          <p className={styles.paragraph}>
            Працюємо “під ключ” — від аналізу загроз до сервісної підтримки.
          </p>
          <p className={styles.paragraph}>
            Знаємо, як захистити дім, бізнес і нервову систему власника.
          </p>
        </div>
        </div>
      </Container>
    </section>
  );
}