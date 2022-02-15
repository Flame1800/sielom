import Link from 'next/link'
import moment from "moment";
import {CardCategoryName, CardCover, CardParamsBlock, CardTitle, CardWrapper} from "./cardStyle";
import CardPlaceParameter from "./CardPlaceParameter";
import CardDateParameter from "./CardDateParameter";


const EventCard = ({post}) => {
    const date = moment(post.attributes.date).calendar()
    const coverImg = post.attributes.cover.data
        ? `${process.env.API_URL}${post.attributes.cover?.data?.attributes.url}`
        : false

    return (
        <CardWrapper>
            <Link href={`/news/${post.id}`}>
                <a>
                    <CardCover cover={coverImg} />
                    <CardCategoryName>новость</CardCategoryName>
                    <CardTitle>{post.attributes.title}</CardTitle>
                    <CardParamsBlock>
                        {post.attributes.date && <CardDateParameter date={date} />}
                    </CardParamsBlock>
                </a>
            </Link>
        </CardWrapper>
    )
}


export default EventCard