import { API } from "../libs/API";
import React from "react";
import PostPages from "../components/PostPages";
import Head from "next/head";

export default function Sveden({ posts }) {
  return (
    <>
      <Head>
        <title>WorldSkills Russia - СИЭУиП</title>
      </Head>
      <PostPages posts={posts} title="WorldSkills Russia" />
    </>
  );
}

Sveden.getInitialProps = async () => {
  const posts = await API.getWordskills();

  return {
    posts: posts.data.data,
  };
};
