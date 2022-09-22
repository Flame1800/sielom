import React from "react";
import styled from "styled-components";
import { SpecialityPageTitle } from "../Specialties.style";

const Diploma = () => {
  return (
    <Wrapper>
      <div className="content">
        <div>
          <SpecialityPageTitle>
            Станьте дипломированным специалистом
          </SpecialityPageTitle>
          <div className="sub-title">
            По окончанию обучения вы получите диплом государственного образца
          </div>
        </div>
        <img src="/img/diploma.png" alt="diploma" className="diploma" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #e0f8ff;
  border-radius: 30px;
  margin-bottom: 100px;
  margin-top: 50px;
  padding: 120px 20px 170px 20px;
  box-shadow: 0px -5px 16px rgba(166, 154, 129, 0.27);

  .sub-title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      padding: 20px 0;
    }
  }

  .content {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .sub-title {
      margin-top: -30px;
      max-width: 370px;
    }
  }
`;

export default Diploma;
