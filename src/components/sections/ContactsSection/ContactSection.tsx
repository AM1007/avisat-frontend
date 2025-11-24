import Container from "@/components/ui/Container/Container";
import ConsultButton from "@/components/ui/ConsultButton/ConsultButton";
import styles from './ContactsSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contactsSection}>
      <Container>
        <div className={styles.contactsWrapper}>
          <h2 className={styles.contactsTitle}>Звяжіться з нами</h2>

          <div className={styles.buttonWrapper}>
          <ConsultButton variant="contact" />
          </div>
        </div>
      </Container>
    </section>
  );
}