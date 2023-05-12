import React from "react";
import styled from "styled-components";

const Mission = () => {
  return (
    <Wrapper>
      <h1 className="mission-title">МИССИЯ СИЭУиП</h1>
      <div className="sub-title">
        Готовить <b>профессионалов</b> для рынка <br /> способных в условиях
        конкуренции
      </div>
      <div className="cards">
        <div className="card card-1">
          <div className="check">
            <img src="/img/green-check.svg" alt="check-icon" />
          </div>
          <div className="text">
            Адаптировать и внедрять основные и новые виды деятельности по своей
            квалификации
          </div>
        </div>
        <div className="card">
          <div className="check">
            <img src="/img/green-check.svg" alt="check-icon" />
          </div>
          <div className="text">
            Преобразовывать <br /> социальную среду
          </div>
        </div>
        <div className="card card-3">
          <div className="check">
            <img src="/img/green-check.svg" alt="check-icon" />
          </div>
          <div className="text">
            Владеть информационными технологиями, развивающими цифровую
            экономику
          </div>
        </div>
      </div>
      <img
        src="/img/students-mission.png"
        className="img-students"
        alt="students"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 90px auto 140px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .mission-title {
    font-weight: 700;
    font-size: 4em;
    line-height: 102px;
    text-align: center;
    color: #383838;
    margin-bottom: 20px;
  }

  .sub-title {
    font-weight: 500;
    font-size: 1em;
    line-height: 30px;
    text-align: center;
    color: #3e3e3e;
    max-width: 660px;

    b {
      color: #3b2f26;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 60px;
    margin-bottom: -50px;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }

    @media (min-width: 1200px) {
      .card-3 {
        position: relative;
        bottom: -50px;
      }

      .card-1 {
        position: relative;
        bottom: -100px;
      }
    }

    .card {
      width: 285px;
      height: 213px;
      background: #ffffff;
      border: 2px solid #6b6b6b;
      border-radius: 24px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-left: 20px;
      margin-right: 20px;
      padding: 30px 10px;
      margin-top: 30px;

      .check {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background: #76dd6d;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .text {
        text-align: center;
        margin-top: 15px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.05em;
      }
    }
  }

  .img-students {
    position: relative;
    z-index: 2;
    object-fit: contain;
    width: 90%;
  }

  @media (max-width: 500px) {
    .title {
      font-size: 35px;
      line-height: 52px;
      margin: 0 10px;
    }

    .sub-title {
      font-size: 16px;
      line-height: 20px;
    }

    .cards {
      margin-top: 10px;
      justify-content: center !important;
    }
  }
`;

export default Mission;
