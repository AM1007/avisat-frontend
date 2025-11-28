import Container from '@/components/ui/Container/Container';
import styles from './SmartHouseStepsSection.module.css';

const steps = [
  {
    number: 1,
    text: 'Залишаєте заявку',
  },
  {
    number: 2,
    text: 'Ми консультуємо та пропонуємо рішення',
  },
  {
    number: 3,
    text: 'Узгоджуємо список функцій і сценаріїв',
  },
  {
    number: 4,
    text: 'Проводимо монтаж і налаштування',
  },
  {
    number: 5,
    text: 'Навчаємо користуванню',
  },
];

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function SmartHouseStepsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Простий старт</h2>
          
          <div className={styles.stepsGrid}>
            
            {steps.map((step, index) => (
              <div key={step.number} className={styles.step}>
                <div className={styles.stepNumber}>
                  <span className={styles.stepNumberText}>{step.number}</span>
                </div>
                <p className={styles.stepText}>{step.text}</p>
                {index < steps.length - 1 && (
                  <ArrowRightIcon className={styles.stepArrow} />
                )}
              </div>
            ))}
          </div>
          
          <div className={styles.footer}>
            <p className={styles.footerText}>
              Все – під ключ. Без головного болю. Без зайвих витрат.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}