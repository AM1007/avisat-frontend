'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import styles from "./SwiperComponent.module.css";
import ArticleCard from "../../ui/ArticleCard/ArticleCard";
import articleLinks from "../../../data/articleLinks";

const SwiperComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('forward');

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    const oldIndex = activeIndex;
    
    let newDirection = 'forward';
    if (newIndex < oldIndex) {
      if (oldIndex === articleLinks.length - 1 && newIndex === 0) {
        newDirection = 'forward';
      } else {
        newDirection = 'backward';
      }
    } else if (newIndex > oldIndex) {
      if (oldIndex === 0 && newIndex === articleLinks.length - 1) {
        newDirection = 'backward';
      } else {
        newDirection = 'forward';
      }
    }
    
    setDirection(newDirection);
    setActiveIndex(newIndex);
  };

  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
        loop={articleLinks.length > 2}
        modules={[Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
        }}
      >
        {articleLinks.map((article, index) => {
          let screenPosition = (index - activeIndex + articleLinks.length) % articleLinks.length;
          
          return (
            <SwiperSlide key={article.id}>
              <ArticleCard
                title={article.title}
                image={article.image}
                url={article.url}
                index={index}
                screenPosition={screenPosition}
                direction={direction}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;