import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import MainHeader from "../../components/Shared/MainHeader";
import styled from "styled-components";
import ArrowButton from "../../components/Shared/ArrowButton";
import Tag from "../../components/Shared/Tag";
import Button from "../../components/Shared/Button";


export default function Specialties({ entity }) {
    const img  = entity.attributes.cover?.data ? process.env.API_URL + entity.attributes.cover.data[0].attributes.url : null
    const {attributes} = entity
    const fullTime = attributes.durations.filter(item => item.form === 'full_time')
    const distant = attributes.durations.filter(item => item.form === 'distant')

    const mapClass = (classItem) => `На базе ${classItem === 'nine' ? 9 : 11} классов`

    console.log(fullTime, distant)

    return (
        <MainLayout>
            <Wrapper>
                <ArrowButton back>назад</ArrowButton>
                <img className="cover" width="1000" src={img} />
                <MainHeader>{attributes.name}</MainHeader>
                <Button>Подать заявку</Button>

                <div className="form-education-params">
                    <div className="item">
                        {fullTime.length > 0 && <div className="param">
                            <div className="form">Очно</div>
                            <div className="items">
                                {fullTime.map(item => <div className='item'>
                                    <div className="class">{mapClass(item.class)}:</div>
                                    <Tag>{item.duration}</Tag>
                                </div>)}
                            </div>
                        </div>}
                        {distant.length > 0 && <div className="param">
                            <div className="form">Заочно</div>
                            <div className="items">
                                {distant.map(item => <div className='item'>
                                    <div className="class">{mapClass(item.class)}:</div>
                                    <Tag>{item.duration}</Tag>
                                </div>)}
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="description">
                    {attributes.description}
                </div>
            </Wrapper>
        </MainLayout>
    )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  padding-top: 70px;
  
  .cover {
    margin-top: 40px;
  }
  
  .form-education-params {
    display: flex;
    margin-top: 60px;
    
    .param {
      display: flex;
      flex-direction: column;
      margin-right: 50px;
    }
    
    .form {
      font-weight: 600;
      font-size: 24px;
      line-height: 11px;
      letter-spacing: -0.25px;
      color: #B1B1B1;
      margin-bottom: 30px;
    }
    
    .items {
      display: flex;
      flex-direction: column;
    }
    
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      
      .class {
        margin-right: 20px;
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 14px;
        line-height: 11px;
        letter-spacing: -0.25px;
      }
    }

  }
  
  .description {
    margin-top: 30px;
    margin-bottom: 100px;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 50px;
    letter-spacing: -0.25px;
    color: #3E3E3E;

  }
`

Specialties.getInitialProps = async (ctx) => {
    const { data } = await API.getSpecialty(ctx.query.id)
    return { entity: data.data }
}
