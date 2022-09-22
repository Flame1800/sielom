import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import Head from "next/head";
import React from "react";
import Posts from "../../components/Screens/Posts/Posts";

export default function NewsAndEvents({ news }) {
  return (
    <Layout>
      <Head>
        <title>Мероприятия и новости - СИЭУиП</title>
      </Head>
      <Posts posts={news} />
    </Layout>
  );
}

NewsAndEvents.getInitialProps = async () => {
  const { data } = await API.getNews();
  return { news: data.data };
};
