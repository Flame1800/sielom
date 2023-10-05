import { API } from "../../../helpers/API";
import React from "react";
import PostPages from "../../../components/PostPages";
import Head from "next/head";

export default function Sveden({ posts }) {
  return (
    <>
      <Head>
        <title> Учебный процесс - Пыть-яхский межотраслевой колледж</title>
      </Head>
      <PostPages posts={posts} title="Учебный процесс" />
    </>
  );
}

Sveden.getInitialProps = async () => {
  const posts = await API.getEdProcess();

  return {
    posts: posts.data.data,
  };
};
