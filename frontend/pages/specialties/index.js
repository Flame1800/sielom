import MainLayout from "../../layouts/MainLayout";
import { API } from "../../libs/API";
import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";

import SpecialityCardsHolder from "../../components/Specialtity/SpecialityCardsHolder";
import Head from "next/head";
import React from "react";

export default function Specialties({ specialties }) {
  return (
    <MainLayout>
      <Head>
        <title> Специальности - СИЭУиП</title>
      </Head>
      <MainHeader>СПЕЦИАЛЬНОСТИ</MainHeader>
      <Content>
        <SpecialityCardsHolder specialties={specialties} />
      </Content>
    </MainLayout>
  );
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: 60px;
  padding-top: 20px;
`;

Specialties.getInitialProps = async () => {
  const { data } = await API.getSpecialties();
  return { specialties: data.data };
};
