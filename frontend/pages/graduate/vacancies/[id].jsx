import React from "react";
import { API } from "../../../helpers/API";
import Index from "./index";
import Layout from "../../../components/Layouts/Layout";
import styled from "styled-components";

const Vacancy = ({ vacancy }) => {
  return (
    <Layout>
      <Wrapper>
        <div className="title">{vacancy.attributes.name}</div>
        <div className="post-md">
          <div
            dangerouslySetInnerHTML={{ __html: vacancy.attributes.description }}
          />
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  margin-top: 70px;

  .title {
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 50px;
  }
`;

Vacancy.getInitialProps = async (ctx) => {
  const vacancy = await API.getVacancy(ctx.query.id);
  return { vacancy: vacancy.data.data };
};

export default Vacancy;
