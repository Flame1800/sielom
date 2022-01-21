import MainLayout from "../../layouts/MainLayout";
import router from "next/router";
import {API} from "../../libs/API";
import OutEditorText from "../../components/Editor/OutEditorText";
import moment from "moment";
import 'moment/locale/ru'
import PostLayout from "../../layouts/PostLayout";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";

export default function Rule({event}) {

    const {attributes} = event
    const date = moment(attributes.start_date).calendar()

    return (
        <MainLayout>
            <PostLayout>
                <Title>
                    {attributes.title}
                </Title>
                <EventInfo>
                    <div className="item">
                        <div className='title'>Место</div>
                        <div className='value'>{attributes.place}</div>
                    </div>
                    <div className="item">
                        <div className='title'>Дата и время</div>
                        <div className='value'>{date}</div>
                    </div>
                </EventInfo>
                {attributes.cover.data && <div className="flex w-full">
                         <img
                            src={`http://localhost:1337${attributes.cover.data.attributes.url}`}
                            alt={'Не удалось заргуить изображение'}
                            height={400}
                            className="max-w-full h-96 rounded-xl my-4 mr-8" />
                     </div>}
                <TextPost>
                    {attributes.description}
                </TextPost>
            </PostLayout>
        </MainLayout>
    )
}

Rule.getInitialProps = async ctx => {
    const { data } = await API.getEvent(ctx.query.id)
    return { event: data.data }
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
  margin-top: 20px;
`

const EventInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 500px;
  margin-top: 60px;
  margin-bottom: 40px;
  justify-content: space-between;
  
  .item {
    border-left: 2px solid ${baseTheme.colors.gold};
    padding-left: 10px;
    padding-top: 3px;
  }
  
  .title {
    font-family: Playfair Display, sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 16px;
    letter-spacing: 1px;
    color: #3E3E3E;
    margin-bottom: 15px;
  }
  
  .value {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #5F5F5F;
  }
`

