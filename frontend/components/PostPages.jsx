import MainLayout from "../layouts/MainLayout";
import MainHeader from "./Common/MainHeader";
import styled from "styled-components";
import React from "react";
import { SidebarLinks } from "../styles/sharedStyle";
import PagePost from "./Common/PagePost";
import { useRouter } from 'next/router'

export default function PostPages({ posts, title, notLayout = false }) {

    const router = useRouter()
    const [currentPost, setCurrentPost] = React.useState(posts[0])

    const selectPost = post => {
        router.push(`${router.pathname}/?postId=${post.id}`, undefined, { shallow: true })
    }

    React.useEffect(() => {
        const loadedPost = router.query.postId
            ? posts.find(({id}) => id === Number(router.query.postId))
            : posts[0]
        setCurrentPost(loadedPost)
    }, [router.query.postId])

    const content = (
        <>
            <MainHeader>{title}</MainHeader>
            <Wrapper>
                <SidebarLinks>
                    {posts.map(post => {
                        const isActive = post.id === currentPost.id ? "active" : ""

                        return (
                            <a
                                className={isActive}
                                onClick={() => selectPost(post)}
                                key={post.id}
                            >
                                {post?.attributes?.name}
                            </a>
                        )
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
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`


