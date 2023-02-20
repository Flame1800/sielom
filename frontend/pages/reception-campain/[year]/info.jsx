import Layout from "../../../components/Layouts/Layout";
import { API } from "../../../helpers/API";
import React from "react";
import Head from "next/head";
import Info from "../../../components/Screens/ReceptionCampaign/Info";

const Post = ({posts, year}) => {
  return (
    <Layout>
      <Head>
        <title> Приемная кампания {year} - СИЭУиП</title>
      </Head>
      <Info posts={posts} year={year} />
    </Layout>
  );
};

Post.getInitialProps = async (ctx) => {
  const posts = await API.getReceptionCampainPages(ctx.query.year);
  return { posts: posts.data.data, year: ctx.query.year };
};

export default Post;
