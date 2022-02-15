import { CardParameterWrap} from "./cardStyle";


const CardPlaceParameter = ({ place }) => {
    return (
        <CardParameterWrap>
            <img src='/img/map-pin-icon.svg' alt='icon-place' />
            <div>{place}</div>
        </CardParameterWrap>
    )

}

export default CardPlaceParameter
