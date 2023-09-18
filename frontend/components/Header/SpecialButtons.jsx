import React from "react";
import styled from "styled-components";
import Link from "next/link";
import "@n3/react-vision-panel/dist/vision-panel.css";
import { SettingsModal } from "@n3/react-vision-panel";
import EyeButton from "./EyeButton";

const SpecialButtons = () => {
  return (
    <Links>
      <Link href="/payment">
        <PayButton href='/payment'>Онлайн оплата</PayButton>
      </Link>
      <Link href="/schedule">
        <SheduleBtn href='/schedule'>Расписание</SheduleBtn>
      </Link>
    </Links>
  );
};

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`

const PayButton = styled.a`
  color: var(--Blue, #2E2A5D);
  font-feature-settings: 'clig' off, 'liga' off;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.75px;
  font-size: 13px;
  display: flex;
  align-items: center;

  @media (max-width: 1350px) {
    margin: 0 auto;
    width: 100%;
    font-size: 15px;
    border: 2px solid #2E2A5D;
    padding: 10px 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }

  &:hover {
    color: #908dcd;
  }
`;

const SheduleBtn = styled.a`
  color: #D69000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.75px;
  display: flex;
  align-items: center;

  @media (max-width: 1350px) {
    width: 100%;
    margin: 0 auto;
    font-size: 15px;
    text-align: center;
    border: 2px solid #D69000;
    padding: 10px 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }

  &:hover {
    color: #9b6900;
  }
`;

export default SpecialButtons;
