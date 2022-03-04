import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import React from "react";
import PostCover from "../../components/Post/PostCover";
import {PostDate, PostText, PostTitle} from "../../components/Post/PostStyle";
import normalizeDate from "../../libs/normalizeDate";
import styled from "styled-components";
import _ from 'lodash'
import ArrowButton from "../../components/Shared/ArrowButton";
import NewsCard from "../../components/Card/NewsCard";

export default function NewsPost({post, posts}) {

    return (
        <MainLayout>
            <PostWrapper>
                <div>
                    <ArrowButton back>назад</ArrowButton>
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
            </PostWrapper>
            <Tape>
                <div className="title">Читайте также:</div>
                <div className='list'>
                    {_.shuffle(posts).map((post, id) => {
                        if (id > 3) {
                            return null
                        }
                        return <NewsCard post={post} />
                    })}
                </div>
            </Tape>
        </MainLayout>
    )
}


const PostWrapper = styled.div`
  display: flex;
  margin: 50px auto;
  max-width: 800px;
`

const Tape = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;
  
  .title {
    margin-bottom: 20px;
  }
  
  .list {
    display: flex;
  }
`


NewsPost.getInitialProps = async ctx => {
    const { data } = await API.getNewPost(ctx.query.id)
    const posts = await API.getNews()
    return { post: data.data, posts: posts.data.data }
}