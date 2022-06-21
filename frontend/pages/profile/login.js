import MainLayout from "../../layouts/MainLayout";
import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import Button from "../../components/Common/Button";
import { baseTheme } from "../../styles/theme";
import Link from "next/link";
import Head from "next/head";
import React from "react";

export default function NotFound() {
  return (
    <MainLayout>
      <Head>
        <title> Авторизация - СИЭУиП</title>
      </Head>
      <Content>
        <div>
          <div className="title">
            Вход в личный <br /> кабинет
          </div>
          <div className="form">
            <input type="text" placeholder="ФИО" className="input" />
            <input type="password" placeholder="Пароль" className="input" />
          </div>
          <Button>Войти</Button>
        </div>
      </Content>
    </MainLayout>
  );
}

const Content = styled.div`
  width: 55%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 200px;

  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 41px;
    line-height: 50px;
    letter-spacing: -0.05em;
    color: #3e3e3e;
    margin-bottom: 70px;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .input {
    border: 1px solid #3e3e3e;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 10px;
    max-width: 280px;
    width: 100%;
    height: 40px;
    padding-left: 15px;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    color: ${baseTheme.colors.black};

    &::placeholder {
      color: #5f5f5f;
    }
  }
`;
