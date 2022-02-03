import Link from 'next/link'
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import Tag from "../Shared/Tag";


const SpecCard = ({item}) => {

    return (
        <Wrapper imgUrl={process.env.HOST_DEV + item.cover.data[0].attributes.url}>
            <div className='title'>{item.name}</div>
            <div>
                <div className='info-block'>
                    <div className='info'>Срок обучения: </div>
                    <div className='value'>{item.duration} </div>
                </div>
                <div className="tags">
                    <Tag white>11 классов</Tag>
                    <Tag white>9 классов</Tag>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  height: 265px;
  padding: 20px;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.56)),
  url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  backdrop-filter: brightness(40%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 50px;
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