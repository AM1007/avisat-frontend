'use client';

import dynamic from 'next/dynamic';
import Container from "@/components/ui/Container/Container";
import styles from './ArticlesSection.module.css';

// Динамический импорт SwiperComponent без SSR
const SwiperComponent = dynamic(
  () => import("../../ui/Swiper/SwiperComponent"),
  { 
    ssr: false,
    loading: () => (
      <div className={styles.swiperLoading}>
        <div>Завантаження слайдера...</div>
      </div>
    )
  }
);

export default function ArticlesSection() {
  return (
    <>
      <h2 className={styles.ArticlesTitle}>
        Статті
      </h2>
      <section className={styles.articlesSection}>
        <Container noGutter>        
          <div className={styles.ArticlesContainer}>
            <SwiperComponent/>
          </div>
        </Container>
      </section>
    </>
  );
}