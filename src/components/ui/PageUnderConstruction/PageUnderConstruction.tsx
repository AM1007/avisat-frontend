import Link from 'next/link';
import styles from './PageUnderConstruction.module.css';

interface PageUnderConstructionProps {
  title?: string;
  message?: string;
  showHomeLink?: boolean;
}

export default function PageUnderConstruction({ 
  title = "Сторінка в розробці",
  message = "Зовсім скоро тут з'явиться корисний контент. Слідкуйте за оновленнями!",
  showHomeLink = true
}: PageUnderConstructionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.message}>
            {message}
          </p>
        </div>
        
        {showHomeLink && (
          <Link href="/" className={styles.homeLink}>
            <span className={styles.arrow}>←</span>
            Повернутися на головну
          </Link>
        )}
      </div>
    </section>
  );
}