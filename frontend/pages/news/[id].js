import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import Post from "../../components/Screens/Posts/Post";

export default function PostNews({ post, posts }) {
  return (
    <Layout>
      <Head>
        <title>{post.attributes.title} - СИЭУиП</title>
      </Head>
      <Post posts={posts} post={post} />
    </Layout>
  );
}

PostNews.getInitialProps = async (ctx) => {
  const { data } = await API.getNewPost(ctx.query.id);
  const posts = await API.getNews();
  return { post: data.data, posts: posts.data.data };
};
