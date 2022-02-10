import styled from "styled-components";
import {baseTheme} from "./theme";


export const DefaultSection = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`

export const Title = styled.div`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.5px;
  color: ${baseTheme.colors.black};
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 35px;
`

export const HeroBlock = styled.section`
  height: 60vh;
  max-width: 100%;
  margin: 0 auto;
  
  .slider {
    .swiper {
      max-width: 1620px;
      height: 60vh;
      display: flex;
      overflow: hidden;
    }

    .swiper-wrapper {
      display: flex;
    }

    .swiper-slide {
      position: relative;
      text-align: center;
      font-size: 18px;
      height: 60vh;
      width: 100%;
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .slide-content {
        display: flex;
        justify-content: center;
        align-items: center;

        .text {
          text-align: left;
          max-width: 330px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;

          .title {
            bottom: 55px;
            font-weight: 800;
            font-size: 36px;
            line-height: 44px;
            letter-spacing: -0.01em;
            color: #414141;
          }
          .sub-title {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: -0.01em;
            color: #414141;
            margin-top: 15px;
            margin-bottom: 35px;
          }
        }
        
        .img {
          margin-left: 70px;
        }
      }


      img {
        z-index: -1;
      }

      .button-left {
        background: url('/img/slider-left-arrow.png');
        width: 70px;
        height: 22px;
        cursor: pointer;
        margin-right: 15px;
      }
    }

    .swiper-button-next {
      color: #fff !important;
      right: 50px;
      bottom: 70px;
      width: 70px;
      height: 25px;
      margin-top: 0;
      transition: .2s;
      
      &:hover {
        opacity: 0.5;
      }

      &:after {
        content: "";
        width: 70px;
        height: 25px;
        background: url('/img/slider-right-arrow.svg') no-repeat;

      }
    }

    .swiper-button-prev {
      color: #fff !important;
      left: 50px;
      bottom: 70px;
      width: 70px;
      height: 25px;
      margin-top: 0;
      transition: .2s;
      
      &:hover {
        opacity: 0.5;
      }

      &:after {
        content: "";
        width: 70px;
        height: 25px;
        background: url('/img/slider-left-arrow.svg') no-repeat;
      }
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .video-and-news {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    height: 270px;
    max-width: 1320px;
    margin: 0 auto;
    
    .video {
      height: 238px;
      width: 330px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('/img/video-cover.png');
      
      .button {
        width: 150px;
        height: 150px;
        border: 3px solid #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        cursor: pointer;
        
        &:hover {
          background: #fff;
          
          .play {
            color: #000;
            
            img {
              filter: invert(100%);
            }
          }
        }
        
        .play {
          font-weight: 600;
          font-size: 18px;
          line-height: 36px;
          letter-spacing: 0.75px;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          margin-left: 10px;
          
          img {
            margin-bottom: 4px;
          }
        }
      }
    }
    
    .news {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      
      .item {
        width: 330px;
        height: 270px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 15px 30px 15px;
        border: 1px solid #fff;
        transition: .2s;
        &:hover {
          border: 1px solid ${baseTheme.colors.light};
        }
        
        .title {
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
          letter-spacing: 0.75px;
          color: #373737;
          width: 100%;
          border-bottom: 1px solid #B1B1B1;
          margin-bottom: 15px;
          padding-bottom: 12px;
        }
        
        .body {
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;
          color: #373737;
        }
      }
    }
  }
  
`;


export const EventsAndNews = styled.div`
  margin-top: 90px;

  .header {
    height: 150px;
  }
  
  .news {
    display: flex;
    justify-content: space-between;
  }
`

export const Specialties = styled.div`
  margin-top: 290px;
  min-height: 500px;
  margin-bottom: 250px;
  
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .header {
    display: flex;
    justify-content: space-between;
    height: 60px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${baseTheme.colors.light};
  }
  
  .flex {
    align-items: center;
    display: flex;
    padding-bottom: 20px;
    
    .name {
      font-weight: 600;
      font-size: 14px;
      line-height: 11px;
      letter-spacing: 0.75px;
      color: #3E3E3E;
      margin-right: 10px;
    }
  }
`

export const Infographics = styled.div`
  margin-bottom: 180px;
  
  .info-items {
    .item {
      margin-bottom: 63px;
    }

    .value {
      font-family: "PLaifair Display", sans-serif;
      font-weight: bold;
      font-size: 26px;
      line-height: 16px;
      letter-spacing: 1px;
      color: ${baseTheme.colors.gold};
    }

    .description {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 1px;
      color: #3E3E3E;
      margin-top: 14px;
      max-width: 180px;
    }
  }

  .info-cards {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .no-card {
      border: none !important;
    }

    .card {
      padding: 35px 50px;
      width: 300px;
      display: flex;
      margin-left: -1px;
      margin-top: -1px;
      justify-content: center;
      flex-direction: column;
      background: #FFDA8F;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 29px;

      &:nth-child(even) {
        background: #ffedc5;
      }

      .value {
        font-weight: bold;
        font-size: 64px;
        letter-spacing: -0.02em;
        color: #3E3E3E;
      }

      .description {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: -0.02em;
        color: #3E3E3E;
      }
    }
  }
`

export const Partners = styled.div`
  max-width: 1320px;
  margin: 150px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`


