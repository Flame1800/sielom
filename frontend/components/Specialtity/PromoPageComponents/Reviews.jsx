import React from 'react';
import styled from "styled-components";
import {baseTheme} from "../../../styles/theme";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const ReviewsBlock = ({reviews}) => {

    if (reviews.length === 0) return null

    return (
        <Wrapper>
            <div className="head">
                <div className="title">
                    Отзывы наших <span>студентов</span>
                </div>
            </div>
            <div className="cards">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {reviews.map(item => {
                        return (
                            <SwiperSlide>
                                <div className="card">
                                    {/*<img src={process.env.API_URL + work.data.attributes.url} alt=""/>*/}
                                    <div className="name">{item.name}</div>
                                    <div className="spec">{item.speciality}</div>
                                    <div className='text' dangerouslySetInnerHTML={{ __html: item.review}} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 60px;
  width: 1000px;
  
  .swiper-pagination-bullet {
    background: #000 !important;  
  }
  
  .head .title {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -1px;
    color: #3E3E3E;
    
    span {
      color: ${baseTheme.colors.gold};
    }
  }
  
  .cards {
    margin-top: 55px;
    width: 1000px;
    overflow: hidden;
    
    .card {
      height: 400px;
      background: #F1F1F1;
      border-radius: 26px;
      
      img {
        border-radius: 20px 20px 0 0;
        height: 250px;
        object-fit: cover;
      }
      
      .name {
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        color: #3E3E3E;
        padding-top: 15px;
        margin: 0 20px;
      }
      
      .spec {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        margin: 0 20px;
        color: #3E3E3E;
      }


      .text {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin: 10px 20px;
      }
    }
  }
`

export default ReviewsBlock;