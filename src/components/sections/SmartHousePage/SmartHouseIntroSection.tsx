import Container from '@/components/ui/Container/Container';
import styles from './SmartHouseIntroSection.module.css';

export default function SmartHouseIntroSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <p className={styles.text}>
            Ви можете керувати світлом, кліматом, технікою, безпекою та навіть шторами – 
            зі смартфона або голосом.
          </p>
          <p className={styles.text}>
            <span className={styles.highlight}>AViSat</span> створює розумні простори, 
            де все налаштовано під ваш стиль життя.
          </p>
        </div>
      </Container>
    </section>
  );
}