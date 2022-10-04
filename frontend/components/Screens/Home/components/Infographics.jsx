import React from "react";
import {
  DefaultSection,
  InfographicsStyle,
} from "../../../../styles/homeStyle";

const Infographics = () => {
  return (
    <InfographicsStyle>
      <DefaultSection>
        <div className="content">
          <div className="info-cards">
            <div className="card">
              <div className="value">4194</div>
              <div className="description">Студентов</div>
            </div>
            <div className="card">
              <div className="value">725</div>
              <div className="description">Бюджетных мест</div>
            </div>
            <div className="card">
              <div className="value">21</div>
              <div className="description">Специальность</div>
            </div>
            <div className="card">
              <div className="value">5</div>
              <div className="description">Корпусов</div>
            </div>
          </div>
        </div>
      </DefaultSection>
    </InfographicsStyle>
  );
};

export default Infographics;
