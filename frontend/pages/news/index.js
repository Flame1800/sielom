import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import MainHeader from "../../components/Shared/MainHeader";
import styled from "styled-components";
import NewsCard from "../../components/Card/NewsCard";


export default function Events({ news }) {
    return (
        <MainLayout>
                <MainHeader>НОВОСТИ</MainHeader>
            <Content>
            {news.map(post => <NewsCard key={post.id} post={post} />)}
            </Content>
        </MainLayout>
    )
}

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
`

Events.getInitialProps = async () => {
    const { data } = await API.getNews()
    return { news: data.data }
}
