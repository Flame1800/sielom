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
  white-space: nowrap;
  font-weight: 500;
  margin-bottom: 35px;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`


export const Specialties = styled.div`
  margin-top: 190px;
  min-height: 500px;
  margin-bottom: 250px;
  
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 60px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${baseTheme.colors.light};
  }
  
  .header-flex {
    align-items: center;
    display: flex;
    overflow-y: scroll;
    padding-bottom: 20px;
    
    .name {
      font-weight: 600;
      font-size: 14px;
      line-height: 11px;
      letter-spacing: 0.75px;
      color: #3E3E3E;
      margin-right: 10px;
      white-space: nowrap;
    }
  }
`

export const Infographics = styled.div`
  margin-bottom: 230px;
  

  .info-cards {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      justify-content: center;
    }

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
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
  
  a {
    margin: 50px;
  }
`


