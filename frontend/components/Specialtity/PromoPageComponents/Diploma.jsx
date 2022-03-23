import React from 'react';
import styled from "styled-components";
import {SpecialityPageTitle} from "../speciality-page-style";

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
                <img src="/img/diploma.png" alt="diploma" className="diploma"/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  background: #F0FDFF;
  box-shadow: 0px -5px 18px rgba(158, 186, 190, 0.33);
  border-radius: 30px;
  padding-top: 90px;
  padding-bottom: 170px;
  margin-top: -50px;

  .content {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    .sub-title {
      margin-top: -30px;
      max-width: 370px;
    }
  }
`

export default Diploma;