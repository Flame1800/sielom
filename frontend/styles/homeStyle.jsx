import styled from "styled-components";
import {baseTheme} from "./theme";


export const DefaultSection = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 1320px;
  margin: 0 auto;
`

export const Title = styled.div`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.5px;
  color: ${baseTheme.colors.black};
  max-width: 340px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 35px;
`

export const WhiteTitle = styled(Title)`
  color: #fff;
`


export const SubTitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.5px;
  color: ${baseTheme.colors.gray};
  max-width: 310px;
  font-weight: 500;
`

export const Banner = styled.section`
  display: grid;
  grid-template-columns: 310px auto;
  height: 80vh;
  max-width: 1320px;
  margin: 0 auto;

  .content {
    display: flex;
  }

  .bg {
    position: absolute;
    background: url(/img/bg-main.png) no-repeat;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-size: cover;
    z-index: -1;
  }
`;

export const MainParagraph = styled.h1`

  display: flex;
  margin-bottom: 100px;
  flex-direction: column;
  margin-top: 90px;
  font-size: 130px;

  font-weight: 700;
  color: ${baseTheme.colors.black};

  .part-text {
    font-family: "Playfair Display";
    display: flex;
    position: relative;
    margin-top: -30px;
    letter-spacing: -0.05em;


    .stars {
      position: absolute;
      right: 20px;
      top: 0px;
    }
  }

  .swap-text {
    margin-left: -140px;

    &:before {
      margin-top: 30px;
      margin-left: -50px;
      content: '';
      width: 360px;
      height: 100px;
      border: 1px solid ${baseTheme.colors.black};
      border-radius: 180px/50px;
      transform: rotate(350deg);
      position: absolute;
    }
  }

  .swap-text-2 {
    margin-left: -60px;
  }

  .light-text {
    color: #eabc5d;
    font-family: "Playfair Display";
  }

  .banner-footer {
    display: grid;
    grid-template-columns: 50% 50%;

    .sub-title {
      font-weight: 300;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.01em;
      color: ${baseTheme.colors.black};
      margin-top: 40px;
      font-style: italic;
      margin-bottom: 30px;
    }
  }

  .video-wrapper {
    position: relative;
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;




    .video {
      background: url("/img/video-cover.png") no-repeat;
      width: 320px;
      height: 320px;
      overflow: hidden;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

  
      
      .cover {
        &:hover {
          .btn {
            background: #000;
          }
        }
        
        border-radius: 50%;
        position: absolute;
        width: 267px;
        height: 269px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .btn {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.89);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s;
          
          .icon {
            margin-left: 10px;
          }
        }
      }
    }

  }

`;

export const FastLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80px;
`

export const AbiturentInfo = styled.div`
   margin-top: 190px;
   
   .card {
      height: 700px;
      width: 100%;
      margin-top: -10px;
      border-radius: 15px;
     background: linear-gradient(213.22deg, #EABC5D 5.04%, #BA7979 97.02%);
      padding: 20px 20px 0 20px;
      margin-bottom: 35px;
      
      .card-title {
        font-size: 44px;
        line-height: 52px;
        color: #fff;
        font-weight: bold;
      }
      
      .card-subtitle {
        font-size: 18px;
        line-height: 27px;
        font-weight: 400;
        color: #fff;
        max-width: 520px;
        margin-top: 30px;
      }
      
      .students-img {
        padding-top: 6px;
      }
   }
  
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`

export const EventsAndNews = styled.div`
  margin-top: 290px;
  position: relative;

  .arrow-btn {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    align-items: center;

    img {
      margin-left: 10px;
    }

    &:hover {
      color: #c5c5c5;
    }
  }

  .header {
    position: sticky;
    top: 200px;
    height: 150px;
  }

  .black-block {
    position: absolute;
    left: 0;
    width: 50%;
    height: 1500px;
    z-index: -1;
    margin-top: -40px;
  }
`

export const Specialties = styled.div`
  margin-top: 290px;
  min-height: 500px;
  margin-bottom: 250px;


  .header {
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
  max-width: 1320px;
  margin: 0 auto;
  
  .title {
    left: 0;
    position: absolute;
    font-weight: 600;
    font-size: 144px;
    line-height: 96px;
    letter-spacing: -1.25px;
    text-transform: uppercase;
    padding: 50px 0;
    color: #fff;
    -webkit-text-stroke: 1px ${baseTheme.colors.black};
    border-top: 1px solid rgba(0, 0, 0, 0.51);
    border-bottom: 1px solid rgba(0, 0, 0, 0.51);
    user-select: none;
  }
  
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 25% 25% 50%;
  }
  
  .info-items {
    .item {
      margin-bottom: 63px;
    }
    
    .value {
      font-family: "PLaifair Display";
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
    display: flex;
    flex-wrap: wrap;
    margin-top: -10px;
    
    .no-card {
      border: none !important;
    }
    
    .card {
      width: 300px;
      height: 208px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid ${baseTheme.colors.light};
      margin: 10px;
      
      .value {
        font-family: "PLaifair Display";
        font-weight: bold;
        font-size: 96px;
        line-height: 96px;
        letter-spacing: -0.02em;
        color: #3E3E3E;
      }
      
      .description {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: -0.02em;
        color: #3E3E3E;
        margin-top: 16px;
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


