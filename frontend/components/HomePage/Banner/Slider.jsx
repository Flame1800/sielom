import React from 'react';
import styled from "styled-components";
import {API} from "../../../libs/API";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import {ButtonStyle} from "../../../styles/sharedStyle";


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
                    autoplay={{delay: 10000}}
                >
                    {slides.map(slide =>
                        <SwiperSlide key={slide.id}>
                            <SlideImg bg={`${process.env.API_URL}${slide.attributes.cover.data.attributes.url}`} alt="img"/>
                            {slide.attributes.link &&
                                        <div className="text">
                                            <Link href={slide.attributes.link}>
                                                <a>
                                                    <ButtonStyle>Подробнее</ButtonStyle>
                                                </a>
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
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;

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
    bottom: 20px;
    width: 100%;
  }

  .swiper {
    background: #fff;
    height: 70vh;
    display: flex;
    overflow: hidden;

    @media (max-width: 1900px) {
      height: 60vh;
    }

    @media (max-width: 1600px) {
      height: 50vh;
    }

    @media (max-width: 1000px) {
      height: 30vh;
    }
  }


  .swiper-button-next {
    color: #000 !important;
    background: #fff;
    padding: 40px 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.18);
  }

  .swiper-button-prev {
    color: #000 !important;
    background: #fff;
    padding: 40px 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.18);
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