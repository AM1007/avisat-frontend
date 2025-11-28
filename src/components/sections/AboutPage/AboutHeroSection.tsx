import Container from '@/components/ui/Container/Container';
import styles from './AboutHeroSection.module.css';

export default function AboutHeroSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Про компанію</h1>
          <p className={styles.subtitle}>
            <span className={styles.red}>AViSaT</span> – компанія з досвідом у сфері безпеки та автоматизації.
          </p>
          <p className={styles.description}>
            Працюємо з 2012 року. Займаємось проєктуванням, встановленням і обслуговуванням систем: 
            охоронної сигналізації, відеоспостереження, контролю доступу, розумного дому, 
            пожежної безпеки, диспетчеризації.
          </p>
        </div>
      </Container>
    </section>
  );
}