import Container from "@/components/ui/Container/Container";
import ConsultButton from "@/components/ui/ConsultButton/ConsultButton";
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contactsSection}>
      <Container>
        <div className={styles.contactsWrapper}>
          <h2 className={styles.contactsTitle}>Звяжіться з нами</h2>
          <div className={styles.buttonWrapper}>
          <ConsultButton variant="contact" className={styles.formButton}/>
          </div>
        </div>
      </Container>
    </section>
  );
}