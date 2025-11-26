import Container from '@/components/ui/Container/Container';
import ConsultButton from '@/components/ui/ConsultButton/ConsultButton';
import styles from './AboutCTASection.module.css';

export default function AboutCTASection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <p className={styles.text}>
            Ми працюємо без надлишкових рішень. Пропонуємо тільки те, що потрібно для конкретного завдання.
          </p>
          <div className={styles.buttons}>
            <ConsultButton variant="contact" className={styles.consultButton} />
          </div>
        </div>
      </Container>
    </section>
  );
}