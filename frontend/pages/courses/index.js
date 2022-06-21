import MainLayout from "../../layouts/MainLayout";
import { API } from "../../libs/API";
import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import React from "react";
import { ButtonStyle } from "../../styles/sharedStyle";
import SpecCard from "../../components/Specialtity/SpecCard";
import Head from "next/head";

export default function Graduate({ specialties, content }) {
  const cleanSpecialites = specialties.filter((item) => {
    console.log(item.attributes);
    return item.attributes.education_type === "courses";
  });

  return (
    <MainLayout>
      <Head>
        <title>Курсы - СИЭУиП</title>
      </Head>
      <MainHeader>КУРСЫ</MainHeader>
      <Header>
        <div className="content">
          <div className="text">
            Пройди <b>бесплатное</b> обучение в рамках федерального проекта
            «Содействие занятости» национального проекта «Демография» и получи
            востребованные навыки
          </div>
          <a href="#courses">
            <ButtonStyle>Перейти к курсам</ButtonStyle>
          </a>
        </div>
        <img src="/img/courses-bg.jpg" alt="cover" />
      </Header>
      <Content>
        <div className="description">
          <div className="title">{content.attributes.title}</div>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: content.attributes.body }}
          />
        </div>
        <div id="courses" className="title">
          Курсы
        </div>
        <div className="list">
          {cleanSpecialites.map((item) => (
            <SpecCard key={item.id} entity={item} />
          ))}
        </div>
      </Content>
    </MainLayout>
  );
}

Graduate.getInitialProps = async (ctx) => {
  const specialties = await API.getCourses();
  const content = await API.getCoursesPage();
  return { specialties: specialties.data.data, content: content.data.data };
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
  .title {
    font-size: 40px;
    font-weight: 600;
    margin-left: 20px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .description {
    max-width: 1000px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    color: #494949;

    @media (max-width: 768px) {
      width: 100%;
      padding: 20px;
    }

    .title {
      font-size: 45px;
      font-weight: 500;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: 9em;
      }
    }

    .body {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 60px;
      margin-left: 30px;
    }
  }
`;
