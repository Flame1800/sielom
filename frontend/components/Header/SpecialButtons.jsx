import React from "react";
import styled from "styled-components";
import Link from "next/link";
import "@n3/react-vision-panel/dist/vision-panel.css";
import { SettingsModal } from "@n3/react-vision-panel";
import EyeButton from "./EyeButton";

const SpecialButtons = () => {
  return (
    <>
      <Link href="/payment">
        <PayButton> Онлайн оплата</PayButton>
      </Link>
      <Link href="/schedule">
        <SheduleBtn>Расписание</SheduleBtn>
      </Link>
      <EyeButton />
    </>
  );
};

const PayButton = styled.a`
  position: relative;
  margin-left: 30px;
  border: 2px solid #2e2a5d;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  line-height: 10px;
  color: #2e2a5d;
  padding: 9px 18px;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  @media (max-width: 1350px) {
    right: 0;
    width: 300px;
    height: 40px;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
  }

  &:hover {
    background: #2e2a5d;
    color: #fff;
  }
`;

const SheduleBtn = styled.a`
  position: relative;
  margin-left: 10px;
  border: 2px solid #eabc5d;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  line-height: 10px;
  color: #543b09;
  padding: 5px 15px;
  width: 150px;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1350px) {
    right: 0;
    width: 300px;
    height: 40px;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
  }

  &:hover {
    background: #eabc5d;
    color: #000000;
  }
`;

export default SpecialButtons;
