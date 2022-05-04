import React from 'react';
import styled from "styled-components";
import {API} from "../../../libs/API";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Slider = () => {
    const [slides, setSlides] = React.useState([])

    React.useEffect(async () => {
        const slidesRequest = await API.getSlides()
        setSlides(slidesRequest.data.data)
    }, [])

    return (
            <SliderStyle>
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    effect={"fade"}
                    navigation={true}
                    modules={[Pagination, Navigation, EffectFade]}
                    loop={true}
                    autoplay={{delay: 10000}}
                >
                    {slides.map(slide =>
                        <SwiperSlide key={slide.id}>
                            <img src={`${process.env.API_URL}${slide.attributes.cover.data.attributes.url}`} alt="img"/>
                            {slide.attributes.link
                                ?  (
                                    <Link href={slide.attributes.link}>
                                        <a className="text">
                                            {slide.attributes.name}
                                        </a>
                                    </Link>
                                )
                                : <div className='text'>{slide.attributes.name}</div>
                            }
                        </SwiperSlide>
                    )}
                </Swiper>
            </SliderStyle>
    );
};

const SliderStyle = styled.div`
    max-width: 660px;
    width: 100%;
  
  
  .text {
    display: flex;
    justify-content: start;
    bottom: 45px;
    margin-left: 210px;
    margin-top: 55px;
    background: #fff;
    
    @media (max-width: 425px) {
      margin-left: 130px;
    }
  }

    .swiper {
      background: #fff;
      height: 50vh;
      display: flex;
      overflow: hidden;
    }

    .swiper-wrapper {
      display: flex;
    }

    .swiper-slide {
      padding: 25px;
    }
  
    .swiper-pagination {
      width: fit-content;
      position: absolute;
      left: 25%;
      bottom: 8%;
      font-size: 22px;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .swiper-button-next {
      color: #fff !important;
      width: 70px;
      left: 90px;
      bottom: 35px !important;
      top: 86%;
      margin-top: 0;
      transition: .2s;

      &:hover {
        opacity: 0.5;
      }

      &:after {
        content: "";
        width: 37px;
        height: 37px;
        background: url('/img/small-arrow.svg') no-repeat;
        background-size: cover;

      }
    }

    .swiper-button-prev {
      color: #fff !important;
      width: 70px;
      left: 30px;
      top: 86%;
      margin-top: 0;
      transition: .2s;

      &:hover {
        opacity: 0.5;
      }

      &:after {
        content: "";
        width: 37px;
        height: 37px;
        transform: rotate(180deg);
        background: url('/img/small-arrow.svg') no-repeat;
      }
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      object-fit: cover;
      height: 80%;
    }
`

export default Slider;