import React from "react";
import { API } from "../../helpers/API";
import Layout from "../../components/Layouts/Layout";
import Head from "next/head";
import Employer from "../../components/Screens/Employers/Employer";

const EmployerPage = ({ employer }) => {
  return (
    <Layout>
      <Head>
        <title>{employer.attributes.name} - СИЭУиП</title>
      </Head>
      <Employer employer={employer} />
    </Layout>
  );
};

EmployerPage.getInitialProps = async (ctx) => {
  const { data } = await API.getEmployer(ctx.query.id);
  return { employer: data.data };
};

export default EmployerPage;
