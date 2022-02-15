import React from "react";
import styled from "styled-components";


const PagePost = ({ post }) => {
    return (
        <Content>
            {post && <>
                <div className="text-info">
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
  .text-info {
    font-weight: 500;
    font-size: 27px;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: #3E3E3E;
    margin-bottom: 40px;
  }
`

export default PagePost