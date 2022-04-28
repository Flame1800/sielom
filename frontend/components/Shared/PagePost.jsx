import React from "react";
import styled from "styled-components";


const PagePost = ({ post }) => {
    return (
        <Content>
            {post && <>
                <div id={post.id} className="title">
                    {post?.attributes?.name}
                </div>
                <div className="post-md">
                    <div dangerouslySetInnerHTML={{__html: post.attributes?.body }} />
                </div>
            </>}
        </Content>
    )
}

const Content = styled.div`
  padding-bottom: 80px;
  max-width: 900px;
  margin: 80px auto;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: #3E3E3E;
    margin-bottom: 70px;
    
    @media (max-width: 768px) {
      font-size: 26px;
    }
  }
`

export default PagePost