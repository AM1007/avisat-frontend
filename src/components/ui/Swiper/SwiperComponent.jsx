'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import styles from "./SwiperComponent.module.css";
import ArticleCard from "../../ui/ArticleCard/ArticleCard";
import articleLinks from "../../../data/articleLinks";

const SwiperComponent = () => {
  // Состояние для предотвращения hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Рендерим fallback до hydration
  if (!isClient) {
    return (
      <div className={styles.swiperFallback}>
        {articleLinks.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            image={article.image}
            url={article.url}
          />
        ))}
      </div>
    );
  }

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      className={styles.swiperContainer}
      // Убираем loop если слайдов мало
      loop={articleLinks.length > 2}
      modules={[Pagination, Navigation]}
      breakpoints={{
        // Mobile first подход
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }}
    >
      {articleLinks.map((article) => (
        <SwiperSlide key={article.id}>
          <ArticleCard
            title={article.title}
            image={article.image}
            url={article.url}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;