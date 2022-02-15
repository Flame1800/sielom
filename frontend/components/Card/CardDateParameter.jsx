import { CardParameterWrap } from "./cardStyle";


const CardDateParameter = ({ date }) => {
    return (
        <CardParameterWrap>
            <img src='/img/clock.svg' />
            <div>{date}</div>
        </CardParameterWrap>
    )

}

export default CardDateParameter
