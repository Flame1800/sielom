import React from "react";
import {
  DefaultSection,
  InfographicsStyle,
} from "../../../../styles/homeStyle";

const Infographics = ({ statistics }) => {
  return (
    <InfographicsStyle>
      <DefaultSection>
        <div className="content">
          <div className="info-cards">
            {statistics.attributes.info.map((item) => {
              return (
                <div className="card">
                  <div className="value">{item.number}</div>
                  <div className="description">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </DefaultSection>
    </InfographicsStyle>
  );
};

export default Infographics;
