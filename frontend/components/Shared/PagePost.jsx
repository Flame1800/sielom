import React from "react";
import styled from "styled-components";


const PagePost = ({ post }) => {
    return (
        <Content>
            {post && <>
                <div className="title">
                    {post.attributes.name}
                </div>
                <div className="post-md">
                    <div dangerouslySetInnerHTML={{__html: post.attributes.body }} />
                </div>
            </>}
        </Content>
    )
}

const Content = styled.div`
  padding-bottom: 80px;
  margin-top: 80px;
  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: #3E3E3E;
    margin-bottom: 70px;
  }
`

export default PagePost