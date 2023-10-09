import React from "react";
import Layout from "../../components/Layouts/Layout";
import Head from "next/head";
import styled from "styled-components";
import { AppBtn } from "../../components/Screens/Schedule/Schedule.style";
import MainHeader from "../../components/UI/MainHeader";

const SchedulePage = () => {

  return (
    <Layout>
      <Head>
        <title>Личный кабинет - СИЭУиП</title>
      </Head>
      <Header>
        <MainHeader>Личный кабинет</MainHeader>
        <AppBtn target="_blank" href='https://learn.sielom.ru'>Личный кабинет преподавателя и студента</AppBtn>
        <BotLink target="_blank" href='https://t.me/sielom_helper_bot'>Электронный журнал</BotLink>
      </Header>
    </Layout>
  );
}

export const BotLink = styled.a`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  padding: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  background: #229ED9;

  &:hover {
    background: #116289;
  }

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`


const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: baseline;

  a {
    margin: 10px 0;
  }
  
  @media (max-width: 600px) {
    justify-content: center;
  }
`

export default SchedulePage;
