import React from 'react';
import styled from "styled-components";
import {SpecialityPageTitle} from "../speciality-page-style";

const Resume = ({resume}) => {


    return (
        <Wrapper>
            <div className="content">
                <SpecialityPageTitle>
                    Ваше резюме после обучения
                </SpecialityPageTitle>
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
  background: #FFFAF0;
  box-shadow: 0px -5px 18px rgba(186, 179, 164, 0.37);
  border-radius: 30px;
  padding-top: 70px;
  padding-bottom: 170px;
  margin-top: 170px;
  
  .content {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;    
  }
  
  .blank {
    margin-top: 40px;
    border: 1px solid #B1B1B1;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 30px 80px;
    
    .head {
      display: flex;
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
          line-height: 45px;
          letter-spacing: -1px;
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
      justify-content: space-between;
      
      .item {
        width: 33%;
        display: flex;
        flex-direction: column;
        
        .value {
          font-weight: 500;
          font-size: 16px;
          line-height: 45px;
          letter-spacing: -1px;
          color: #5F5F5F;
          margin-bottom: 10px;
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