import React from "react";
import CardsCarousel from "./CardsCarousel";
import { SwiperSlide } from "swiper/react";
import NewsCard from "../../../Card/NewsCard";

const News = ({ news }) => {
  return (
    <>
      {news.length > 0 && (
        <CardsCarousel title="Мероприятия и новости" btnText="Все записи">
          {news.map((post, i) => {
            if (i < 16) {
              return (
                <SwiperSlide key={post.id}>
                  <NewsCard post={post} />
                </SwiperSlide>
              );
            }
          })}
        </CardsCarousel>
      )}
    </>
  );
};

export default News;
