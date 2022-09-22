import React from "react";
import { Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const breakpoints = {
  // when window width is >= 640px
  640: {
    slidesPerView: 2,
  },
  // when window width is >= 640px
  900: {
    slidesPerView: 3,
  },
  // when window width is >= 768px
  1440: {
    slidesPerView: 4,
  },
};

const SliderWrapper = ({ children, refPrev, refNext }) => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      navigation={{
        // Both prevEl & nextEl are null at render so this does not work
        prevEl: refPrev.current,
        nextEl: refNext.current,
      }}
      onSwiper={(swiper) => {
        // Delay execution for the refs to be defined
        setTimeout(() => {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl = refPrev.current;
          swiper.params.navigation.nextEl = refNext.current;

          // Re-init navigation
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        });
      }}
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
};

export default SliderWrapper;
