import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import React from "react";
import PostCover from "../../components/Post/PostCover";
import {PostDate, PostText, PostTitle} from "../../components/Post/PostStyle";
import normalizeDate from "../../libs/normalizeDate";
import styled from "styled-components";


import MinTapePost from "../../components/Post/MinTapePost";

export default function NewsPost({post, posts}) {

    return (
        <MainLayout>
            <PostWrapper>
                <div>
                    <PostTitle>
                        {post.attributes.title}
                    </PostTitle>
                    {post.attributes.date
                    && <PostDate>{normalizeDate(post.attributes.date)}</PostDate>}
                    <PostCover entity={post} />
                    <PostText>
                        <div dangerouslySetInnerHTML={{__html: post.attributes.body }} />
                    </PostText>
                </div>
                <MinTapePost title={"Читайте также:"} posts={posts} />
            </PostWrapper>
        </MainLayout>
    )
}


const PostWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`


NewsPost.getInitialProps = async ctx => {
    const { data } = await API.getNewPost(ctx.query.id)
    const posts = await API.getNews()
    return { post: data.data, posts: posts.data.data }
}