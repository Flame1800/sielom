import React from "react";
import Layout from "../../components/Layouts/Layout";
import Head from "next/head";
import styled from "styled-components";
import { AppBtn } from "../../components/Screens/Schedule/Schedule.style";
import MainHeader from "../../components/UI/MainHeader";
import Image from "next/image";

const SchedulePage = () => {

  return (
    <Layout>
      <Head>
        <title>Личный кабинет - СИЭУиП</title>
      </Head>
      <Content>
        <MainHeader>Личный кабинет</MainHeader>
        <AppBtn target="_blank" href='https://learn.sielom.ru'>Личный кабинет преподавателя и студента</AppBtn>
          <BotBlock>
              <BotLink target="_blank" href='https://t.me/sielom_helper_bot'>Электронный журнал</BotLink>
              <Image src="/img/qr-link-bot.svg" width={205} height={205} />
          </BotBlock>
      </Content>
    </Layout>
  );
}

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 200px;
  a {
    width: fit-content;
  }

  @media (max-width: 600px) {
    margin-top: 20px;
    
    a {
      font-size: 14px;
    }
  }
`

const BotBlock = styled.div`
  max-width: 320px;
  height: 370px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 18px;
  border: 3px solid #229ED9;
  margin-top: 30px;
`

export const BotLink = styled.a`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: #039BE4;
  font-weight: 500;
  font-size: 18px;
  padding: 0 20px;
  cursor: pointer;
  transition: 0.2s;
  background: #E3F6FF;
  margin-bottom: 40px;

  &:hover {
    background: #a3def9;
  }

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`


export default SchedulePage;
