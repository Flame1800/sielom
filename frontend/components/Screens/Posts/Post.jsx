import React from "react";
import ArrowButton from "../../UI/ArrowButton";
import { PostDate, PostText, PostTitle } from "../../Post/PostStyle";
import normalizeDate from "../../../helpers/normalizeDate";
import PostCover from "../../Post/PostCover";
import FileContainer from "../../UI/Files/FileContainer";
import NewsCard from "../../Card/NewsCard";
import styled from "styled-components";

const Post = ({ post, posts }) => {
  return (
    <>
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
    </>
  );
};

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

export default Post;
