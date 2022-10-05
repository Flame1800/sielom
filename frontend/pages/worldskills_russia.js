import { API } from "../helpers/API";
import React from "react";
import Head from "next/head";
import WordSkillsPage from "../components/Screens/WordSkillsPage/WordSkillsPage";

export default function WordSkills({ posts }) {
  return (
    <>
      <Head>
        <title>WorldSkills Russia - СИЭУиП</title>
      </Head>
      <WordSkillsPage posts={posts} />
    </>
  );
}

WordSkills.getInitialProps = async () => {
  const posts = await API.getWordskills();

  return {
    posts: posts.data.data,
  };
};
