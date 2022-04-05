import React from 'react';
import styled from "styled-components";
import {baseTheme} from "../../../styles/theme";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const WorksBlock = ({works}) => {

    if (works.length === 0) return null

    console.log(works)
    return (
        <Wrapper>
            <div className="head">
                <div className="title">
                    Кем вы сможете <span>работать</span>
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
                {works.map(work => {
                    return (
                        <SwiperSlide>
                            <div className="card">
                                {/*<img src={process.env.API_URL + work.data.attributes.url} alt=""/>*/}
                                <div className="name">{work.name}</div>
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
  margin-top: 130px;
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
      height: 351px;
      background: #F1F1F1;
      border-radius: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      
      img {
        border-radius: 20px 20px 0 0;
        height: 250px;
        object-fit: cover;
      }
      
      .name {
        font-weight: 600;
        font-size: 28px;
        text-align: center;
        line-height: 38px;
        color: #3E3E3E;
        margin: 30px;
      }
    }
  }
`

export default WorksBlock;