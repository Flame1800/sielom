import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import moment from "moment";
import 'moment/locale/ru'
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import React from "react";
import PostCover from "../../components/Post/PostCover";
import {PostDate, PostText, PostTitle} from "../../components/Post/PostStyle";
import normalizeDate from "../../libs/normalizeDate";
import _ from "lodash";
import NewsMinCard from "../../components/Card/CommonMinCard";
import MinTapePost from "../../components/Post/MinTapePost";

export default function Rule({event, events}) {

    const {attributes} = event
    const date = moment(attributes.start_date).calendar()

    return (
        <MainLayout>
            <PostWrapper>
                <div>
                    <PostTitle>
                        {attributes.title}
                    </PostTitle>
                    {attributes.date
                    && <PostDate>{normalizeDate(attributes.date)}</PostDate>}
                    <EventInfo>
                        {attributes.place && <div className="item">
                            <div className='title'>Место</div>
                            <div className='value'>{attributes.place}</div>
                        </div>}
                        <div className="item">
                            <div className='title'>Дата и время</div>
                            <div className='value'>{date}</div>
                        </div>
                    </EventInfo>
                    <PostCover entity={event} />
                    <PostText>
                        <div dangerouslySetInnerHTML={{__html: attributes.description }} />
                    </PostText>
                </div>
                <MinTapePost title={"Читайте также:"} posts={events} />
            </PostWrapper>
        </MainLayout>
    )
}

Rule.getInitialProps = async ctx => {
    const { data } = await API.getEvent(ctx.query.id)
    const events = await API.getEvents()
    return { event: data.data, events: events.data.data }
}


const PostWrapper = styled.div`
  display: flex;
  margin-top: 50px;
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
    border-radius: 10px;
    border: 2px solid ${baseTheme.colors.gold};
    padding: 20px;
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
const ListPosts = styled.div`
  margin-left: 10%;
  
  .title {
    margin-bottom: 40px;
  }
`


