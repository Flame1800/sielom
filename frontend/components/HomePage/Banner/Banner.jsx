import React from 'react';
import styled from "styled-components";
import Slider from "./Slider";
import Link from "next/link";

const Banner = () => {



    return (
            <HeroBlock>
                <div className="content">
                    <Slider/>
                </div>
            </HeroBlock>
    );
};


const HeroBlock = styled.section`

  .content {
    max-width: 1600px;
    margin: 0 auto;

    @media (max-width: 1500px) {
      max-width: 100vw;
    }
  }
`;

export default Banner;