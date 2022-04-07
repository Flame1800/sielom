import React from 'react';
import styled from "styled-components";
import {baseTheme} from "../../../styles/theme";

const PlacesWorkBlock = ({is_business_speciality, work_places}) => {
    if (!work_places && !is_business_speciality) {
        return null
    }

    return (
        <Wrapper>
            <div className="head">
                <div className="title">
                    Где можно работать
                </div>
            </div>
            <div className="business-block">
                <img src="/img/Bag.svg" alt="сумка"/>
                <div className="caption">
                    С этой специальностю вы можете открыть собственный бизнес
                </div>
            </div>
            <div className="cards">
                {work_places.map(work => {
                    return (
                        <div className="card">
                            {/*<img src={process.env.API_URL + work.data.attributes.url} alt=""/>*/}
                            <div className="name">{work.name}</div>
                        </div>
                    )
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 200px;
  width: 1000px;

  .head .title {
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #5F5F5F;
  }

  .business-block {
    margin-top: 40px;
    width: 60%;
    background: #D3ECFF;
    border-radius: 21px;
    padding: 30px;

    .caption {
      margin-top: 30px;
      font-weight: 600;
      font-size: 25px;
      line-height: 34px;
      color: #23547A;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .card {
      padding: 30px;
      height: 55px;
      background: #3a3a3a;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;

      .name {
        font-weight: 400;
        font-size: 24px;
        line-height: 45px;
        letter-spacing: -1px;
        color: #ffffff;
      }
    }
  }
`

export default PlacesWorkBlock;