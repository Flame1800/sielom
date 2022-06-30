import React from "react";
import { API } from "../../../libs/API";
import Link from "next/link";
import MainLayout from "../../../layouts/MainLayout";
import styled from "styled-components";
import MainHeader from "../../../components/Common/MainHeader";

const Index = ({ vacancies }) => {
  console.log(vacancies);
  return (
    <MainLayout>
      <Wrapper>
        <MainHeader>Вакансии</MainHeader>
        <div className="list">
          {vacancies.map((item, id) => {
            return (
              <Link href={`/graduate/vacancies/${item.id}`}>
                <a>
                  <div className="item">
                    {id + 1}.
                    <span className="name"> {item.attributes.name}</span>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled.div`
  margin-top: 70px;

  .list {
    display: flex;
    flex-direction: column;

    .item {
      margin-bottom: 40px;
      border-radius: 10px;
      background: #efefef;
      padding: 20px;
      font-weight: 600;
      color: #444444;
    }
  }
`;

Index.getInitialProps = async (ctx) => {
  const vacancies = await API.getVacancies();
  return { vacancies: vacancies.data.data };
};

export default Index;
