import { API } from "../helpers/API";
import React from "react";
import Head from "next/head";
import MedicalPage from "../components/Screens/MedicalPage/MedicalPage";

export default function Medical({ posts }) {
  return (
    <>
      <Head>
        <title>Медицинская организация</title>
      </Head>
      <MedicalPage posts={posts} />
    </>
  );
}

Medical.getInitialProps = async () => {
  const posts = await API.getMedical();

  return {
    posts: posts.data.data,
  };
};
