import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import MainHeader from "../../components/UI/MainHeader";
import styled from "styled-components";
import { Title } from "../../styles/homeStyle";
import LongLink from "../../components/UI/LongLink";
import Link from "next/link";
import Head from "next/head";
import React from "react";

export default function Events({ posts }) {
  return (
    <Layout>
      <Head>
        <title> Студенту - СИЭУиП</title>
      </Head>
      <MainHeader>Студенту</MainHeader>
      <Header>
        <div className="text">
          Расписание, стипендии, учебные программы, информация об оценках и
          экзаменах в одном месте
        </div>
        <img src="/img/student-bg.png"></img>
      </Header>
      <Content>
        <div className="fast-links">
          <Link href="/site/stipendii-i-inye-vidy-materialьnoj-podderzhki-obuchayushihsya">
            <a className="link">
              <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
              <p>Стипендии</p>
            </a>
          </Link>
          <Link href="/news">
            <a className="link">
              <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
              <p>Мероприятия и новости</p>
            </a>
          </Link>
          <Link href="/site/edu-payment">
            <a className="link">
              <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
              <p>Оплата обучения</p>
            </a>
          </Link>
        </div>
        <div className="link-group">
          <div className="group">
            <Title>Учебный процесс</Title>
            <div className="links">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`student/educational_process?postId=${post.id}`}
                >
                  <a>
                    <LongLink>{post.attributes.name}</LongLink>
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <img src="/img/spring-elem.png" alt="img" className="spring" />
        </div>
      </Content>
    </Layout>
  );
}

Events.getInitialProps = async () => {
  const posts = await API.getEdProcess();

  return {
    posts: posts.data.data,
  };
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
    line-height: 35px;
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
      font-size: 45px;
      line-height: 55px;
      letter-spacing: -0.05em;
      color: #3e3e3e;
      transition: 0.2s;
      cursor: pointer;

      @media (max-width: 768px) {
        font-size: 35px;
        line-height: 42px;
        margin: 20px 0;
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
    margin-bottom: 100px;

    .group {
      max-width: 700px;
      width: 100%;

      .links {
        margin-top: 90px;
      }
    }

    .spring {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;
