import MainLayout from "../../layouts/MainLayout";
import { API } from "../../libs/API";
import React from "react";
import ArrowButton from "../../components/Common/ArrowButton";
import PagePost from "../../components/Common/PagePost";
import styled from "styled-components";
import Head from "next/head";

export default function SinglePage({ post }) {
  return (
    <MainLayout>
      <Head>
        <title>{post.attributes?.name || "Пост"} - СИУЭиП</title>
      </Head>
      <PostWrapper>
        <ArrowButton back>назад</ArrowButton>
        <PagePost post={post} />
      </PostWrapper>
    </MainLayout>
  );
}

const PostWrapper = styled.div`
  margin-top: 50px;
`;

SinglePage.getInitialProps = async (ctx) => {
  const { data } = await API.getPageById(ctx.query.id);
  return { post: data.data };
};
