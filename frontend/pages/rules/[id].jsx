import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import styled from "styled-components";
import OutEditorText from "../../components/Editor/OutEditorText";

export default function Rule({post}) {
    return (
        <MainLayout>
                <Title>
                    {post.attributes.title}
                </Title>
                <TextPost>
                    <OutEditorText data={post.attributes.body} />
                </TextPost>
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


Rule.getInitialProps = async ctx => {
    const { data } = await API.getRule(ctx.query.id)
    return { post: data.data }
}