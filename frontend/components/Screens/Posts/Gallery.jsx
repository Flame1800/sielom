import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Import Swiper styles
import '@splidejs/react-splide/css';
import styled from "styled-components";


const Gallery = ({images}) => {
    if (!images) {
        return null
    }

    return (
        <Wrapper>
            <Slider>
                {images.map(image => {
                   return (<SplideSlide>
                           <img
                               src={`${process.env.API_URL}${image.attributes.url}`}
                               alt={image.attributes.alternativeText}
                           />
                    </SplideSlide>)
                })}
            </Slider>
        </Wrapper>
    );
};

const Slider = styled(Splide)`
  max-width: 800px;
  height: 600px;

  img {
    width: 100%;
    height: 600px;
    object-fit: contain;
    background: #000;
  }
`

const Wrapper = styled.div`
  height: 600px;
  margin-bottom: 60px;
  max-width: 800px;


  .swiper {
    max-width: 800px;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #a4a4a485;
  }

  .swiper-button-next, .swiper-button-prev {
    color: white;
  }

  .swiper-pagination-bullet-active {
    background: white;
  }
`

export default Gallery;