import styled from "styled-components";
import {SpecialityPageTitle} from "../speciality-page-style";


const Advantages = ({ advantages }) => {

    if (advantages.length === 0) {
        return null
    }

    return (
        <Wrapper>
            <SpecialityPageTitle>
                Преимущества обучения у нас
            </SpecialityPageTitle>
            <div className="cards">
                {advantages.map((item, id) =>
                    <div className="card" key={id}>
                            <div className="num">{id + 1}</div>
                            <div className="title">{item.name}</div>
                            <div className="caption">{item.description}</div>
                    </div>
                )}
                {/*<div className="big-shape" />*/}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top: 200px;
  position: relative;

  .big-shape {
    top: 250px;
    left: 90px;
    z-index: -5;
    position: absolute;
    border-radius: 50%;
    width: 870px;
    height: 870px;
    background: linear-gradient(180deg, #FFBB2F 0%, #FF564B 100%);
  }

  .cards {
    max-width: 1000px;
    width: 100%;
    margin-bottom: 30px;


    .card {
      margin-bottom: 70px;
      min-height: 272px;
      border-radius: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px;
      background: rgb(255, 255, 255);
      border: 1px solid #d7d7d7;
      box-shadow: 0 5px 10px 3px rgba(60, 62, 63, 0.11);


      .num {
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 60px;
        color: #000000;
        opacity: 0.6;
      }

      .title {
        margin-top: 25px;
        margin-bottom: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 37px;
        color: #000000;
        width: 60%;
      }

      .caption {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 31px;
        color: #000000;
        width: 60%;
      }
    }
  }
`

export default Advantages
