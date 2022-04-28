import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import React from "react";

const LongLink = ({children, answer}) => {

    return (
        <Wrapper active={answer}>
            <div className='head'>
                <div className="item">{children}</div>
                <img src="/img/link-arrow.svg" alt="arrow-icon" className="icon"/>
            </div>
            {answer &&
            <div className="answer">
                {answer}
            </div>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  border-bottom: 1px solid ${baseTheme.colors.light};
  margin-bottom: 20px;
  padding-bottom: 12px;

  .head {
    position: relative;
    display: flex;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: -0.01em;
    width: 100%;
    transition:  0.2s;
    cursor: pointer;
  }
  
  .icon {
    position: absolute;
    top: -10px;
    right: -10px;
    transition:  0.2s;
    transform: rotate(${({active}) => active ? "45deg" : "0"});
  }

  &:hover .head {
    color: ${baseTheme.colors.gold};

    .icon {
      transform: rotate(45deg);
    }
  }

  .answer {
    line-height: 30px;
    margin-bottom: 20px;
  }
`

export default LongLink