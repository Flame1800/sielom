import React from "react";
import Button from "../../UI/Button";
import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <Content>
      <div className="title">Страница не найдена</div>
      <div className="tag">404</div>
      <div onClick={() => router.back()}>
        <Button>Вернуться назад</Button>
      </div>
    </Content>
  );
};

const Content = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-weight: 500;
    font-size: 26px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #3e3e3e;
  }

  .tag {
    max-width: 458px;
    width: 100%;
    height: 177px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${baseTheme.colors.black};
    font-size: 144px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

export default NotFound;
