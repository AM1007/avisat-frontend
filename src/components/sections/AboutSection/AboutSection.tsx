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
          <p className={styles.paragraph}>
            <span className={styles.paragraphSelection}>АвіСат</span> - компанія з багаторічним
            досвідом у сфері систем безпеки та автоматизації.
          </p>
          <p className={styles.paragraph}>
            Ми пропунуємо комплексний підхід: <span className={styles.paragraphSelection}>від проєктування до впровадження </span> 
та обслуговування систем будь-якої складності 
          </p>
        </div>
        </div>
      </Container>
    </section>
  );
}