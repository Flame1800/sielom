import React from 'react';
import styled from "styled-components";
import {SpecialityPageTitle} from "../speciality-page-style";

const Resume = ({resume}) => {

    if (!resume?.speciality && !resume?.skills) {
        return null
    }

    return (
        <Wrapper>
            <div className="content">
                <div className="title">
                    Ваше резюме после обучения
                </div>
                <div className="blank">
                    <div className="head">
                        <div className="author">
                            <img src="/img/mock-avatar.png" alt="avatar" className="avatar"/>
                            <div>
                                <div className="name">Иван Иванов</div>
                                <div className="speciality">{resume.speciality}</div>
                            </div>
                        </div>
                        {resume.salary && <div className="salary">{resume.salary}</div>}
                    </div>
                    <div className="params">
                        {resume.work_schedule &&
                        <div className="item">
                            <div className="value">Гафик</div>
                           <div className="caption">{resume.work_schedule}</div>
                        </div>}
                        {resume.work_schedule && <div className="item">
                            <div className="value">Опыт работы</div>
                            <div className="caption">
                                {resume.work_expirence}
                            </div>
                        </div>}
                        <div className="item">
                            <div className="value">Образование</div>
                            <div className="caption">
                                Сургутский институт экономики, управления и права
                            </div>
                        </div>
                    </div>
                    {resume.skills &&
                    <div className="skills">
                        <div className="title">Ключевые навыки</div>
                        <div dangerouslySetInnerHTML={{ __html: resume.skills }} />
                    </div>}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  background: #FFDD96;
  box-shadow: 0px -5px 18px rgba(186, 179, 164, 0.37);
  border-radius: 30px;
  padding-top: 70px;
  margin-top: 200px;
  
  .content {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    
    .title {
      max-width: 480px;
      font-weight: 600;
      font-size: 36px;
      line-height: 45px;
      letter-spacing: -1px;
      color: #402B01;
      margin-bottom: 50px;
      position: relative;
      z-index: 2;
    }
  }
  
  .blank {
    margin-top: 40px;
    background: #FFFAF0;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 40px 60px 170px 60px;
    
    @media (max-width: 768px) {
      padding: 50px 25px;
    }

    .head {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      
      .author {
        display: flex;
        align-items: center;
        
        .avatar {
          margin-right: 20px;
        }
        
        .name {
          font-weight: 600;
          font-size: 24px;
          line-height: 26px;
          letter-spacing: -1px;
          margin-bottom: 10px;
          color: #000000;
        }
        
        .speciality {
          font-weight: 400;
          font-size: 18px;
          line-height: 45px;
          letter-spacing: -1px;
          color: #5F5F5F;
          margin-top: -15px;
        }
      }
      
      .salary {
        font-weight: 600;
        font-size: 28px;
        line-height: 45px;
        letter-spacing: -1px;
        color: #000000;
      }
    }
    
    .params {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      
      .item {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        
        .value {
          font-weight: 500;
          font-size: 16px;
          line-height: 45px;
          letter-spacing: -1px;
          color: #5F5F5F;
          margin-top: 20px;
          margin-bottom: -5px;
        }
        
        .caption {
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -1px;
          color: #000000;
        }
      }
    }
    
    .skills {
      .title {
        margin-bottom: 27px;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: -1px;
        color: #000000;
        margin-left: -20px;
      }
      
      margin-top: 60px;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 34px;
      margin-left: 20px;
    }
  }
`

export default Resume;