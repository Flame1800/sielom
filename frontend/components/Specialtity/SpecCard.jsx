import Link from 'next/link'
import styled from "styled-components";
import Tag from "../Common/Tag";


const SpecCard = ({entity}) => {

    const {attributes} = entity
    const img  = attributes.cover.data ? process.env.API_URL + attributes.cover.data[0].attributes.url : null
    const isCourse = attributes.education_type === 'courses'

    return (
        <Wrapper imgUrl={img}>
            <Link href={`/specialties/${entity.id}`} >
                <a className='container'>
                    <div className="info">
                        <div className={isCourse ? "title title_small" : 'title'}>{attributes.name}</div>
                        <div>
                            <div className="tags">
                                {attributes.durations.find(item => item.class === 'nine') && <Tag>9 классов</Tag>}
                                {attributes.durations.find(item => item.class === 'eleven') && <Tag>11 классов</Tag>}
                                {attributes.durations.find(item => item.form === 'full_time') && <Tag>очно</Tag>}
                                {attributes.durations.find(item => item.form === 'distant') && <Tag>заочно</Tag>}
                            </div>
                        </div>
                    </div>
                    {img
                        ? <img src={img} className='cover' alt="Фото специальности"/>
                        : <div className='placeholder-cover'>
                            <div className="bg">
                                <img src="/img/opacity-logo.svg" alt="no photo"/>
                            </div>
                        </div>}
                </a>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  max-width: 620px;
  margin: 20px 20px;
  background-size: cover;
  border-radius: 20px;
  border: 1px solid #e5e5e5;

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
      
      &_small {
        font-size: 17px;
        line-height: 22px;
      }
    }

  }

  .placeholder-cover {
    width: 50%;
    min-width: 300px;
    height: 265px;
    object-fit: cover;
    border: 20px solid #fff;
    background: #E2E2E2;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .cover {
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