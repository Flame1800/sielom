import {API} from "../../libs/API";
import React from "react";
import SvedenPost from "../../components/SvedenPost";

export default function SvedenPostPage({ post }) {
    return <SvedenPost post={post} />
}


SvedenPostPage.getInitialProps = async (ctx) => {
    const { data } = await API.getPost(ctx.query.id)

    return { post: data.data, posts: data.data }
}
