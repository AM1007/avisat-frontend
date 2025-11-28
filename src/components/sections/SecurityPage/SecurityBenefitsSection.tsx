import Link from 'next/link';
import Container from '@/components/ui/Container/Container';
import styles from './SecurityBenefitsSection.module.css';

const benefits = [
  {
    title: 'Контроль у режимі реального часу.',
    description: 'Ви бачите, що відбувається – з телефону, планшету або комп\'ютера, де б ви не були.',
  },
  {
    title: 'Захист всередині і зовні.',
    description: 'Ми встановлюємо як зовнішні бар\'єри, так і внутрішні датчики руху, відкриття дверей, розбиття скла.',
  },
  {
    title: 'Інтелектуальна система.',
    description: 'Наша система не просто сигналить – вона аналізує, фільтрує хибні тривоги та надсилає сповіщення тільки коли це справді потрібно.',
  },
  {
    title: 'Інтеграція з мобільним телефоном.',
    description: 'Ви керуєте всіма функціями через зручний додаток.',
  },
  {
    title: 'Підтримка 24/7.',
    description: 'Усі наші клієнти отримують доступ до технічної підтримки без вихідних.',
  },
  {
    title: 'Сервіс і обслуговування.',
    description: 'Ми не зникаємо після встановлення – обслуговування системи включено в пакет.',
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function SecurityBenefitsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Що ви отримаєте</h2>

          <div className={styles.grid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.checkWrapper}>
                  <CheckIcon className={styles.checkIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                  <p className={styles.cardDescription}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <h3 className={styles.footerTitle}>Надійність. <br/>Перевірено роками</h3>
            <p className={styles.footerText}>
              Детальніше про досвід у розділі{'  '}
              <Link href="/about" className={styles.footerLink}>
                 Про компанію
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}