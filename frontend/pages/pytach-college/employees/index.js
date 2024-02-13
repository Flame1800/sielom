import Layout from "../../../components/Layouts/Layout";
import { API } from "../../../helpers/API";
import React from "react";
import Head from "next/head";
import Employers from "../../../components/Screens/Employers/Employers";
import { useEffect } from "react";

export default function EmployersPage({ employers }) {

  return (
    <Layout>
      <Head>
        <title>Персонал - ПЫТЬ-ЯХСКИЙ МЕЖОТРАСЛЕВОЙ КОЛЛЕДЖ</title>
      </Head>
      <Employers employers={employers} />
    </Layout>
  );
}

EmployersPage.getInitialProps = async (ctx) => {
  const { data } = await API.getEmployees(ctx.query.category, true);
  return { employers: data.data };
};
