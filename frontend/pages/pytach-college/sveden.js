import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import InstituteInfo from "../../components/Screens/InstituteInfo/InstituteInfo";


export default function SvedenSecondCollege({ posts }) {
  return (
    <>
      <Head>
        <title>Сведения об образовательной организации - ПЫТЬ-ЯХСКИЙ МЕЖОТРАСЛЕВОЙ КОЛЛЕДЖ</title>
      </Head>
      <InstituteInfo isPytach={true} posts={posts} title={"Сведения об образовательной организации - ПЫТЬ-ЯХСКИЙ МЕЖОТРАСЛЕВОЙ КОЛЛЕДЖ"} />
    </>
  );
}

SvedenSecondCollege.getInitialProps = async () => {
  const posts = await API.getSvedensSecondCollege();

  return {
    posts: posts.data.data,
  };
};
