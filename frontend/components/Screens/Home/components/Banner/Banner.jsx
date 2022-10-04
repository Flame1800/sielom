import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const Banner = () => {
  return (
    <HeroBlock>
      <Slider />
    </HeroBlock>
  );
};

const HeroBlock = styled.section`
  max-width: 1400px;
  margin-bottom: 90px;

  @media (max-width: 1500px) {
    max-width: 100vw;
  }
`;

export default Banner;
