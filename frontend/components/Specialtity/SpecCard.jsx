import Link from 'next/link'
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import Tag from "../Shared/Tag";


const SpecCard = ({entity}) => {

    const {attributes} = entity
    const img  = attributes.cover.data ? process.env.API_URL + attributes.cover.data[0].attributes.url : null

    return (
        <Wrapper imgUrl={img}>
            <Link href={`/specialties/${entity.id}`} >
                <a>
                    <div className='title'>{attributes.name}</div>
                    <div>
                        <div className="tags">
                            {attributes.durations.find(item => item.class === 'nine') && <Tag white>9 классов</Tag>}
                            {attributes.durations.find(item => item.class === 'eleven') && <Tag white>11 классов</Tag>}
                            {attributes.durations.find(item => item.form === 'full_time') && <Tag white>очно</Tag>}
                            {attributes.durations.find(item => item.form === 'distant') && <Tag white>заочно</Tag>}
                        </div>
                    </div>
                </a>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: calc(50% - 20px);
  margin: 10px;
  height: 265px;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.56)), 
  linear-gradient(rgba(0, 0, 0, 0.56), rgba(255, 255, 255, 0)), 
  url(${props => props.imgUrl}) no-repeat;
  
  background-size: cover;
  position: relative;
  border-radius: 20px;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 265px;
    padding: 20px;

  .title {
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: -0.5px;
    color: #fff;
  }

  .info-block {
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    line-height: 11px;
    letter-spacing: -0.25px;
    margin-bottom: 20px;
    color: #fff;

    .info {
      font-weight: 600;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`

export default SpecCard