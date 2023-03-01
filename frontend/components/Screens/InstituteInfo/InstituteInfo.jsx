import React from "react";
import {useRouter} from "next/router";
import MainHeader from "../../UI/MainHeader";
import {SidebarLinks} from "../../../styles/sharedStyle";
import PagePost from "../../UI/PagePost";
import Layout from "../../Layouts/Layout";
import styled from "styled-components";
import Link from "next/link";

const InstituteInfo = ({ posts }) => {
  const router = useRouter();
  const [currentPost, setCurrentPost] = React.useState(posts[0]);

  const selectPost = (post) => {
    router.push(`${router.asPath.split("?")[0]}/?postId=${post.id}`, undefined, {
      shallow: true,
    });
  };

  React.useEffect(() => {
    if (window) {
      window.scrollTo({top: 0})
    }

    const loadedPost = router.query.postId
        ? posts.find(({ id }) => id === Number(router.query.postId))
        : posts[0];
    setCurrentPost(loadedPost);
  }, [router.query.postId]);

  const content = (
      <>
        <MainHeader>СВЕДЕНИЯ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ</MainHeader>
        <Wrapper>
          <SidebarLinks>
            {posts.map((post, i) => {
              const isActive = post.id === currentPost.id ? "active" : "";

              return (
                  <>
                    <a
                        className={isActive}
                        onClick={() => selectPost(post)}
                        key={post.id}
                    >
                      {post?.attributes?.name}
                    </a>
                    {i === 4 &&
                        <Link href='/employees'>
                          <a>Руководство. Педагогический (научно-педагогический) состав</a>
                        </Link>}
                  </>
              );
            })}
          </SidebarLinks>
          <PagePost post={currentPost} />
        </Wrapper>
      </>
  );

  return <Layout>{content}</Layout>;
}

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;


export default InstituteInfo;
