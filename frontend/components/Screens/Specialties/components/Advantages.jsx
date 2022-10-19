import styled from "styled-components";
import { SpecialityPageTitle } from "../Specialties.style";

const Advantages = ({ advantages }) => {
  if (advantages.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <SpecialityPageTitle>Преимущества обучения у нас</SpecialityPageTitle>
      <div className="cards">
        {advantages.map((item, id) => (
          <div className="card" key={id}>
            <div className="num">{id + 1}</div>
            <div className="title">{item.name}</div>
            <div className="caption">{item.description}</div>
          </div>
        ))}
        <div className="shape blue-shape" />
        <div className="shape big-shape" />
        <div className="shape green-shape" />
        <div className="shape red-shape" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 200px;
  position: relative;
  width: 100%;
  max-width: 1000px;

  .red-shape {
    position: absolute;
    top: 15%;
    right: -20%;
    border-radius: 50%;
    z-index: -7;
    width: 686px;
    height: 674.57px;
    background: linear-gradient(180.24deg, #fc4343 0.21%, #ffffff 89.45%);
    pointer-events: none;
  }

  .blue-shape {
    position: absolute;
    width: 600px;
    height: 590px;
    top: 35%;
    left: -40%;
    border-radius: 50%;
    z-index: -5;
    background: linear-gradient(180deg, #1e78e9 0%, #ffffff 100%);
  }

  .green-shape {
    top: 50%;
    right: -30%;
    position: absolute;
    border-radius: 50%;
    width: 485px;
    height: 477px;
    z-index: -5;
    background: linear-gradient(180deg, #fff967 0%, #3ecb0c 100%);
  }

  .big-shape {
    top: 250px;
    left: 90px;
    z-index: -5;
    position: absolute;
    border-radius: 50%;
    width: 870px;
    height: 870px;
    background: linear-gradient(180deg, #ffbb2f 0%, #ff564b 100%);
  }

  @media screen and (max-width: 800px) {
    .shape {
      width: 190px;
      height: 140px;
    }

    .red-shape {
      left: 60px;
    }

    .big-shape {
      left: 50px;
    }

    .green-shape {
      left: 40px;
    }
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
      background: rgba(255, 255, 255, 0.57);
      box-shadow: 0 5px 10px 3px rgba(60, 62, 63, 0.11);
      backdrop-filter: blur(15px);

      .num {
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 60px;
        color: #000000;
        opacity: 0.6;
      }

      .title {
        word-break: break-word;
        margin-top: 25px;
        margin-bottom: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 37px;
        color: #000000;
        max-width: 100%;
      }

      .caption {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 31px;
        color: #000000;
      }
    }
  }
`;

export default Advantages;
