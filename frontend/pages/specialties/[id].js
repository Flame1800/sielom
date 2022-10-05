import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import Specialty from "../../components/Screens/Specialties/Specialty";

export default function SpecialtyPage({ entity }) {
  return (
    <Layout>
      <Head>
        <title> {entity?.attributes?.name} - СИЭУиП</title>
      </Head>
      <Specialty entity={entity} />
    </Layout>
  );
}

SpecialtyPage.getInitialProps = async (ctx) => {
  const { data } = await API.getSpecialty(ctx.query.id);
  return { entity: data.data };
};
