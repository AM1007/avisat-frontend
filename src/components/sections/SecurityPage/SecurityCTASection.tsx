import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import ConsultButton from '@/components/ui/ConsultButton/ConsultButton';
import styles from './SecurityCTASection.module.css';

export default function SecurityCTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/modern-smart-home-security-system-control-panel-ta.jpg"
          alt="Система управління безпекою"
          fill
        />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Безпека починається не з тривоги, <br/>а з рішення
          </h2>
          <p className={styles.description}>
            Зробіть свій вибір зараз і будьте спокійні за дім, бізнес і близьких
          </p>

          <div className={styles.buttons}>
            <ConsultButton variant="hero" className={styles.consultButton} />
          </div>
        </div>
      </Container>
    </section>
  );
}