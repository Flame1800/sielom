import styled from "styled-components";
import React from "react";
import {SpecialityPageTitle} from "../speciality-page-style";

const TrainingPlan = ({training_plan}) => {

    const [openTab, setTab] = React.useState(tabs[0])
    const openTabHandle = (item) => {
        return item.course === openTab.course ?  setTab({ course: null }) : setTab(item)
    }


    return (
        <Wrapper>
            <SpecialityPageTitle>Чему вы научитесь</SpecialityPageTitle>
            <div className="items">
                    {tabs.map(item =>
                        <Tab key={item.course} activeTab={openTab.course === item.course}>
                            <div className="head" onClick={(() => openTabHandle(item))} >
                                <div className="course">{item.course}</div>
                                <img src='/img/accordeon-plus.svg' alt='plus-icon' />
                            </div>
                            {openTab.course === item.course
                            &&  <div className="content">
                                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                </div>}
                        </Tab>)}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top: 130px;

  .title {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: -1px;
    color: #3E3E3E;
    margin-bottom: 50px;
  }

  .items {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    border-top: 1px solid #5F5F5F;
  }
`

const Tab = styled.div`
  border-bottom: 1px solid #5F5F5F;

  .head {
    padding: 0 15px;
    width: 100%;
    min-height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .2s;
    cursor: pointer;

    &:hover {
      background: #efefef;
    }

    .course {
      font-weight: 600;
      font-size: 24px;
      line-height: 31px;
      color: #5F5F5F;
    }
    
    img {
      transition: .6s;
      transform: ${({activeTab}) => activeTab ? "rotate(45deg)" : "rotate(0deg)"};
    }
  }

  .content {
    margin-top: 10px;
    padding: 0 15px;
    font-size: 18px;
    line-height: 31px;
    margin-bottom: 50px;
  }
`

export default TrainingPlan