import React from "react";
import MainHeader from "../../UI/MainHeader";
import FileContainer from "../../UI/Files/FileContainer";
import FileHolder from "../../UI/Files/FileHolder";
import { Wrapper } from "./Schedule.style";

const Schedule = ({ schedule }) => {
  return (
    <>
      <MainHeader>Расписание</MainHeader>
      <Wrapper className="content">
        <FileContainer
          files={schedule.partTimeScheduleFiles}
          title="Очно-заочная форма обучения"
        />
        <FileContainer
          files={schedule.sessionDates}
          title="Сроки сессии для заочного отделения"
        />

        <div className="schedule-data">
          <div className="title">Очная форма обучения</div>
          <div className="schedule-columns">
            {schedule.fullTimeSchedule.map((item) => {
              if (!item.files.data) return null;

              return (
                <div className="column">
                  <div className="column-head">
                    <div className="coll-name">{item.name}</div>
                    <div className="coll-caption">{item.caption}</div>
                  </div>
                  <div className="files">
                    {item.files.data.map((file) => {
                      return (
                        <FileHolder file={file.attributes} key={file.id} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="schedule-data">
          <div className="title">Заочная форма обучения</div>
          <div className="schedule-columns">
            {schedule.distantSchedule.map((item) => {
              if (!item.files.data) return null;

              return (
                <div className="column">
                  <div className="column-head">
                    <div className="coll-name">{item.name}</div>
                    <div className="coll-caption">{item.caption}</div>
                  </div>
                  <div className="files">
                    {item.files.data.map((file) => {
                      return (
                        <FileHolder file={file.attributes} key={file.id} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Schedule;
