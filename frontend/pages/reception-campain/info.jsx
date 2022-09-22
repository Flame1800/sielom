import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import Info from "../../components/Screens/ReceptionCampaign/Info";

const Post = (props) => {
  return (
    <Layout>
      <Head>
        <title> Приемная кампания - СИЭУиП</title>
      </Head>
      <Info {...props} />
    </Layout>
  );
};

Post.getInitialProps = async () => {
  const posts = await API.getReceptionCampainPages();
  return { posts: posts.data.data };
};

export default Post;
