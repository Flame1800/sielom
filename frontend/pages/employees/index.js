import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import Employers from "../../components/Screens/Employers/Employers";

export default function EmployersPage({ employers }) {
  return (
    <Layout>
      <Head>
        <title>Персонал - СИЭУиП</title>
      </Head>
      <Employers employers={employers} />
    </Layout>
  );
}

EmployersPage.getInitialProps = async (ctx) => {
  const { data } = await API.getEmployees(ctx.query.category, false);
  return { employers: data.data };
};
