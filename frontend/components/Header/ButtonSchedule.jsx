import React from 'react';
import styled from "styled-components";

const ButtonSchedule = () => {
    return (
        <Wrapper target="_blank" href='https://new.sielom.ru/timetable'>
            Расписание
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  right: 30px;
  border: 2px solid #EABC5D;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  line-height: 10px;
  color: #3E3E3E;
  padding: 9px 18px;
  transition: .3s;
  cursor: pointer;

  &:hover {
    background: #EABC5D;
    color: #3E3E3E;
  }
`

export default ButtonSchedule;