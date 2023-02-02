import { API } from "../helpers/API";
import React from "react";
import Head from "next/head";
import IkarPage from "../components/Screens/IkarPage/IkarPage";

export default function Ikar({ posts }) {
  return (
    <>
      <Head>
        <title>Региональный ресурсный центр соревнований ИКаР</title>
      </Head>
      <IkarPage posts={posts} />
    </>
  );
}

Ikar.getInitialProps = async () => {
  const posts = await API.getIkar();

  return {
    posts: posts.data.data,
  };
};
