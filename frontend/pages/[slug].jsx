import MainLayout from "../layouts/MainLayout";
import {API} from "../libs/API";
import React from "react";
import ArrowButton from "../components/Shared/ArrowButton";
import PagePost from "../components/Shared/PagePost";

export default function SinglePage({post}) {

    return (
        <MainLayout>
            <ArrowButton back />
            <PagePost post={post} />
        </MainLayout>
    )
}

SinglePage.getInitialProps = async ctx => {
    const { data } = await API.getPageBySlug(ctx.query.slug)
    return { post: data.data[0] }
}