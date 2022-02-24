import {API} from "../libs/API";
import React from "react";
import PostPages from "../components/PostPages";

export default function Sveden({posts}) {
    return <PostPages posts={posts} title="worldskills russia" />
}

Sveden.getInitialProps = async () => {
    const posts = await API.getWordskills()

    return {
        posts: posts.data.data
    }
}

