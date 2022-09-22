import styled from "styled-components";

export const Header = styled.div`
  margin-top: 60px;
  margin-bottom: 120px;

  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }

  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 39px;
    letter-spacing: -1.25px;
    color: #3e3e3e;
    margin-bottom: 40px;

    @media (max-width: 726px) {
      font-size: 20px;
    }
  }
`;

export const Content = styled.div`
  .title {
    font-size: 40px;
    font-weight: 600;
    margin-left: 20px;
  }

  .description {
    margin-top: 100px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    color: #494949;

    @media (max-width: 768px) {
      width: 100%;
      padding: 20px;
    }

    .title {
      font-size: 45px;
      font-weight: 500;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: 9em;
      }
    }

    .body {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 60px;
      margin-left: 30px;
    }
  }
`;
