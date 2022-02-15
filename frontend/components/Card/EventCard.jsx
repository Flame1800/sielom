import Link from 'next/link'
import moment from "moment";
import 'moment/locale/ru'
import {CardCategoryName, CardCover, CardParamsBlock, CardTitle, CardWrapper} from "./cardStyle";
import CardPlaceParameter from "./CardPlaceParameter";
import CardDateParameter from "./CardDateParameter";


const EventCard = ({event}) => {
    const date = moment(event.attributes.start_date).calendar()
    const coverImg = event.attributes.cover.data
        ? `${process.env.API_URL}${event.attributes.cover?.data?.attributes.url}`
        : false

    console.log(event.attributes)

    return (
        <CardWrapper>
            <Link href={`/events/${event.id}`}>
                <a>
                    <CardCover cover={coverImg} />
                    <CardCategoryName>мероприятие</CardCategoryName>
                    <CardTitle>{event.attributes.title}</CardTitle>
                    <CardParamsBlock>
                        {event.attributes.place && <CardPlaceParameter place={event.attributes.place} />}
                        <CardDateParameter date={date} />
                    </CardParamsBlock>
                </a>
            </Link>
        </CardWrapper>
    )
}


export default EventCard