import React from 'react';
import styled from "styled-components";
import {API} from "../../../libs/API";
import { Swiper, SwiperSlide  } from "swiper/react";
import SwiperCore, { Navigation, EffectFade, Autoplay  } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import {baseTheme} from "../../../styles/theme";


SwiperCore.use([Autoplay]);

const Slider = () => {
    const [slides, setSlides] = React.useState([])

    React.useEffect(async () => {
        const slidesRequest = await API.getSlides()
        setSlides(slidesRequest.data.data)
    }, [])

    return (
            <SliderStyle>
                <Swiper
                    navigation={true}
                    modules={[ Navigation, EffectFade]}
                    loop={true}
                    autoplay={{delay: 7000}}
                >
                    {slides.map(slide =>
                        <SwiperSlide key={slide.id}>
                            <SlideImg bg={`${process.env.API_URL}${slide.attributes.cover.data.attributes.url}`} alt="img"/>
                            {slide.attributes.link &&
                                        <div className="text">
                                            <Link href={slide.attributes.link}>
                                                <a>Подробнее</a>
                                            </Link>
                                        </div>
                            }
                        </SwiperSlide>
                    )}
                </Swiper>
            </SliderStyle>
    );
};

const SlideImg = styled.div`
  background: ${({bg}) => `url(${bg})`} no-repeat;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position-x: 50%;
  background-position-y: 50%;
  border-left: 1px #fff solid;
  border-right: 1px #fff solid;

  @media (max-width: 1500px) {
    background-size: contain;

  }
`

const SliderStyle = styled.div`
  width: 100%;

  .text {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    width: 100%;

    a {
      padding: 10px 60px;
      font-size: 15px;
      font-weight: 600;
      transition: .2s;
      background: #fff;
      border-radius: 5px;
      color: ${baseTheme.colors.black};
      box-shadow: 0 1px 15px -3px rgba(0, 0, 0, 0.38);

      &:hover {
        background: ${baseTheme.colors.black};
        color: #fff;
      }

    }
  }

  .swiper {
    background: #fff;
    height: 70vh;
    display: flex;
    overflow: hidden;

    @media (max-width: 1900px) {
      height: 60vh;
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
      content: '';
      background: url('/img/small-arrow.svg');
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
      content: '';
      background: url('/img/small-arrow.svg');
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
`

export default Slider;