import styled from "styled-components";
import React from "react";
import { SpecialityPageTitle } from "../Specialties.style";

const TrainingPlan = ({ training_plan }) => {
  const [openTab, setTab] = React.useState(training_plan[0]);
  const openTabHandle = (item) => {
    return item.course === openTab.course
      ? setTab({ course: null })
      : setTab(item);
  };

  if (training_plan.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <div className="title-cont">
        <div className="title">План обучения</div>
        <img src="/img/title-shape.png" alt="" />
      </div>
      <div className="items">
        {training_plan.map((item) => (
          <Tab key={item.course} activeTab={openTab.course === item.course}>
            <div className="head" onClick={() => openTabHandle(item)}>
              <div className="course">{item.course}</div>
              <img src="/img/accordeon-plus.svg" alt="plus-icon" />
            </div>
            {openTab.course === item.course && (
              <div className="content">
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            )}
          </Tab>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 200px;
  max-width: 1000px;
  width: 100%;

  .title-cont {
    margin-bottom: 50px;

    @media (max-width: 600px) {
      img {
        width: 100%;
      }
    }
  }

  .title {
    max-width: 480px;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -1px;
    color: #3e3e3e;
    margin-bottom: -24px;
    z-index: 1;
    position: relative;
  }

  .items {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    border-top: 1px solid #5f5f5f;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      right: -150px;
      top: -100px;
      background: url("/img/blicks-draw-up.png") no-repeat;
      background-size: cover;
      width: 175px;
      height: 85px;

      @media (max-width: 1300px) {
        display: none;
      }
    }

    &:after {
      content: "";
      position: absolute;
      left: -80px;
      bottom: -100px;
      background: url("/img/blicks-draw-down.png") no-repeat;
      background-size: cover;
      width: 85px;
      height: 120px;

      @media (max-width: 1300px) {
        display: none;
      }
    }
  }
`;

const Tab = styled.div`
  border-bottom: 1px solid #5f5f5f;

  .head {
    padding: 0 15px;
    width: 100%;
    min-height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background: #efefef;
    }

    .course {
      font-weight: 600;
      font-size: 24px;
      line-height: 31px;
      color: #5f5f5f;
    }

    img {
      transition: 0.6s;
      transform: ${({ activeTab }) =>
        activeTab ? "rotate(45deg)" : "rotate(0deg)"};
    }
  }

  .content {
    margin-top: 10px;
    padding: 0 15px;
    font-size: 18px;
    line-height: 31px;
    margin-bottom: 50px;
  }
`;

export default TrainingPlan;
