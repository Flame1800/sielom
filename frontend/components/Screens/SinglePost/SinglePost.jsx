import React from "react";
import ArrowButton from "../../UI/ArrowButton";
import PagePost from "../../UI/PagePost";
import styled from "styled-components";

const SinglePost = ({ post }) => {
  return (
    <PostWrapper>
      <ArrowButton back>назад</ArrowButton>
      <PagePost post={post} />
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  margin-top: 50px;
`;

export default SinglePost;
