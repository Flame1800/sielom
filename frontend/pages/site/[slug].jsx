import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import React from "react";
import ArrowButton from "../../components/Common/ArrowButton";
import PagePost from "../../components/Common/PagePost";
import styled from "styled-components";

export default function SinglePage({post}) {
    console.log(post)

    return (
        <MainLayout>
            <PostWrapper>
                <ArrowButton back>назад</ArrowButton>
                <PagePost post={post} />
            </PostWrapper>
        </MainLayout>
    )
}

const PostWrapper = styled.div`
  margin-top: 50px;
`


SinglePage.getInitialProps = async ctx => {
    const { data } = await API.getPageBySlug(ctx.query.slug)
    return { post: data.data[0] }
}