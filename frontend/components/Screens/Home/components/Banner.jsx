import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import { API } from "../../../../helpers/API";
import Link from "next/link";

SwiperCore.use([Autoplay]);

const Slider = () => {
  const [slides, setSlides] = React.useState([]);

  React.useEffect(async () => {
    const slidesRequest = await API.getSlides();
    setSlides(slidesRequest.data.data);
  }, []);

  return (
    <Wrapper>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        autoplay={{ delay: 7000 }}
        slidesPerGroup={1}
        slidesPerView={1}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={`${process.env.API_URL}${slide.attributes.cover.data.attributes.url}`}
              alt="img"
            />
            <Link href={slide.attributes.link}>
              <a href={slide.attributes.link} className="text">
                {slide.attributes.description || "Подробнее"}
                <img src="/img/link.svg" alt="link" />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  max-height: 720px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next {
    color: #000 !important;
    background: #fff;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.18);

    &::after {
      content: "";
      background: url("/img/small-arrow.svg");
      width: 30px;
      height: 30px;
      background-size: cover;
    }
  }

  .swiper-button-prev {
    color: #000 !important;
    background: #fff;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.18);

    &::after {
      content: "";
      background: url("/img/small-arrow.svg");
      width: 30px;
      height: 30px;
      background-size: cover;
      transform: rotate(180deg);
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: rgba(231, 231, 231, 0.27);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 1260px) {
      object-fit: contain;
    }
  }

  .text {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 15px;
    padding: 10px 20px;
    font-size: 17px;
    font-weight: 500;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.87);
    min-width: 60px;

    &:hover {
      background: #fff;
    }

    img {
      margin-left: 8px;
      width: 15px;
    }
  }
`;

export default Slider;
