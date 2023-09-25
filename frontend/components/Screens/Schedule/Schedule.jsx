import React from "react";
import MainHeader from "../../UI/MainHeader";
import FileContainer from "../../UI/Files/FileContainer";
import FileHolder from "../../UI/Files/FileHolder";
import {AppBtn, Head, Wrapper} from "./Schedule.style";

const Schedule = ({ schedule }) => {

    const scheduleBlock = (files) => {
        return files.map((item) => {
                    if (!item.files.data) {
                        return null;
                    }

                    return (
                        <div className="column">
                            <div className="column-head">
                                <div className="coll-name">{item.name}</div>
                                <div className="coll-caption">{item.caption}</div>
                            </div>
                            <div className="files">
                                {item.files.data?.map((file) => {
                                    return (
                                        <FileHolder file={file.attributes} key={file.id} />
                                    );
                                })}
                            </div>
                        </div>
                    );
                });
    }

    const createScheduleBlock = (name, data) => {
        const files = data.reduce((acc, block) => {
            if (!block.files.data) {
                return acc;
            }

            return [...acc, ...block.files.data]
        }, [])

        if (files.length === 0) {
            return null;
        }

        return (
            <div className="schedule-data">
                <div className="title">{name}</div>
                <div className="schedule-columns">
                    {scheduleBlock(data)}
                </div>
            </div>
        )
    }

  return (
      <Wrapper className="content">
        <Head>
          <MainHeader>Расписание</MainHeader>
          <AppBtn href='/timetable'>Интерактивное расписание</AppBtn>
        </Head>
        <FileContainer
          files={schedule.partTimeScheduleFiles}
          title="Очно-заочная форма обучения"
        />
        <FileContainer
          files={schedule.sessionDates}
          title="Сроки сессии для заочного отделения"
        />
          {createScheduleBlock("Очная форма обучения", schedule.fullTimeSchedule)}
          {createScheduleBlock("Заочная форма обучения", schedule.distantSchedule)}
          {createScheduleBlock("Расписание Пыть-Яхского колледжа", schedule.pythYakhCollege)}
          {createScheduleBlock("ОЗФО", schedule.OZFO)}
      </Wrapper>
  );
};

export default Schedule;
