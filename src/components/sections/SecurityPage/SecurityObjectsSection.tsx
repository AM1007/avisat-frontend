import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import styles from './SecurityObjectsSection.module.css';

export default function SecurityObjectsSection() {

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/security-camera-on-building-facade-modern-architec.jpg"
              alt="Сучасна система відеоспостереження"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
          <p className={styles.text}>
            <span className={styles.textPunch}>Ми працюємо з об&apos;єктами будь-якої складності:</span> <br/>від квартир і приватних 
            будинків до комерційних об&apos;єктів, складів, офісів та магазинів.
          </p>
        </div>
      </Container>
    </section>
  );
}