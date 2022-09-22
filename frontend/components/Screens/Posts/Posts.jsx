import React from "react";
import MainHeader from "../../UI/MainHeader";
import NewsCard from "../../Card/NewsCard";
import styled from "styled-components";

const Posts = ({ posts }) => {
  return (
    <>
      <MainHeader>Мероприятия и новости</MainHeader>
      <Content>
        {posts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </Content>
    </>
  );
};

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
`;

export default Posts;
