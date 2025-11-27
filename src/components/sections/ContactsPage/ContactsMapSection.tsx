import Container from '@/components/ui/Container/Container';
import styles from './ContactsMapSection.module.css';

export default function ContactsMapSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Мапа</h2>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.8543!2d30.3735!3d50.4547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb5c5c5c5c5c%3A0x0!2z0L_RgNC-0YHQvy4g0JDQutCw0LTQtdC80ZbQutCwINCf0LDQu9C70LDQtNGW0L3QsCwgNDYvMiwg0JrQuNGX0LI!5e0!3m2!1suk!2sua!4v1699999999999!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AViSaT — просп. Академіка Палладіна, 46/2, Київ"
              className={styles.iframe}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}