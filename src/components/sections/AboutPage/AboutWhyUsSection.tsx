import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import styles from './AboutWhyUsSection.module.css';

function ShieldIcon({ className }: { className?: string }) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const benefits = [
  'Досвід понад 10 років',
  'Реальні приклади реалізованих об’єктів',
  'Робота "під ключ": від аналізу до обслуговування',
  'Гарантія на обладнання і роботу',
  'Можливість поетапної реалізації систем',
];

export default function AboutWhyUsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/professional-security-technician-team-work-install.jpg"
                alt="Професійна команда технічних спеціалістів"
                width={320}
                height={400}
                className={styles.image}
              />
            </div>
            <div className={styles.textBlock}>
              <div className={styles.titleWrapper}>
                <ShieldIcon className={styles.icon} />
                <h2 className={styles.title}>Чому працюють з нами</h2>
              </div>
              <ul className={styles.list}>
                {benefits.map((benefit, index) => (
                  <li key={index} className={styles.listItem}>
                    <CheckCircleIcon className={styles.checkIcon} />
                    <span className={styles.listText}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}