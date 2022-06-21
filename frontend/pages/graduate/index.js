import MainLayout from "../../layouts/MainLayout";
import { API } from "../../libs/API";
import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import { Title } from "../../styles/homeStyle";
import LongLink from "../../components/Common/LongLink";
import React from "react";
import { Tooltip } from "@mui/material";
import Head from "next/head";

export default function Graduate({ posts, content }) {
  const [activePost, setPost] = React.useState(null);

  return (
    <MainLayout>
      <Head>
        <title>Выпускнику - СИУЭиП</title>
      </Head>
      <MainHeader>Выпускнику</MainHeader>
      <Header>
        <div className="text">
          Одним из приоритетных направлений развития института является
          подготовка высококвалифицированных специалистов для
          предприятий-партнеров и содействие в трудоустройстве выпускников.
        </div>
        <img src="/img/graduate.png" alt="cover" />
      </Header>
      <Content>
        <div className="fast-links">
          <a href="#work" className="link">
            <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
            Трудоустройство
          </a>
          <a
            href="http://sielom.ru/vipusknikam/vakansii-vipusknikam"
            className="link"
          >
            <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
            Вакансии для выпускников
          </a>
          <Tooltip title="В разработке">
            <a className="link">
              <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
              Сотрудничество с СурГУ
            </a>
          </Tooltip>
        </div>
        <div className="link-group">
          <div className="group">
            <Title>Полезные материалы</Title>
            <div className="links">
              {posts.map((post) => (
                <div key={post.id}>
                  <div
                    onClick={() =>
                      post.id === activePost?.id ? setPost(null) : setPost(post)
                    }
                  >
                    <LongLink>{post.attributes.name}</LongLink>
                  </div>
                  {activePost?.id === post.id && (
                    <div
                      className="page-list"
                      dangerouslySetInnerHTML={{
                        __html: activePost.attributes.body,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <img src="/img/spring-elem.svg" alt="img" className="spring" />
        </div>
        <div id="work" className="employment">
          <div className="title">{content.attributes.name}</div>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: content.attributes.body }}
          />
        </div>
      </Content>
    </MainLayout>
  );
}

Graduate.getInitialProps = async (ctx) => {
  const posts = await API.getGraduatePages();
  const content = await API.getEmploymentPage();
  return { posts: posts.data.data, content: content.data.data };
};

const Header = styled.div`
  margin-top: 60px;
  display: grid;
  margin-bottom: 120px;
  grid-template-columns: 50% 50%;

  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }

  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 39px;
    letter-spacing: -1.25px;
    color: #3e3e3e;
    margin-bottom: 40px;

    @media (max-width: 726px) {
      font-size: 20px;
    }
  }

  img {
    border-radius: 20px;
    width: 100%;
  }
`;

const Content = styled.div`
  .fast-links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
    width: 100%;

    @media (max-width: 1300px) {
      flex-wrap: wrap;
    }

    .link {
      margin: 10px;
      flex-basis: 100%;
      border-radius: 20px;
      position: relative;
      display: flex;
      align-items: flex-end;
      border: 1px solid #b1b1b1;
      height: 303px;
      padding: 40px 25px;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 59px;
      letter-spacing: -0.05em;
      color: #3e3e3e;
      transition: 0.2s;
      cursor: pointer;

      @media (max-width: 768px) {
        font-size: 25px;
        line-height: 32px;
        margin-top: 40px;
      }

      &:hover {
        background: #3e3e3e;
        color: #fff;
      }
    }

    .icon {
      position: absolute;
      top: 10px;
      right: 20px;
      filter: invert(100%);

      @media (max-width: 768px) {
        filter: none;
      }
    }
  }

  .link-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    min-height: 60vh;

    .page-list {
      margin-bottom: 80px;

      p {
        margin-bottom: 5px !important;
        text-decoration: underline;
        line-height: 40px;
        font-size: 18px;
      }
    }

    .spring {
      position: absolute;
      right: 30px;
      top: 100px;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .group {
      max-width: 666px;
      width: 100%;

      .links {
        margin-top: 90px;
      }
    }
  }

  .employment {
    padding-top: 120px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f6f6f6;
    border-radius: 20px;
    color: #494949;

    @media (max-width: 768px) {
      width: 100%;
      padding: 20px;
    }

    .title {
      font-size: 60px;
      font-weight: 500;
      margin-bottom: 60px;

      @media (max-width: 768px) {
        font-size: 9em;
      }
    }

    .body {
      max-width: 800px;
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 60px;
    }
  }
`;
