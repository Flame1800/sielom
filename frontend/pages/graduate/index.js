import MainLayout from "../../layouts/MainLayout";
import { API } from "../../libs/API";
import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import { Title } from "../../styles/homeStyle";
import LongLink from "../../components/Common/LongLink";
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Graduate({ posts, content }) {
  const [activePost, setPost] = React.useState(null);

  return (
    <MainLayout>
      <Head>
        <title>Выпускнику - СИЭУиП</title>
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
          <Link href="/graduate/vacancies">
            <a className="link">
              <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
              Вакансии для выпускников
            </a>
          </Link>
          <Link href="/news/225">
            <a className="link">
              <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
              Номинации и вручение дипломов
            </a>
          </Link>
          <a href="#links" className="link">
            <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
            Полезные материалы
          </a>
        </div>
        <div id="work" className="employment">
          <div className="title">{content.attributes.name}</div>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: content.attributes.body }}
          />
        </div>

        <div className="link-group" id="links">
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
  margin-bottom: 30px;
  grid-template-columns: 50% 50%;

  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }

  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
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
    margin-bottom: 30px;
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
      border: 1px solid #3e3e3e;
      height: 260px;
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

    .group {
      width: 100%;

      .links {
        margin-top: 90px;
      }
    }
  }

  .employment {
    padding-top: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #eef6ff;
    border-radius: 20px;
    color: #1c3e64;
    text-align: left;
    margin-bottom: 140px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 20px;
    }

    .title {
      max-width: 800px;
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
