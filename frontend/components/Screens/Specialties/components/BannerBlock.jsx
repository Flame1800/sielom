import React from 'react';
import styled from "styled-components";

const BannerBlock = ({ banner_text }) => {
    if (!banner_text) return  null

    return (
        <Wrapper>
            <div className="text">
                {banner_text}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 200px;
  width: 1110px;
  display: flex;
  justify-content: center;
  min-height: 360px;
  background: linear-gradient(180deg, #FFA928 0.01%, #FFFFFF 100%);
  border-radius: 45px;
  
  .text {
    margin-top: 60px;
    width: 1000px;
    color: #3E3E3E;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
  }
`

export default BannerBlock;