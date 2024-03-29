import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import navigationStore from "../../stores/navigationStore";
import EyeButton from "./EyeButton";

const MetaHeaderInfo = () => {
  return (
    <Wrapper>
        <a className="phone" href="tel:+7 (3462) 55-09-18">
          <img src="/img/phone-icon.svg" alt="icon" />
          +7 (3462) 55-09-18
        </a>
        <div className="social">
          <a target="_blank" href="https://vk.com/sielom">
            <img src="/img/vk.svg" alt="icon" />
          </a>
          <a target="_blank" href="https://www.youtube.com/c/АНПООСИЭУиП">
            <img src="/img/youtube.svg" alt="icon" />
          </a>
          <a target="_blank" href="mailto:sielom@yandex.ru">
            <img src="/img/mail-icon.svg" alt="icon" />
          </a>
        </div>
        <EyeButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .user-button {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #c2c2c2;
    display: flex;
    justify-content: center;
    align-items: center;
  }



    .social {
      display: flex;
      align-items: center;
      height: 20px;

      a {
        display: flex;
      }

      img {
        margin-left: 10px;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    .phone {
      img {
        margin-right: 5px;
        object-fit: contain;
        height: 18px;
        width: 18px;
      }

      margin-right: 37px;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      color: #5f5f5f;
    }
  
`;

export default MetaHeaderInfo;
