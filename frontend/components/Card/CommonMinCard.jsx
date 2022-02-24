import Link from 'next/link'
import moment from "moment";
import {CardCategoryName, CardCover, CardParamsBlock, CardTitle, CardWrapper} from "./cardStyle";
import CardPlaceParameter from "./CardPlaceParameter";
import CardDateParameter from "./CardDateParameter";
import styled from "styled-components";


const EventCard = ({post}) => {
    const date = moment(post.attributes.date).calendar()
    const coverImg = post.attributes.cover.data
        ? `${process.env.API_URL}${post.attributes.cover?.data?.attributes.url}`
        : false

    console.log(post)
    return (
        <Wrapper>
            <Link href={`/${post.attributes.start_date ? "events" : "news"}/${post.id}`}>
                <a>
                    <Cover cover={coverImg} />
                    <div>
                        <CardTitle>{post.attributes.title}</CardTitle>
                        <CardParamsBlock>
                            {post.attributes.date && <CardDateParameter date={date} />}
                        </CardParamsBlock>
                    </div>
                </a>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  border-bottom: 1px solid #B1B1B1;
  padding-top: 20px;
  
  a {
    display: flex;
    width: 400px;
  }
`

const Cover = styled.div`
  background: url(${({cover}) => cover});
  background-size: cover;
  min-width: 150px;
  height: 140px;
  border-radius: 8px;
  margin-bottom: 25px;
  margin-right: 20px;
`



export default EventCard