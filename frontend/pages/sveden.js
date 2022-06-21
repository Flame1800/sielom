import { API } from "../libs/API";
import React from "react";
import PostPages from "../components/PostPages";
import Head from "next/head";

export default function Sveden({ posts }) {
  return (
    <>
      <Head>
        <title>Сведения об образовательной организации - СИЭУиП</title>
      </Head>
      <PostPages
        posts={posts}
        title="СВЕДЕНИЯ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ"
      />
    </>
  );
}

Sveden.getInitialProps = async () => {
  const posts = await API.getSvedens();

  return {
    posts: posts.data.data,
  };
};
