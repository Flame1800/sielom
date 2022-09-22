import React from "react";
import MainHeader from "../../UI/MainHeader";
import { Content, Header } from "./Courses.style";
import CardsCourse from "./CardsCourse";

const Courses = ({ specialties, content }) => {
  const cleanSpecialties = specialties.filter((item) => {
    return item.attributes.education_type === "courses";
  });
  return (
    <>
      <MainHeader>КУРСЫ</MainHeader>
      <Header>
        <div className="content">
          <div className="text">
            Пройди <b>бесплатное</b> обучение в рамках федерального проекта
            «Содействие занятости» национального проекта «Демография» и получи
            востребованные навыки
          </div>
        </div>
      </Header>
      <Content>
        <CardsCourse courses={cleanSpecialties} />
        <div className="description">
          <div className="title">{content.attributes.title}</div>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: content.attributes.body }}
          />
        </div>
      </Content>
    </>
  );
};

export default Courses;
