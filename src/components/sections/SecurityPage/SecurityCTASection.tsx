import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import ConsultButton from '@/components/ui/ConsultButton/ConsultButton';
import BackButton from '@/components/ui/BackButton/BackButton';
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
            Безпека починається не з тривоги. А з рішення.
          </h2>
          <p className={styles.description}>
            Зробіть свій вибір зараз — і будьте спокійні за дім, бізнес і близьких.
          </p>

          <div className={styles.buttons}>
            <ConsultButton variant="contact" className={styles.consultButton} />
            <BackButton href="/" className={styles.backButton} />
          </div>
        </div>
      </Container>
    </section>
  );
}