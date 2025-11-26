import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import styles from './SmartHouseBenefitsSection.module.css';

const benefits = [
  'Менше побутової рутини',
  'Більше комфорту й контролю',
  'Зниження витрат на електроенергію',
  'Повну адаптацію під ваш стиль життя',
  'Сервіс і підтримку 24/7',
];

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function SmartHouseBenefitsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/luxury-modern-living-room-with-smart-home-devices-.jpg"
                alt="Комфортний розумний дім"
                fill
                className={styles.image}
              />
            </div>
            
            <div className={styles.content}>
              <h2 className={styles.title}>Що ви отримуєте</h2>
              
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