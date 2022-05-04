import React from 'react';
import styled from "styled-components";
import Slider from "./Slider";
import Link from "next/link";

const Banner = () => {



    return (
            <HeroBlock>
                <div className="content">
                    <div className="first-content">
                        <div className="up-cont">
                            <div className="logo-name">SIELOM</div>
                            <div className="quote">
                                <img src="/img/portrait.png" alt="Портрет" className='portrait'/>
                                <div className="text">
                                    Вечным законом да будет: учить и учиться всему через примеры, наставления и применение на деле
                                </div>
                                <div className="author">
                                    Галина Васильевна Патракова. Директор АНПОО «СИЭУиП»
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <Link href='/specialties'>
                                <a className="btn">Специальности</a>
                            </Link>
                            <Link href='/site/courses'>
                                <a className="btn white">Курсы</a>
                            </Link>
                        </div>
                    </div>
                    <Slider/>
                </div>
            </HeroBlock>
    );
};


const HeroBlock = styled.section`

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  min-height: 70vh;
  max-width: 100%;
  width: 100%;

  .content {
    max-width: 1320px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 95px;
    margin: 0 auto;
    padding-bottom: 60px;
  }

  .first-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    min-height: 500px;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 40px;
    }

    .logo-name {
      font-weight: 800;
      font-size: 96px;
      line-height: 83px;
      color: rgba(255, 255, 255, 0.1);
      opacity: 0.99;
      margin-bottom: 60px;

      @media (max-width: 1250px) {
        margin-top: -40px;
        font-size: 4em;
        color: #fff;
        text-align: center;
      }
    }

    .quote {
      display: flex;
      flex-wrap: wrap;
      position: relative;

      @media (max-width: 1250px) {
        justify-content: center;
        text-align: center;
        margin-bottom: 50px;
      }

      .portrait {
        border-radius: 50%;
        border: 3px solid #FFFFFF;
      }

      .text {
        font-style: italic;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
        margin-top: 15px;
        margin-left: 15px;
        width: 440px;
      }

      .author {
        position: absolute;
        bottom: -40px;
        max-width: 300px;
        right: 20%;
        font-style: italic;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
        background: rgba(255, 255, 255, 0.18);
        border-radius: 35px;
        padding: 8px 30px;


        @media (max-width: 1250px) {
          bottom: -100px;
          margin: 0 auto;
          left: 0;
          right: 0;
        }
      }
    }
    
    .buttons {
      display: flex;
      flex-wrap: wrap;
      margin-top: 100px;
      
      .btn {
        min-width: 230px;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        padding: 20px 50px;
        background: #000;
        border-radius: 10px;
        cursor: pointer;
        text-align: center;
        margin: 10px;
        
        &.white {
          background: #fff;
          color: #000;
        }
        
        @media (max-width: 1250px) {
          font-size: 14px;
          padding: 15px 30px;
          min-width: 200px;
          margin: 10px auto;
        }
      }
      
    }
  }



`;

export default Banner;