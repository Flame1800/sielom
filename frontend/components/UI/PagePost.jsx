import React from "react";
import styled from "styled-components";
import FileContainer from "./Files/FileContainer";
import ArrowButton from "./ArrowButton";

const PagePost = ({ post }) => {
  return (
    <Content>
      {post && (
        <>
          <div id={post.id} className="title">
            {post?.attributes?.name}
          </div>
          <div className="post-md">
            <div dangerouslySetInnerHTML={{ __html: post.attributes?.body }} />
          </div>
          <FileContainer files={post?.attributes?.files} />
        </>
      )}
    </Content>
  );
};

const Content = styled.div`
  padding-bottom: 80px;
  max-width: 900px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }

  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: #3e3e3e;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 26px;
    }
  }
`;

export default PagePost;
