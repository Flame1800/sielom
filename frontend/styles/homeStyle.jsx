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


export const EventsAndNews = styled.div`
  margin-top: 90px;

  .header {
    height: 150px;
  }
  
  .cards {
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }
`

export const Specialties = styled.div`
  margin-top: 190px;
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
  margin-bottom: 230px;
  
  .info-items {

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
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    .no-card {
      border: none !important;
    }

    .card {
      padding: 35px 10px;
      width: 200px;
      display: flex;
      margin-left: -1px;
      margin-top: -1px;
      justify-content: center;
      flex-direction: column;

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


