import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import styles from './AboutApproachSection.module.css';

function ClipboardListIcon({ className }: { className?: string }) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

const steps = [
  'Виїзд на об’єкт або консультація онлайн',
  'Аналіз потреб і умов',
  'Підготовка проєкту або технічного рішення',
  'Узгодження кошторису',
  'Встановлення, налаштування',
  'Супровід і сервіс',
];

export default function AboutApproachSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.textBlock}>
              <div className={styles.titleWrapper}>
                <ClipboardListIcon className={styles.icon} />
                <h2 className={styles.title}>Наш підхід</h2>
              </div>
              <ol className={styles.list}>
                {steps.map((step, index) => (
                  <li key={index} className={styles.listItem}>
                    <span className={styles.stepNumber}>{index + 1}</span>
                    <span className={styles.stepText}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/security-system-installation-planning-blueprint-te.jpg"
                alt="Технічне планування систем безпеки"
                width={320}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
