import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import PostLayout from "../../layouts/PostLayout";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export default function NewsPost({post}) {
    return (
        <MainLayout>
            <PostLayout>
                <Title>
                    {post.attributes.title}
                </Title>
                <TextPost>

                    <ReactMarkdown escapeHtml={false}>{post.attributes.body}</ReactMarkdown>
                </TextPost>
            </PostLayout>
        </MainLayout>
    )
}


const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #3E3E3E;
  margin-bottom: 20px;
`

const TextPost = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.01em;
  color: #000000;
`


NewsPost.getInitialProps = async ctx => {
    const { data } = await API.getNewPost(ctx.query.id)
    return { post: data.data }
}