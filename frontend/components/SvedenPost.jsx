import MainLayout from "../layouts/MainLayout";
import MainHeader from "../components/Shared/MainHeader";
import styled from "styled-components";
import React from "react";
import ReactMarkdown from 'react-markdown'
import {SidebarLinks, SidebarWrapper} from "../styles/sharedStyle";
import Link from "next/link";
import {API} from "../libs/API";

export default function SvedenPost({ post }) {

    const [posts, setPosts] = React.useState([])

    React.useEffect(async () => {
        const { data } = await API.getSvedens()
        setPosts(data.data)
    }, [])

    const activePost = post ? post : posts[0]

    console.log(activePost)

    return (
        <MainLayout>
            <MainHeader>Сведения об организации</MainHeader>
            <SidebarWrapper>
                <SidebarLinks>
                    {posts.map(({ attributes, id }) =>
                        <Link href={`/sveden/${id}`} >
                            <a>
                                <div key={id}>{attributes.name}</div>
                            </a>
                        </Link>)}
                </SidebarLinks>
                <div className="body-post">
                    <Content>
                        {activePost && <>
                            <div className="text-info">
                                {activePost.attributes.name}
                            </div>
                            <div className="post-md">
                                < dangerouslySetInnerHTML={{__html: activePost.attributes.body }} />
                            </div>
                        </>}
                    </Content>
                </div>
            </SidebarWrapper>
        </MainLayout>
    )
}

const Content = styled.div`
  padding-bottom: 80px;
  .text-info {
    font-weight: 500;
    font-size: 27px;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: #3E3E3E;
    margin-bottom: 40px;
  }
`