import {API} from "../libs/API";
import React from "react";
import PostPages from "../components/PostPages";

export default function Sveden({posts}) {
    return <PostPages posts={posts} title="СВЕДЕНИЯ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ" />
}

Sveden.getInitialProps = async () => {
    const posts = await API.getSvedens()

    return {
        posts: posts.data.data
    }
}

