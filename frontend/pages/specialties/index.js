import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import Head from "next/head";
import React from "react";

export default function Specialties({ specialties }) {
  return (
    <Layout>
      <Head>
        <title> Специальности - СИЭУиП</title>
      </Head>
      <Specialties specialties={specialties} />
    </Layout>
  );
}

Specialties.getInitialProps = async () => {
  const { data } = await API.getSpecialties();
  return { specialties: data.data };
};
