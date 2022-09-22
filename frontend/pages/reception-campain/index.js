import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import Link from "next/link";
import {} from "../../styles/homeStyle";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
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

const Wrapper = styled.div`
  .commission {
    border-bottom: 1px solid #3e3e3e;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-right: 50px;
    margin-top: 90px;

    .title {
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 26px;
      color: ${baseTheme.colors.black};
    }

    .item {
      margin-bottom: 40px;
      max-width: 400px;

      .name {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
        color: ${baseTheme.colors.light};
      }
    }
  }

  .pages {
    max-width: 800px;
    margin-bottom: 100px;
  }
`;

export default ReceptionCampain;
