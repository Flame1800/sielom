import Link from 'next/link'
import moment from "moment";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";


const NewsCard = ({post}) => {
    const date = moment(post.attributes.start_date).calendar()

    return (
        <Wrapper>
            <Link href={`/events/${post.id}`}>
                <a>
                    <div>
                        <div className='title'>{post.attributes.title}</div>
                        <div className='info-block'>
                            <div>{date}</div>
                        </div>
                    </div>
                </a>
            </Link>
            <img width={334} height={227} src={`${process.env.HOST_DEV}${post.attributes.images.data[0].attributes.url}`} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top: -1px;
  border: 1px solid ${baseTheme.colors.light};
  display: flex;
  align-items: center;
  background: #fff;

  a {
    padding: 20px;
  }
  
  .head {
    display: flex;
    margin-bottom: 20px;
    
    .category {
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #5C91CE;
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
    width: 100%;
    
    img {
      margin-right: 8px;
    }
  }
`

export default NewsCard