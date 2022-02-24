import {API} from "../../libs/API";
import React from "react";
import PostPages from "../../components/PostPages";

export default function Sveden({posts}) {
    return <PostPages posts={posts} title="Учебный процесс" />
}

Sveden.getInitialProps = async () => {
    const posts = await API.getEdProcess()

    return {
        posts: posts.data.data
    }
}

