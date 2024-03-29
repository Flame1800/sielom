import styled from "styled-components";
import { baseTheme } from "./theme";

export const DefaultSection = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const Title = styled.h1`
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
    text-align: center;
    width: 100%;
  }
`;

export const InfographicsStyle = styled.div`
  margin-bottom: 100px;

  .info-cards {
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
        color: #3e3e3e;
      }

      .description {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: -0.02em;
        color: #3e3e3e;
      }
    }

    @media (max-width: 768px) {
      justify-content: center;

      .info-cards {
        margin-top: 0;
      }

      .card {
        padding: 20px 10px;

        .value {
          font-size: 32px;
        }
      }
    }
  }
`;

export const PartnersStyle = styled.div`
  max-width: 1320px;
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
`;
