import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import Head from "next/head";
import React from "react";
import Specialties from "../../components/Screens/Specialties/Specialties";

export default function SpecialtiesPage({ specialties }) {
  return (
    <Layout>
      <Head>
        <title> Специальности - СИЭУиП</title>
      </Head>
      <Specialties specialties={specialties} />
    </Layout>
  );
}

SpecialtiesPage.getInitialProps = async () => {
  const { data } = await API.getSpecialties();
  return { specialties: data.data };
};
