import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import Link from "next/link";
import {} from "../../styles/homeStyle";
import styled from "styled-components";
import {SidebarLinks} from "../../styles/sharedStyle";
import PagePost from "../../components/Shared/PagePost";
import React from "react";


const Post = ({ post, pages }) => {

    return (
        <MainLayout>
            <Wrapper>
                <SidebarLinks>
                    {pages.map(({ attributes, id }) =>
                        <Link href={`/reception-campain/${id}`} >
                            <a>
                                <div key={id}>{attributes.name}</div>
                            </a>
                        </Link>)}
                </SidebarLinks>
                <PagePost post={post} />
            </Wrapper>
        </MainLayout>
    )
}



Post.getInitialProps = async ctx => {
    const post = await API.getPage(ctx.query.id)
    const pages = await API.getReceptionCampainPages()
    return { post: post.data.data, pages: pages.data.data  }
}


const Wrapper = styled.div`
  display: flex;
`


export default Post