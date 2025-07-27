'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import styles from "./SwiperComponent.module.css";
import ArticleCard from "../../ui/ArticleCard/ArticleCard";
import articleLinks from "../../../data/articleLinks";

const SwiperComponent = () => {
  return (
    <div>
      {/* Swiper всегда рендерится */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
        loop={articleLinks.length > 2}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
        }}
      >
        {articleLinks.map((article, index) => (
          <SwiperSlide key={article.id}>
            <ArticleCard
              title={article.title}
              image={article.image}
              url={article.url}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
