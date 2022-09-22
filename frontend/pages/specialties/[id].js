import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import Specialty from "../../components/Screens/Specialties/Specialty";

export default function SpecialtyPage(props) {
  return (
    <Layout>
      <Head>
        <title> {attributes?.name} - СИЭУиП</title>
      </Head>
      <Specialty {...props} />
    </Layout>
  );
}

SpecialtyPage.getInitialProps = async (ctx) => {
  const { data } = await API.getSpecialty(ctx.query.id);
  return { entity: data.data };
};
