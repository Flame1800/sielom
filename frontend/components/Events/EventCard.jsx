import Link from 'next/link'
import moment from "moment";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";


const EventCard = ({event}) => {
    const date = moment(event.attributes.start_date).calendar()

    return (
        <Wrapper>
            <Link href={`/events/${event.id}`}>
                <a>
            <div className='head'>
                <div className='category'>Дизайн</div>
            </div>
                    <div>
                        <div className='title'>{event.attributes.title}</div>
                        <div className='info-block'>
                            <div className='info-item'>
                                <img src='/img/clock.png' />
                                <div>{date}</div>
                            </div>
                            <div className='info-item'>
                                <img src='/img/map-pin-icon.png' />
                                <div>{event.attributes.place}</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top: -1px;
  border: 1px solid ${baseTheme.colors.light};
  padding: 30px;
  background: #fff;

  &:hover {
    background: rgb(255, 254, 248);
    border: 1px solid ${baseTheme.colors.gold};
  }

  .head {
    display: flex;
    margin-bottom: 20px;

    .category {
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: ${baseTheme.colors.gold};
    }
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.01em;
    max-width: 530px;
  }

  .info-block {
    display: flex;
    max-width: 530px;
    width: 100%;
    margin-top: 50px;
  }

  .info-item {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: .8em;

    img {
      margin-right: 8px;
      width: 30px;
      height: 30px;
      object-fit: none;
    }
  }
`

export default EventCard