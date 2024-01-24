import React from "react";
import Layout from "../components/Layouts/Layout";
import { API } from "../helpers/API";
import Head from "next/head";
import Mission from "../components/Screens/Home/components/Mission";

const MissionPage = ({ schedule }) => {
  return (
    <Layout>
      <Head>
        <title>МИССИЯ СИЭУиП</title>
      </Head>
      <Mission />
    </Layout>
  );
};

export default MissionPage;
