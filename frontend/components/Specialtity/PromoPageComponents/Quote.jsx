import React from 'react';
import styled from "styled-components";
import {baseTheme} from "../../../styles/theme"

const Quote = ({quote}) => {

    if (!quote?.text) {
        return null
    }

    return (
        <Wrapper>
            <div className="line" />
                <div className="text">
                    {quote.text}
                </div>
                <div className="author">
                    {quote.author}
                </div>
            <div className="line" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  max-width: 667px;
  font-style: italic;

  .line {
    width: 100%;
    height: 1px;
    background: ${baseTheme.colors.gold};
    box-shadow: 0 0 11px #FAC145;
    position: relative;
  }

  .line:nth-child(1)::after {
    content: "’’";
    position: absolute;
    left: 50px;
    top: -8px;
    font-size: 64px;
    color: #E9E9E9;
    font-style: normal;
    font-weight: 800;
    line-height: 50px;
    width: 20px;
    height: 20px;
    z-index: -1;
    transform: rotate(180deg);
  }
  
  .line:nth-child(2n)::after {
    content: "’’";
    position: absolute;
    right: 50px;
    top: -8px;
    font-size: 64px;
    color: #E9E9E9;
    font-style: normal;
    font-weight: 800;
    line-height: 50px;
    width: 20px;
    height: 20px;
    z-index: -1;
  }
  
  .text {
    margin-top: 45px;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: -0.25px;
    color: #000000;
  }
  
  .author {
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: -0.25px;
    color: #000000;
    text-align: right;
    margin-bottom: 45px;
    margin-top: 30px;
  }
`

export default Quote;