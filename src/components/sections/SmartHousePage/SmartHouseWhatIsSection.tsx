import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import styles from './SmartHouseWhatIsSection.module.css';

export default function SmartHouseWhatIsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Що таке розумний дім?</h2>
          
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <p className={styles.text}>
                Це система, яка об&apos;єднує всі технічні процеси у вашому житлі 
                в єдину інтелектуальну мережу.
              </p>
              <p className={styles.text}>
                Ви керуєте всім через один інтерфейс – додаток на телефоні, 
                голосовий асистент або автоматичні сценарії.
              </p>
            </div>
            
            <div className={styles.imageWrapper}>
              <Image
                src="/images/smartphone-app-controlling-smart-home-devices--mod.jpg"
                alt="Керування розумним домом через смартфон"
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