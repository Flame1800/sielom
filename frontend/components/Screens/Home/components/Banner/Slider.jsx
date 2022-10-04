import React from "react";
import styled from "styled-components";
import { API } from "/helpers/API";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { baseTheme } from "/styles/theme";

SwiperCore.use([Autoplay]);

const Slider = () => {
  const [slides, setSlides] = React.useState([]);

  React.useEffect(async () => {
    const slidesRequest = await API.getSlides();
    setSlides(slidesRequest.data.data);
  }, []);

  return (
    <SliderStyle>
      <Swiper
        navigation={true}
        modules={[Navigation, EffectFade]}
        loop={true}
        autoplay={{ delay: 7000 }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideImg
              bg={`${process.env.API_URL}${slide.attributes.cover.data.attributes.url}`}
              alt="img"
            />
            <Footer>
              <TextStyle>{slide.attributes.description}</TextStyle>
              {slide.attributes.link && (
                <Button>
                  <Link href={slide.attributes.link}>
                    <a>Подробнее</a>
                  </Link>
                </Button>
              )}
            </Footer>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderStyle>
  );
};

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 110px;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextStyle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 85%;
`;

const Button = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 20%;
  font-size: 16px;
  font-weight: 600;
  transition: 0.2s;
  background: #414141;
  border-radius: 10px;
  cursor: pointer;

  a {
    color: #fff;
  }

  &:hover {
    background: #8c8c8c;
  }
`;

const SlideImg = styled.div`
  background: ${({ bg }) => `url(${bg})`} no-repeat;
  height: 90%;
  width: 100%;
  background-size: contain;
  background-position-x: 50%;
  background-position-y: 50%;
  border-left: 1px #fff solid;
  border-right: 1px #fff solid;

  @media (max-width: 1500px) {
    background-size: contain;
  }
`;

const SliderStyle = styled.div`
  width: 100%;

  .swiper {
    background: #fff;
    height: 85vh;
    display: flex;
    overflow: hidden;

    @media (max-width: 1900px) {
      height: 85vh;
    }

    @media (max-width: 1000px) {
      height: 30vh;
    }
  }

  .swiper-button-next {
    color: #000 !important;
    background: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
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
    width: 50px;
    height: 50px;
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

  .swiper-slide img {
    display: block;
    width: 90%;
    margin: 0 auto;
    height: 100%;
    object-fit: contain;
  }
`;

export default Slider;
