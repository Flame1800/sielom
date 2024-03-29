import React from "react";
import styled from "styled-components";
import Button from "../../../UI/Button";

const PromoBlock = ({ speciality }) => {
  if (!speciality.full_cost) {
    return null;
  }

  return (
    <Wrapper>
      <div className="content">
        <div className="text">
          <div className="title">Подайте заявку на обучение</div>
          <div className="sub-title">
            Действует программа подачи заявки онлайн
          </div>
        </div>
        <div className="promo">
          <div className="price">
            {speciality.year_cost && (
              <>
                <div className="caption">Стоимость обучения</div>
                <div className="value">
                  {speciality.year_cost}
                  <span>/год</span>
                </div>
              </>
            )}
            <Button>Подать документы</Button>
          </div>
          <div className="params">
            {speciality.full_cost && (
              <div className="item">
                <div className="caption">Полная стоимость</div>
                <div className="value">
                  <strong>{speciality.full_cost}</strong>
                </div>
              </div>
            )}
            {speciality.places && speciality.budget_places && (
              <div className="item">
                <div className="caption">Места</div>
                <div className="value">
                  <strong>{speciality.places}</strong> Мест всего
                </div>
                <div className="value">
                  <strong>{speciality.budget_places}</strong> Бюджетных
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #fff0d0;
  box-shadow: 0px -5px 16px rgba(166, 154, 129, 0.27);
  border-radius: 30px;
  padding: 90px 20px 70px 20px;
  margin-top: -50px;
  margin-bottom: 160px;

  .content {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .text {
      width: 45%;
      margin-right: 20px;

      @media (max-width: 500px) {
        width: auto;
      }

      .title {
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        color: #3e3e3e;
        width: 90%;
      }

      .sub-title {
        margin-top: 15px;
        max-width: 370px;
        font-size: 24px;
        margin-bottom: 30px;
      }
    }

    .promo {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .price {
        .caption {
          font-weight: 400;
          font-size: 18px;
          line-height: 36px;
          letter-spacing: -0.5px;
          color: #5f5f5f;
          margin-bottom: 10px;
        }

        .value {
          font-weight: 600;
          font-size: 36px;
          line-height: 36px;
          letter-spacing: -0.5px;
          text-transform: uppercase;
          color: #3e3e3e;
          margin-bottom: 40px;

          span {
            font-weight: 400;
            font-size: 18px;
            line-height: 36px;
            letter-spacing: -0.5px;
            color: #3e3e3e;
          }
        }
      }

      .params {
        display: flex;
        flex-direction: column;

        .item {
          margin-bottom: 20px;

          .caption {
            font-weight: 500;
            font-size: 16px;
            line-height: 36px;
            letter-spacing: -0.5px;
            color: #848484;
          }

          .value {
            font-weight: 400;
            font-size: 18px;
            line-height: 36px;
            letter-spacing: -0.5px;
            color: #3e3e3e;
          }
        }
      }
    }
  }
`;

export default PromoBlock;
