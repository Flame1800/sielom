import React from "react";
import Head from "next/head";
import MainHeader from "../../components/UI/MainHeader";
import { API } from "../../helpers/API";
import NewsCard from "../../components/Card/NewsCard";
import Layout from "../../components/Layouts/Layout";
import styled from "styled-components";
import Banner from "../../components/Screens/Home/components/Banner";
import Link from "next/link";

const CollegeNews = ({ news }) => {
  return (
    <Layout>
      <Head>
        <title>Пыть-яхский межотраслевой колледж - СИЭУиП</title>
      </Head>
      <MainHeader>
        Пыть-яхский межотраслевой колледж 
        <br />
          <Links>
              <Link href='pytach-college/sveden'><a>Сведения об образовательной организации</a></Link>
          </Links>
      </MainHeader>
      <Banner isSecondCollege={true} />
      <Content>
        {news.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </Content>
    </Layout>
  );
};

const Links = styled.div`
  display: flex;
  gap: 20px;
`

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
`;

CollegeNews.getInitialProps = async () => {
  const { data } = await API.getCollegeNews();
  return { news: data.data };
};

export default CollegeNews;
