import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import Head from "next/head";
import React from "react";
import ReceptionCampaign from "../../components/Screens/ReceptionCampaign/ReceptionCampaign";

const ReceptionCampaignPage = (props) => {
  return (
    <Layout>
      <Head>
        <title> Поступающим - СИЭУиП</title>
      </Head>
      <ReceptionCampaign {...props} />
    </Layout>
  );
};

ReceptionCampaignPage.getInitialProps = async () => {
  const posts = await API.getReceptionCampainPages();
  const commission = await API.getCommissonPage();

  return { posts: posts.data.data, commission: commission.data.data };
};

export default ReceptionCampaignPage;
