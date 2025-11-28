import Container from '@/components/ui/Container/Container';
import styles from './SmartHouseScenariosSection.module.css';

const scenarios = [
  {
    title: '"Я вдома"',
    description: 'Вмикається світло, відкриваються штори, запускається музика',
  },
  {
    title: '"Ніч"',
    description: 'Світло гасне, двері блокуються, сигналізація активується',
  },
  {
    title: '"Відпустка"',
    description: 'Моделюється присутність вдома, вмикається сигналізація, економиться енергія',
  },
];

export default function SmartHouseScenariosSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Приклади сценаріїв</h3>
          
          <div className={styles.grid}>
            {scenarios.map((scenario, index) => (
              <div key={index} className={styles.card}>
                <h4 className={styles.cardTitle}>{scenario.title}</h4>
                <p className={styles.cardDescription}>{scenario.description}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.footer}>
            <p className={styles.footerText}>
              Це не іграшка. Це система оптимізації простору, часу та ресурсів.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}