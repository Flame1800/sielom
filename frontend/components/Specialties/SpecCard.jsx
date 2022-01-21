import Link from 'next/link'
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import Tag from "../Shared/Tag";


const SpecCard = () => {
    return (
        <Wrapper>
            <div className='title'>Графический дизайн</div>
            <div>
                <div className='info-block'>
                    <div className='info'>Срок обучения: </div>
                    <div className='value'>3 года и 10 месяцев </div>
                </div>
                <div className="tags">
                    <Tag>11 классов</Tag>
                    <Tag>9 классов</Tag>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: calc(100% - 20px);
  margin: 10px auto;
  border-radius: 10px;
  height: 265px;
  padding: 20px;
  //background: linear-gradient(256.83deg, #FDF185 0.62%, #CCFFC4 100%);
  background: linear-gradient(256.83deg, ${baseTheme.colors.gold}, #ffd6a5 100%);
  //background: url('/img/bg-spec.png');
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 50px;
    letter-spacing: -0.5px;
    color: #3E3E3E;
  }

  .info-block {
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    line-height: 11px;
    letter-spacing: -0.25px;
    margin-bottom: 20px;

    .info {
      font-weight: 600;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`

export default SpecCard