import React from "react";
import { DefaultSection } from "/styles/homeStyle";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import SliderWrapper from "../../../UI/SliderWrapper";
import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]);

const CardsCarousel = ({ children, title, btnText }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <EventsAndNews>
      <DefaultSection>
        <div className="header">
          <div className="left-header">
            <h1 className="title">{title}</h1>
            <Link href="/news">
              <a>
                <div className="btn-more">
                  {btnText ? btnText : "Узнать больше"}
                </div>
              </a>
            </Link>
          </div>
          <div className="arrows">
            <img
              alt="prev"
              src="/img/small-arrow.svg"
              className="arrow prev"
              ref={navigationPrevRef}
            />
            <img
              alt="prev"
              src="/img/small-arrow.svg"
              className="arrow next"
              ref={navigationNextRef}
            />
          </div>
        </div>
        <div className="cards">
          <SliderWrapper
            refNext={navigationNextRef}
            refPrev={navigationPrevRef}
          >
            {children}
          </SliderWrapper>
        </div>
      </DefaultSection>
    </EventsAndNews>
  );
};

const EventsAndNews = styled.div`
  margin-bottom: 80px;

  .header {
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
      align-items: center;

      .left-header {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;

        .title {
          margin: 0 auto;
        }
      }
    }

    .left-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    .title {
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.5px;
      color: #000;
      text-transform: uppercase;
      font-weight: 500;
      margin-right: 35px;
      margin-top: 20px;
    }

    .btn-more {
      margin-top: 20px;
      border: 2px solid #3e3e3e;
      box-sizing: border-box;
      border-radius: 13px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 11px;
      letter-spacing: -0.25px;
      color: #000;
      padding: 10px 15px;
      transition: 0.2s;

      &:hover {
        background: #3e3e3e;
        color: #fff;
      }
    }

    .arrows {
      display: flex;

      @media (max-width: 600px) {
        display: none;
      }

      .arrow {
        padding: 10px;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          opacity: 0.5;
        }
      }

      .prev {
        margin-right: 10px;
        transform: rotate(180deg);
      }
    }
  }

  .cards {
    margin-top: 40px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`;

export default CardsCarousel;
