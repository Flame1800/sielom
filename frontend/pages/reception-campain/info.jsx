import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import Link from "next/link";
import {} from "../../styles/homeStyle";
import styled from "styled-components";
import {SidebarLinks} from "../../styles/sharedStyle";
import PagePost from "../../components/Shared/PagePost";
import React from "react";
import PostPages from "../../components/PostPages";


const Post = ({ posts }) => {

    return <PostPages posts={posts} title={"Приемная компания"} />
}



Post.getInitialProps = async ctx => {
    const posts = await API.getReceptionCampainPages()
    return { posts: posts.data.data  }
}


export default Post