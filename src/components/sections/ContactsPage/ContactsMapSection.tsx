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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.2!2d30.357649!3d50.4701579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ccc1210fffff%3A0xd54b9cf2a95aea18!2z0L_RgNC-0YHQvy4g0JDQutCw0LTQtdC80LjQutCwINCf0LDQu9C70LDQtNC40L3QsCwgNDTQsSwg0JrQuNC10LI!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AViSaT — пр. Палладіна Академіка, 44 літ. Б, Київ"
              className={styles.iframe}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}