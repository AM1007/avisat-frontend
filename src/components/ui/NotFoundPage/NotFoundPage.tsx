// src/components/ui/NotFoundPage/NotFoundPage.tsx

import Link from 'next/link';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Сторінку не знайдено</h1>
        <p className={styles.message}>
          На жаль, сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>
        
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            <span className={styles.arrow}>←</span>
            Повернутися на головну
          </Link>
          
          <Link href="/contacts" className={styles.contactButton}>
            Зв&apos;язатися з нами
          </Link>
        </div>
      </div>
    </section>
  );
}