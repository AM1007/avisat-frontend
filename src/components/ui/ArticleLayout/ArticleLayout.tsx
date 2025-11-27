import type { ReactNode } from 'react';
import Container from '@/components/ui/Container/Container';
import BackButton from '@/components/ui/BackButton/BackButton';
import styles from './ArticleLayout.module.css';

interface ArticleLayoutProps {
  title: string;
  children: ReactNode;
}

export default function ArticleLayout({ title, children }: ArticleLayoutProps) {
  return (
    <Container>
      <article className={styles.article}>
        <h1 className={styles.title}>{title}</h1>
        <hr className={styles.divider} />
        
        <div className={styles.content}>
          {children}
        </div>

        <div className={styles.backButtonWrapper}>
          <BackButton />
        </div>
      </article>
    </Container>
  );
}