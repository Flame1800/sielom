import React from 'react';
import styled from "styled-components";
import {API} from "../../../libs/API";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
                    modules={[Pagination, Navigation]}
                    loop={true}
                    autoplay={{delay: 10000}}
                >
                    {slides.map(slide =>
                        <SwiperSlide key={slide.id}>
                            <img src={`${process.env.API_URL}${slide.attributes.cover.data.attributes.url}`} alt="img"/>
                            <div className="text">{slide.attributes.name}</div>
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
    position: absolute;
    bottom: 45px;
    right: 14%;
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
    }

    .swiper-button-next {
      color: #fff !important;
      width: 70px;
      left: 90px;
      height: 80%;
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
      height: 80%;
      left: 30px;
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