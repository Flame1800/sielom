import React from "react";
import styled from "styled-components";
import { baseTheme } from "../../../../styles/theme";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const WorksBlock = ({ works }) => {
  if (works.length === 0) return null;

  return (
    <Wrapper>
      <div className="head">
        <div className="title">
          Кем вы сможете <span>работать</span>
        </div>
      </div>
      <div className="cards">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 2,
            },
          }}
        >
          {works.map((work) => {
            return (
              <SwiperSlide>
                <div className="card">
                  {/*<img src={process.env.API_URL + work.data.attributes.url} alt=""/>*/}
                  <div className="name">{work.name}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 200px;
  max-width: 1000px;
  width: 100%;

  .swiper-pagination-bullet {
    background: #000 !important;
  }

  .head .title {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -1px;
    color: #3e3e3e;

    span {
      color: ${baseTheme.colors.gold};
    }
  }

  .cards {
    margin-top: 55px;
    overflow: hidden;

    .card {
      max-width: 320px;
      margin: 30px auto;
      height: 351px;
      background: #f1f1f1;
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
        color: #3e3e3e;
        margin: 30px;
      }
    }
  }
`;

export default WorksBlock;
