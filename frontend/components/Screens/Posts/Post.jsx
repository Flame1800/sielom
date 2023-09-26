import React from "react";
import ArrowButton from "../../UI/ArrowButton";
import { PostDate, PostText, PostTitle } from "../../Post/PostStyle";
import normalizeDate from "../../../helpers/normalizeDate";
import PostCover from "../../Post/PostCover";
import FileContainer from "../../UI/Files/FileContainer";
import NewsCard from "../../Card/NewsCard";
import styled from "styled-components";
import _ from 'lodash'
import Gallery from "./Gallery";

const Post = ({ post, posts }) => {

  return (
    <>
      <PostWrapper>
        <PostContent>
          <ArrowButton back>назад</ArrowButton>
          <PostTitle>{post.attributes.title}</PostTitle>
          {post.attributes.date && (
            <PostDate>{normalizeDate(post.attributes.date)}</PostDate>
          )}
            {post.attributes.images?.data ? <Gallery images={post.attributes.images.data} /> : <PostCover entity={post} />}
          <PostText>
            <div className="post-md" dangerouslySetInnerHTML={{ __html: post.attributes.body }} />
          </PostText>
          <FileContainer files={post.attributes.files} />
        </PostContent>
      </PostWrapper>
      <Tape>
        <div className="title">Читайте также:</div>
        <div className="list">
            {_.shuffle(posts).slice(0, 4).map((post, id) => {
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

const PostContent = styled.div`
  max-width: 100%;
`

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
