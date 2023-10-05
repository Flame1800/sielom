import React from "react";
import Head from "next/head";
import MainHeader from "../../components/UI/MainHeader";
import { API } from "../../helpers/API";
import NewsCard from "../../components/Card/NewsCard";
import Layout from "../../components/Layouts/Layout";
import styled from "styled-components";
import Banner from "../../components/Screens/Home/components/Banner";
import Link from "next/link";
import {baseTheme} from "../../styles/theme";

const CollegeNews = ({ news }) => {
  return (
    <Layout>
      <Head>
        <title>Пыть-яхский межотраслевой колледж</title>
      </Head>
      <MainHeader>
        Пыть-яхский межотраслевой колледж
          <Nav>
              <Link href='pytyach-college/sveden'><a>Сведения об образовательной организации</a></Link>
              <Link href='pytyach-college/student'><a>Студенту</a></Link>
          </Nav>
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

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
`;

const Nav = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 18px;
  
   a {
     margin-right: 20px;
     &:hover {
       color: ${baseTheme.colors.blue};
     }
   }
`

CollegeNews.getInitialProps = async () => {
  const { data } = await API.getCollegeNews();
  return { news: data.data };
};

export default CollegeNews;
