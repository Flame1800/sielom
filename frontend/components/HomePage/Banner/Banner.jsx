import React from 'react';
import styled from "styled-components";
import Slider from "./Slider";
import Button from "../../Shared/Button";

const Banner = () => {



    return (
            <HeroBlock>
                <div className="content">
                    <div className="first-content">
                        <div className="logo-name">SIELOM</div>
                        <div className="quote">
                            <img src="/img/portrait.png" alt="Портрет" className='portrait'/>
                            <div className="text">
                                Вечным законом да будет: учить и учится всему через примеры, наставления и применение на деле
                            </div>
                            <div className="author">
                                Галина Патракова
                            </div>
                        </div>
                        <div className="buttons">
                            <a className="btn">Специальности</a>
                            <a className="btn white">Курсы</a>
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

  height: 70vh;
  max-width: 100%;
  width: 100%;

  .content {
    width: 1320px;
    display: flex;
    padding-top: 95px;
    margin: 0 auto;
  }

  .first-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;

    .logo-name {
      font-weight: 800;
      font-size: 96px;
      line-height: 83px;
      color: rgba(255, 255, 255, 0.1);
      opacity: 0.99;
      margin-bottom: 60px;
    }

    .quote {
      display: flex;
      position: relative;

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
        bottom: -10px;
        right: 20%;
        font-style: italic;
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;
        background: rgba(255, 255, 255, 0.18);
        border-radius: 35px;
        padding: 8px 30px;
      }
    }
    
    .buttons {
      position: absolute;
      bottom: 0;
      display: flex;
      
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
        
        &.white {
          background: #fff;
          color: #000;
          margin-left: 20px;
        }
      }
      
    }
  }



`;

export default Banner;