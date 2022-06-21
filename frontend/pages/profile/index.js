import MainLayout from "../../layouts/MainLayout";
import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import Button from "../../components/Common/Button";
import { baseTheme } from "../../styles/theme";
import Head from "next/head";
import React from "react";

export default function NotFound() {
  return (
    <MainLayout noFooter>
      <Head>
        <title> Личный кабинет - СИУЭиП</title>
      </Head>
      <Content>
        <div className="title">
          Личный кабинет <br /> Coming soon...
        </div>
      </Content>
    </MainLayout>
  );
}

const Content = styled.div`
  width: 100%;
  border-left: 1px solid ${baseTheme.colors.light};
  border-right: 1px solid ${baseTheme.colors.light};
  height: 89vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 80px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #3e3e3e;
    margin-bottom: 20px;
  }

  .tag {
    max-width: 458px;
    width: 100%;
    height: 177px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 190px;
    border: 9px solid ${baseTheme.colors.black};
    color: ${baseTheme.colors.black};
    padding: 34px 0;
    font-size: 144px;
    font-weight: bold;
    margin-bottom: 30px;

    .gold {
      color: ${baseTheme.colors.gold};
    }
  }
`;
