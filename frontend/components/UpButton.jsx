import React from 'react';
import styled from "styled-components";

const UpButton = () => {
    const pageUpHandle = () => {
        if (window) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }

    return (
        <ButtonWrapper onClick={() => pageUpHandle()}>
            <img src="/img/up-arrow.svg" alt="up"/>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.div`
  background: #e5c176;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 50%;
  position: fixed;
  bottom: 60px;
  right: 60px;
  cursor: pointer;
  z-index: 8;
  box-shadow: 0 10px 38px 0 rgba(34, 36, 25, 0.2);

  @media (max-width: 768px) {
    width: 65px;
    height: 65px;
    bottom: 20px;
    left: 20px;
    box-shadow: 0 19px 38px 0 rgb(34 36 43 / 30%);
  }
`

export default UpButton;