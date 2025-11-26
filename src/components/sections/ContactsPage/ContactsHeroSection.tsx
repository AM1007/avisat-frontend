import Container from '@/components/ui/Container/Container';
import styles from './ContactsHeroSection.module.css';

export default function ContactsHeroSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Контакти</h1>
          <p className={styles.subtitle}>
            Зв’яжіться з нами зручним для вас способом.
          </p>
        </div>
      </Container>
    </section>
  );
}