import React from "react";
import SpecCard from "../Specialties/components/SpecCard";
import styled from "styled-components";
import TagButton from "../../UI/TagButton";

const CardsCourse = ({ courses }) => {
  const [entries, setEntries] = React.useState(courses);
  const [filter, setFilter] = React.useState("all");

  const filters = {
    all: courses,
    short: courses.filter((entry) => Number(entry.attributes.time) <= 72),
    long: courses.filter((entry) => Number(entry.attributes.time) > 72),
  };

  React.useEffect(() => setEntries(filters[filter]), [filter]);

  const renderFilter = (mode, title) => {
    return (
      <div onClick={() => setFilter(mode)}>
        <TagButton active={mode === filter}>{title}</TagButton>
      </div>
    );
  };

  return (
    <Wrapper>
      <div className="title-courses">Количество: {entries?.length ?? 0}</div>
      <div className="filter">
        {renderFilter("all", "Все")}
        {renderFilter("short", "Краткосрочные")}
        {renderFilter("long", "Долгосрочные")}
      </div>
      <div className="list">
        {entries.map((item) => (
          <SpecCard key={item.id} entity={item} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .filter {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    > div {
      margin: 5px 0;
    }
  }

  .title-courses {
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 15px;
  }

  .list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export default CardsCourse;
