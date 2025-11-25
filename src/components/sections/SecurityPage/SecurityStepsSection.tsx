import Container from '@/components/ui/Container/Container';
import styles from './SecurityStepsSection.module.css';

const steps = [
  {
    number: '01',
    title: 'Залишаєте заявку на консультацію',
  },
  {
    number: '02',
    title: 'Ми проводимо безкоштовний аудит',
  },
  {
    number: '03',
    title: 'Готуємо індивідуальне рішення',
  },
  {
    number: '04',
    title: 'Узгоджуємо деталі та встановлюємо систему',
  },
  {
    number: '05',
    title: 'Надаємо повну техпідтримку',
  },
];

export default function SecurityStepsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Почати просто</h2>

          <div className={styles.stepsGrid}>
            <div className={styles.stepsline}></div>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepNumber}>
                  <span className={styles.stepNumberText}>{step.number}</span>
                </div>
                <p className={styles.stepTitle}>{step.title}</p>                                 
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}