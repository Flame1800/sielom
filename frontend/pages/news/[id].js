import MainLayout from "../../layouts/MainLayout";
import { API } from "../../libs/API";
import React from "react";
import PostCover from "../../components/Post/PostCover";
import { PostDate, PostText, PostTitle } from "../../components/Post/PostStyle";
import normalizeDate from "../../libs/normalizeDate";
import styled from "styled-components";
import ArrowButton from "../../components/Common/ArrowButton";
import NewsCard from "../../components/Card/NewsCard";
import FileContainer from "../../components/Common/Files/FileContainer";
import Head from "next/head";

export default function NewsPost({ post, posts }) {
  return (
    <MainLayout>
      <Head>
        <title>{post.attributes.title} - СИУЭиП</title>
      </Head>
      <PostWrapper>
        <div>
          <ArrowButton back>назад</ArrowButton>
          <PostTitle>{post.attributes.title}</PostTitle>
          {post.attributes.date && (
            <PostDate>{normalizeDate(post.attributes.date)}</PostDate>
          )}
          <PostCover entity={post} />
          <PostText>
            <div dangerouslySetInnerHTML={{ __html: post.attributes.body }} />
          </PostText>
          <FileContainer files={post.attributes.files} />
        </div>
      </PostWrapper>
      <Tape>
        <div className="title">Читайте также:</div>
        <div className="list">
          {posts.map((post, id) => {
            if (id > 3) {
              return null;
            }
            return <NewsCard post={post} />;
          })}
        </div>
      </Tape>
    </MainLayout>
  );
}

const PostWrapper = styled.div`
  display: flex;
  margin: 50px auto;
  max-width: 800px;
`;

const Tape = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;

  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .list {
    overflow-x: scroll;
    display: flex;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

NewsPost.getInitialProps = async (ctx) => {
  const { data } = await API.getNewPost(ctx.query.id);
  const posts = await API.getNews();
  return { post: data.data, posts: posts.data.data };
};
