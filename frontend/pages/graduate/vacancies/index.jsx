import React from "react";
import { API } from "../../../helpers/API";
import Link from "next/link";
import Layout from "../../../components/Layouts/Layout";
import styled from "styled-components";
import MainHeader from "../../../components/UI/MainHeader";

const Vacancies = ({ vacancies }) => {
  return (
    <Layout>
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
    </Layout>
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

Vacancies.getInitialProps = async (ctx) => {
  const vacancies = await API.getVacancies();
  return { vacancies: vacancies.data.data };
};

export default Vacancies;
