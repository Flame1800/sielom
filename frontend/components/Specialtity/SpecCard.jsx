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
                <a className='container'>
                    <div className="info">
                        <div className='title'>{attributes.name}</div>
                        <div>
                            <div className="tags">
                                {attributes.durations.find(item => item.class === 'nine') && <Tag>9 классов</Tag>}
                                {attributes.durations.find(item => item.class === 'eleven') && <Tag>11 классов</Tag>}
                                {attributes.durations.find(item => item.form === 'full_time') && <Tag>очно</Tag>}
                                {attributes.durations.find(item => item.form === 'distant') && <Tag>заочно</Tag>}
                            </div>
                        </div>
                    </div>
                    <img src={img} alt="Фото специальности"/>
                </a>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: calc(50% - 50px);
  margin: 20px 20px;
  height: 265px;
  background-size: cover;

  .container {
    display: flex;
    justify-content: space-between;
  }

  .info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 265px;
    width: 50%;

    .title {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      letter-spacing: -0.5px;
    }

  }

  img {
    width: 50%;
    padding: 20px;
    object-fit: cover;
    border-radius: 35px;
  }

`

export default SpecCard