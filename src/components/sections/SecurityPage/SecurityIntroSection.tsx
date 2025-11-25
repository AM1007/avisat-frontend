import Container from '@/components/ui/Container/Container';
import styles from './SecurityIntroSection.module.css';

export default function SecurityIntroSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Комплексні рішення під ключ</h2>
          <p className={styles.subtitle}>
            Ми не продаємо обладнання. Ми будуємо архітектуру безпеки.
          </p>
          <p className={styles.description}>
            Наш підхід починається з аудиту об&apos;єкта: ми аналізуємо площу, розташування, 
            вразливі точки та стиль життя або бізнес-процеси. Далі — розробляємо рішення, 
            яке охоплює все:
          </p>
        </div>
      </Container>
    </section>
  );
}