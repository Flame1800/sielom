import Link from 'next/link'
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import Tag from "../Shared/Tag";


const SpecCard = ({item}) => {

    return (
        <Wrapper>
            <div className='title'>{item.name}</div>
            <div>
                <div className='info-block'>
                    <div className='info'>Срок обучения: </div>
                    <div className='value'>{item.duration} </div>
                </div>
                <div className="tags">
                    <Tag>11 классов</Tag>
                    <Tag>9 классов</Tag>
                </div>
            </div>
            {item.cover.data &&
            <img src={process.env.HOST_DEV + item.cover.data[0].attributes.url} alt="icon" />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: relative;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  border-radius: 25px;
  height: 265px;
  max-width: 640px;
  width: 100%;
  padding: 20px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 0px 4px 14px rgba(129, 135, 189, 0.15);

  img {
    position: absolute;
    right: 20px;
    bottom: 0;
    height: 170px;
    width: 200px;
    object-fit: contain;
  }


  .title {
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: -0.5px;
    color: ${baseTheme.colors.black};
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
      color: ${baseTheme.colors.black};
    }
  }
`

export default SpecCard