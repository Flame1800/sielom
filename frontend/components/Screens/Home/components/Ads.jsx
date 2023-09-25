import React from 'react';
import CardsCarousel from "./CardsCarousel";
import {SwiperSlide} from "swiper/react";
import AdsCard from "../../../Card/AdsCard";
import Link from "next/link";
import styled from "styled-components";

const Ads = ({ads}) => {
    console.log(ads)
    if (ads.length < 4) {
        return  <ListWrapper>
            <div className="header">
                    <h1 className="title">Объявления</h1>
                    <Link href="/ads">
                        <a>
                            <div className="btn-more">
                                Все записи
                            </div>
                        </a>
                    </Link>
            </div>
            <div className="items">
                {ads.map((post) => {
                    return <AdsCard post={post} />
                })}
            </div>
        </ListWrapper>
    }

    return (
        <>
            {ads.length > 0 && (
                <CardsCarousel title="Объявления" btnText="Все записи">
                    {ads.map((post, i) => {
                        if (i < 16) {
                            return (
                                <SwiperSlide key={post.id}>
                                    <AdsCard post={post} />
                                </SwiperSlide>
                            );
                        }
                    })}
                </CardsCarousel>
            )}
        </>
    );
};

const ListWrapper = styled.div`
  .items {
    display: flex;
    flex-wrap: wrap;
  }
  
  .header {
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    

    
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
  }
`

export default Ads;