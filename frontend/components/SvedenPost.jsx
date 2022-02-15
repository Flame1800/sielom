import MainLayout from "../layouts/MainLayout";
import MainHeader from "../components/Shared/MainHeader";
import styled from "styled-components";
import React from "react";
import { SidebarLinks } from "../styles/sharedStyle";
import Link from "next/link";
import {API} from "../libs/API";
import PagePost from "./Shared/PagePost";

export default function SvedenPost({ post }) {

    const [posts, setPosts] = React.useState([])

    React.useEffect(async () => {
        const { data } = await API.getSvedens()
        setPosts(data.data)
    }, [])

    const activePost = post ? post : posts[0]

    return (
        <MainLayout>
            <MainHeader>Сведения об организации</MainHeader>
            <Wrapper>
                <SidebarLinks>
                    {posts.map(({ attributes, id }) =>
                        <Link href={`/sveden/${id}`} >
                            <a>
                                <div key={id}>{attributes.name}</div>
                            </a>
                        </Link>)}
                </SidebarLinks>
                <PagePost post={activePost} />
            </Wrapper>
        </MainLayout>
    )
}

const Wrapper = styled.div`
  display: flex;
`


