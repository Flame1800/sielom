import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";

export const Wrapper = styled.div`
  .schedule-data {
    p {
      font-size: 13px;
      color: #858585;
      font-weight: 600;
    }

    margin-top: 100px;

    .title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    .schedule-columns {
      display: flex;
      flex-wrap: wrap;
    }

    .column {
      width: 100%;
      max-width: 250px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 20px;
      padding: 25px;
      border-radius: 15px;
      border: 1px solid ${baseTheme.colors.black};

      .coll-name {
        font-weight: 600;
        font-size: 17px;
        line-height: 22px;
      }

      .coll-caption {
        font-size: 17px;
        line-height: 22px;
        color: #7b7b7b;
      }
    }
  }

  @media (max-width: 600px) {
    .title {
      text-align: center;
    }

    .schedule-columns {
      justify-content: center;
    }
  }
`;
