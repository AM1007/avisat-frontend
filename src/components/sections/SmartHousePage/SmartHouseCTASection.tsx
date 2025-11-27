import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import ConsultButton from '@/components/ui/ConsultButton/ConsultButton';
// import BackButton from '@/components/ui/BackButton/BackButton';
import styles from './SmartHouseCTASection.module.css';

export default function SmartHouseCTASection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2 className={styles.title}>
                Розумний дім — це не розкіш, це нова норма
              </h2>
              <p className={styles.description}>
                Системи автоматизації вже стали стандартом у багатьох країнах. 
                І якщо ще вчора це здавалося &ldquo;дорого і складно&rdquo;, сьогодні -
                це доступно, швидко, вигідно.
              </p>
              <p className={`${styles.description} ${styles.highlight}`}>
                Почніть з одного сценарію — і не захочете повертатись назад.
              </p>
              
              <div className={styles.buttons}>
                <ConsultButton variant="contact" className={styles.consultButton} />
                {/* <BackButton href="/" className={styles.backButton} /> */}
              </div>
            </div>
            
            <div className={styles.imageWrapper}>
              <Image
                src="/images/smart-home-control-panel-on-wall--touchscreen-inte.jpg"
                alt="Панель керування розумним домом"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}