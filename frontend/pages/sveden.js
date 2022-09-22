import { API } from "../helpers/API";
import React from "react";
import Head from "next/head";
import InstituteInfo from "../components/Screens/InstituteInfo/InstituteInfo";

export default function Sveden({ posts }) {
  return (
    <>
      <Head>
        <title>Сведения об образовательной организации - СИЭУиП</title>
      </Head>
      <InstituteInfo posts={posts} />
    </>
  );
}

Sveden.getInitialProps = async () => {
  const posts = await API.getSvedens();

  return {
    posts: posts.data.data,
  };
};
