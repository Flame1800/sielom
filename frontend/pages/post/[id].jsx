import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import SinglePost from "../../components/Screens/SinglePost/SinglePost";

export default function SinglePage({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.attributes?.name || "Пост"} - СИЭУиП</title>
      </Head>
      <SinglePost post={post} />
    </Layout>
  );
}

SinglePage.getInitialProps = async (ctx) => {
  const { data } = await API.getPageById(ctx.query.id);
  return { post: data.data };
};
