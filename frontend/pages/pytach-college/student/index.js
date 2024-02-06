import Layout from "../../../components/Layouts/Layout";
import { API } from "../../../helpers/API";
import MainHeader from "../../../components/UI/MainHeader";
import styled from "styled-components";
import { Title } from "../../../styles/homeStyle";
import LongLink from "../../../components/UI/LongLink";
import Link from "next/link";
import Head from "next/head";
import React from "react";

export default function Events({ page }) {
    const {links, title, description} = page.attributes

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <MainHeader>{title}</MainHeader>
      <Header>
        <div className="text">
            {description}
        </div>
      </Header>
      <Content>
        <div className="fast-links">
            {links.map(link => {
                return (
                    <Link href={link.link}>
                        <a className="link">
                            <img src="/img/arrow-45.png" alt="arrow-icon" className="icon" />
                            <p>{link.name}</p>
                        </a>
                    </Link>
                )
            })}
        </div>
      </Content>
    </Layout>
  );
}

Events.getInitialProps = async () => {
  const page = await API.getStudentPythYakhPage();

  return {
    page: page.data.data,
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
