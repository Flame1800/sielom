import React from 'react';
import MainLayout from "../layouts/MainLayout";
import {Title} from "../styles/homeStyle";
import MainHeader from "../components/Common/MainHeader";
import {API} from "../libs/API";
import Events from "./news";
import FileContainer from "../components/Common/Files/FileContainer";
import styled from "styled-components";
import FileHolder from "../components/Common/Files/FileHolder";
import {baseTheme} from "../styles/theme";

const Schedule = ({schedule}) => {
    console.log(schedule)
    return (
        <MainLayout>
            <MainHeader>Расписание</MainHeader>
            <Wrapper className="content">
                <FileContainer files={schedule.partTimeScheduleFiles} title="Очно-заочная форма обучения" />
                <FileContainer files={schedule.sessionDates} title="Сроки сессии для заочного отделения" />

                <div className="schedule-data">
                    <div className="title">Очная форма обучения</div>
                    <div className="schedule-columns">
                        {schedule.fullTimeSchedule.map(item => {
                            if (!item.files.data) return null

                            return (
                                <div className="column">
                                    <div className="column-head">
                                        <div className="coll-name">{item.name}</div>
                                        <div className="coll-caption">{item.caption}</div>
                                    </div>
                                    <div className="files">
                                        {item.files.data.map(file => {
                                            return (
                                                <FileHolder file={file.attributes} key={file.id} />
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="schedule-data">
                    <div className="title">Заочная форма обучения</div>
                    <div className="schedule-columns">
                        {schedule.distantSchedule.map(item => {
                            if (!item.files.data) return null

                            return (
                                <div className="column">
                                    <div className="column-head">
                                        <div className="coll-name">{item.name}</div>
                                        <div className="coll-caption">{item.caption}</div>
                                    </div>
                                    <div className="files">
                                        {item.files.data.map(file => {
                                            return (
                                                <FileHolder file={file.attributes} key={file.id} />
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


            </Wrapper>

        </MainLayout>
    );
};


Schedule.getInitialProps = async () => {
    const { data } = await API.getSchedule()
    return { schedule: data.data.attributes }
}

const Wrapper = styled.div`
  .schedule-data {

    p {
      font-size: 13px;
      color: #858585;
      font-weight: 600;
    }

    margin-top: 100px;

    .title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    .schedule-columns {
      display: flex;
      flex-wrap: wrap;
    }

    .column {
      width: 100%;
      max-width: 250px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 20px;
      padding: 25px;
      border-radius: 15px;
      border: 1px solid ${baseTheme.colors.black};

      .coll-name {
        font-weight: 600;
        font-size: 17px;
        line-height: 22px;
      }

      .coll-caption {
        font-size: 17px;
        line-height: 22px;
        color: #7B7B7B;
      }
    }
  }

  @media (max-width: 600px) {

    .title {
      text-align: center;
    }

    .schedule-columns {
      justify-content: center;
    }
  }
`


export default Schedule;