import Link from 'next/link'
import styled from "styled-components";
import Tag from "../Common/Tag";


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
  max-width: 620px;
  margin: 20px 20px;
  background-size: cover;
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    
    @media (max-width: 768px) {
      width: auto;
    }
    
    .title {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      letter-spacing: -0.5px;
      margin-bottom: 20px;
    }

  }

  img {
    width: 50%;
    min-width: 300px;
    height: 265px;
    padding: 20px;
    object-fit: cover;
    border-radius: 35px;

    @media (max-width: 768px) {
      margin-top: 40px;
      width: 100%;
      padding: 0;
      border-radius: 15px;
    }

  }

`

export default SpecCard