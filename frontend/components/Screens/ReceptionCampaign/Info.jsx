import React from "react";
import MainHeader from "../../UI/MainHeader";
import JivoButton from "../../UI/JivoButton";
import Link from "next/link";
import Button from "../../UI/Button";
import PostPages from "../../PostPages";
import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";

const Info = ({ posts, year }) => {
  return (
    <Wrapper>
      <MainHeader>Приемная кампания {year}</MainHeader>
      <div className="buttons">
        <JivoButton>Задать вопрос</JivoButton>
        <Link href="/specialties">
          <a>
            <Button>Специальности</Button>
          </a>
        </Link>
      </div>
      <PostPages notLayout posts={posts} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .commission {
    width: 100%;
    margin-bottom: 80px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-right: 50px;
    margin-top: 80px;

    .title {
      margin-bottom: 50px;
      font-weight: 600;
      font-size: 26px;
      color: ${baseTheme.colors.black};
    }

    .item {
      margin-bottom: 40px;

      .name {
        color: #525252;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
      }
    }
  }

  .buttons {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;

    > div,
    > a {
      margin: 10px;
    }
  }
`;

export default Info;
