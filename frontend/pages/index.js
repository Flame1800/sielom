import { API } from "../helpers/API";
import React from "react";
import Head from "next/head";
import Layout from "../components/Layouts/Layout";
import Home from "../components/Screens/Home/Home";

export default function HomePage(props) {
  return (
    <Layout>
      <Head>
        <title>Сургутский институт экономики, управления и права</title>
      </Head>
      <Home {...props} />
    </Layout>
  );
}

HomePage.getInitialProps = async () => {
  const news = await API.getNews();
  const specialties = await API.getSpecialties();
  const statistics = await API.getStatistics();

  return {
    news: news.data.data,
    specialties: specialties.data.data,
    statistics: statistics.data.data,
  };
};
