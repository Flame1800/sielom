import React from "react";
import { DefaultSection, Title } from "../../styles/homeStyle";
import TagButton from "../UI/TagButton";
import SpecCard from "../Screens/Specialties/components/SpecCard";
import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

const SpecialitiesContent = ({ specialties }) => {
  const cleanSpecialites = specialties.filter((item) => {
    return item.attributes.type === "speciality";
  });

  const [currentSpecialties, setSpecialties] = React.useState(cleanSpecialites);
  const [mode, setMode] = React.useState("all");

  const selectSpecialty = (mode) => {
    setMode(mode);

    if (mode === "all") {
      return setSpecialties(specialties);
    }

    const result = specialties.filter(({ attributes }) => {
      return (
        attributes.durations.filter((item) => item.education_form === mode)
          .length !== 0
      );
    });

    return setSpecialties(result);
  };

  return (
    <Specialties>
      <DefaultSection>
        <div className="header">
          <Title>
            Специальности · <b>{currentSpecialties.length}</b>
          </Title>
          <div className="header-flex">
            <div onClick={() => selectSpecialty("all")}>
              <TagButton active={mode === "all"}>Все</TagButton>
            </div>
            <div onClick={() => selectSpecialty("full_time")}>
              <TagButton active={mode === "full_time"}>Очно</TagButton>
            </div>
            <div onClick={() => selectSpecialty("distant")}>
              <TagButton active={mode === "distant"}>Заочно</TagButton>
            </div>
            <div onClick={() => selectSpecialty("part_time")}>
              <TagButton active={mode === "part_time"}>Очно-заочно</TagButton>
            </div>
          </div>
        </div>
        <div className="list">
          {currentSpecialties.map((item) => (
            <SpecCard key={item.id} entity={item} />
          ))}
        </div>
      </DefaultSection>
    </Specialties>
  );
};

const Specialties = styled.div`
  margin-top: 50px;
  min-height: 500px;
  margin-bottom: 250px;

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    margin-bottom: 60px;
    border-bottom: 1px solid ${baseTheme.colors.light};
    padding-bottom: 30px;
  }

  .header-flex {
    margin-left: 20px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    margin-bottom: 10px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    .name {
      font-weight: 600;
      font-size: 14px;
      line-height: 11px;
      letter-spacing: 0.75px;
      color: #3e3e3e;
      white-space: nowrap;
      margin-left: 5px;
      margin-right: 20px;
      margin-bottom: -10px;
    }

    .filter {
      display: flex;
      margin-top: 10px;
    }
  }
`;

export default SpecialitiesContent;
