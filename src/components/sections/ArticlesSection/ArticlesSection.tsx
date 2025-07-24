import Container from "@/components/ui/Container/Container";
import styles from './ArticlesSection.module.css';

import SwiperComponent from "../../ui/Swiper/SwiperComponent"

export default function ArticlesSection() {

  return (
    <>
      <h2 className={styles.ArticlesTitle}>
        Статті
      </h2>
    <section className={styles.articlesSection}>
      <Container>        
        <div className={styles.ArticlesContainer}>
        <SwiperComponent/>
      </div>
    </Container>
    </section>
    </>
  );
}