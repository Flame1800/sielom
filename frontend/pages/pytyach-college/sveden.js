import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import PostPages from "../../components/PostPages";


export default function SvedenSecondCollege({ posts }) {
  return (
    <>
      <Head>
        <title>Сведения об образовательной организации - ПЫТЬ-ЯХСКИЙ МЕЖОТРАСЛЕВОЙ КОЛЛЕДЖ</title>
      </Head>
      <PostPages posts={posts} title={"Сведения об образовательной организации - ПЫТЬ-ЯХСКИЙ МЕЖОТРАСЛЕВОЙ КОЛЛЕДЖ"} />
    </>
  );
}

SvedenSecondCollege.getInitialProps = async () => {
  const posts = await API.getSvedensSecondCollege();

  return {
    posts: posts.data.data,
  };
};
