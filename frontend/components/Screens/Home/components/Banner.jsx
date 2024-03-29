import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import { API } from "../../../../helpers/API";
import Link from "next/link";
import {observer} from "mobx-react-lite";

SwiperCore.use([Autoplay]);

const Slider = ({isSecondCollege}) => {
  const [slides, setSlides] = React.useState([]);



  React.useEffect(async () => {
    let slidesRequest;

    if (isSecondCollege) {
      slidesRequest = await API.getSecondCollegeSlides();
    } else {
      slidesRequest = await API.getSlides();
    }

    setSlides(slidesRequest.data.data);

  }, []);

  if (!slides.length && isSecondCollege) {
    return null;
  }

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
            {slide.attributes?.link && (
              <Link href={slide.attributes.link}>
                <a href={slide.attributes.link} className="text">
                  {slide.attributes.description || "Подробнее"}
                  <img src="/img/link.svg" alt="link" />
                </a>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 720px;
  max-height: 720px;
  margin-top: -5px;
  
  @media screen and (max-width: 1320px) {
    height: 600px;
  }

  @media screen and (max-width: 880px) {
    height: 400px;
  }


  @media screen and (max-width: 650px) {
    height: 250px;
  }

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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .text {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 15px;
    padding: 7px 14px;
    font-size: 14px;
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

export default observer(Slider);
