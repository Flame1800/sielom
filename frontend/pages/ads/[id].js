import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import Post from "../../components/Screens/Posts/Post";

export default function Ad({ post, posts }) {
    return (
        <Layout>
            <Head>
                <title>{post.attributes.title} - СИЭУиП</title>
            </Head>
            <Post posts={posts} post={post} />
        </Layout>
    );
}

Ad.getInitialProps = async (ctx) => {
    const { data } = await API.getAd(ctx.query.id);
    const posts = await API.getAds();
    return { post: data.data, posts: posts.data.data };
};
