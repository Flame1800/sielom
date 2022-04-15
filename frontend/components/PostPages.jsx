import MainLayout from "../layouts/MainLayout";
import MainHeader from "../components/Shared/MainHeader";
import styled from "styled-components";
import React from "react";
import { SidebarLinks } from "../styles/sharedStyle";
import PagePost from "./Shared/PagePost";
import { useRouter } from 'next/router'

export default function PostPages({ posts, title, notLayout = false }) {

    const router = useRouter()
    const [currentPost, setCurrentPost] = React.useState(posts[0])

    const selectPost = post => {
        router.push(`${router.pathname}/?post=${post.attributes.name}`, undefined, { shallow: true })
    }

    React.useEffect(() => {
        const loadedPost = router.query.post
            ? posts.find(({attributes}) => attributes.name === router.query.post)
            : posts[0]
        setCurrentPost(loadedPost)
    }, [router.query.post])

    const content = (
        <>
            <MainHeader>{title}</MainHeader>
            <Wrapper>
                <SidebarLinks>
                    {posts.map(post => {
                        const isActive = post.id === currentPost.id ? "active" : ""

                        return <div className={isActive} onClick={() => selectPost(post)} key={post.id}>{post?.attributes?.name}</div>
                    })}
                </SidebarLinks>
                <PagePost post={currentPost} />
            </Wrapper>
        </>
    )

    if (notLayout) {
        return content
    }

    return (
        <MainLayout>
            {content}
        </MainLayout>
    )
}

const Wrapper = styled.div`
  display: flex;
`


