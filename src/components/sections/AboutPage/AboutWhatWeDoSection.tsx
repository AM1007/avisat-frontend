import Container from '@/components/ui/Container/Container';
import styles from './AboutWhatWeDoSection.module.css';

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export default function AboutWhatWeDoSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <WrenchIcon className={styles.icon} />
            <h2 className={styles.title}>Що ми робимо</h2>
          </div>
          <p className={styles.description}>
            Ми реалізуємо рішення для квартир, приватних будинків, офісів, складів, 
            магазинів та інших об&apos;єктів. Підбираємо обладнання під конкретні завдання. 
            Робимо монтаж, налаштування, навчання. Після встановлення — надаємо технічну підтримку.
          </p>
        </div>
      </Container>
    </section>
  );
}