import Container from '@/components/ui/Container/Container';
import styles from './ContactsHowToSection.module.css';

const contactMethods = [
  'Зателефонуйте напряму',
  'Напишіть лист на пошту',
  'Залиште заявку через форму — ми зв’яжемось протягом дня',
];

export default function ContactsHowToSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Як звернутися</h2>
          <ul className={styles.list}>
            {contactMethods.map((method, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.bullet} />
                <span className={styles.listText}>{method}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}