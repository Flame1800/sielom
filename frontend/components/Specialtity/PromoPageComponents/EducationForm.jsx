import Tag from "../../Shared/Tag";
import styled from "styled-components";


const EducationForm = ({durations}) => {
    const fullTime = durations.filter(item => item.form === 'full_time')
    const distant = durations.filter(item => item.form === 'distant')
    const mapClass = (classItem) => `На базе ${classItem === 'nine' ? 9 : 11} классов`

    return (
        <Wrapper>
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
        </Wrapper>
    )
}

const Wrapper = styled.div`
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
`

export default EducationForm