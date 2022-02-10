import Link from 'next/link'
import moment from "moment";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";


const EventCard = ({event}) => {
    const date = moment(event.attributes.start_date).calendar()

    const coverImg = event.attributes.cover.data
        ? `${process.env.HOST_DEV}${event.attributes.cover?.data?.attributes.url}`
        : false

    return (
        <Wrapper>
            <Link href={`/events/${event.id}`}>
                <a>

                    <Cover cover={coverImg} />
                    <div>
                        <div className='category'>мероприятие</div>
                        <div className='title'>{event.attributes.title}</div>
                        <div className='info-block'>
                            <div className='info-item'>
                                <img src='/img/clock.svg' />
                                <div>{date}</div>
                            </div>
                            <div className='info-item'>
                                <img src='/img/map-pin-icon.svg' />
                                <div>{event.attributes.place}</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </Wrapper>
    )
}

const  Cover = styled.div`
  background: url(${({cover}) => cover});
  background-size: cover;
  width: 100%;
  height: 240px;
  border-radius: 16px;
  border: 1px solid #B1B1B1;
  margin-bottom: 25px;
`

const Wrapper = styled.div`
  margin-right: 10px;
  max-width: 300px;
  min-width: 220px;
  width: 100%;

  .category {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 13px;
    text-transform: uppercase;
    color: #9D9D9D;
  }

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    min-height: 70px;
    color: #3E3E3E;
  }

  .info-block {
    display: flex;
    flex-direction: column;
    max-width: 530px;
    width: 100%;
    margin-top: 20px;
  }

  .info-item {
    display: flex;
    align-items: center;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;
    color: #3E3E3E;

    img {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
  }
`

export default EventCard