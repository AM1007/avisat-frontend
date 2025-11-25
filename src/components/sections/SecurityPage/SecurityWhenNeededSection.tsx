import Image from 'next/image';
import Container from '@/components/ui/Container/Container';
import styles from './SecurityWhenNeededSection.module.css';

const situations = [
  'Переїжджаєте в новий будинок чи квартиру',
  'Плануєте відпустку — і хочете бути спокійними',
  'Працюєте з цінним обладнанням, документами, грошима',
  'Маєте приватний будинок, офіс, магазин, склад',
  'Були спроби проникнення або крадіжки у районі',
];

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export default function SecurityWhenNeededSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/perimeter-security-fence-with-sensors-at-night-bla.jpg"
              alt="Система захисту периметру"
              width={600}
              height={500}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>Коли потрібна система безпеки?</h2>

            <ul className={styles.list}>
              {situations.map((situation, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet} />
                  <span className={styles.listText}>{situation}</span>
                </li>
              ))}
            </ul>

            <div className={styles.alert}>
              <AlertIcon className={styles.alertIcon} />
              <div className={styles.alertContent}>
                <p className={styles.alertTitle}>Кожен день без захисту — ризик.</p>
                <p className={styles.alertText}>
                  Ми пропонуємо швидкий аудит об&apos;єкта і готове рішення вже за 48 годин.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}