import React from "react";
import Head from "next/head";
import MainHeader from "../../components/UI/MainHeader";
import { API } from "../../helpers/API";
import NewsCard from "../../components/Card/NewsCard";
import Layout from "../../components/Layouts/Layout";
import styled from "styled-components";

const CollegeNews = ({ news }) => {
  return (
    <Layout>
      <Head>
        <title>Пыть-яхский межотраслевой колледж - СИЭУиП</title>
      </Head>
      <MainHeader>Пыть-яхский межотраслевой колледж </MainHeader>
      <Content>
        {news.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </Content>
    </Layout>
  );
};

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
`;

CollegeNews.getInitialProps = async () => {
  const { data } = await API.getNews();
  return { news: data.data };
};

export default CollegeNews;
