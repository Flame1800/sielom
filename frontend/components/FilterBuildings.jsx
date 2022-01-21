import React from "react";
import TagButton from "./Shared/TagButton";
import styled from "styled-components";

const buildings = [
    {
        id: 0,
        name: "Все корпуса"
    },
    {
        id: 1,
        name: "Маяковского 16/1"
    },
    {
        id: 2,
        name: "Рабочая 43/1"
    },
    {
        id: 3,
        name: "И.Захарова 12"
    },
    {
        id: 4,
        name: "Мелик-Карамова 18/1"
    }
]

const FilterBuildings = ({clickHandler}) => {
    const [activeFilter, setActiveFilter] = React.useState(0)

    const selectFilter = (i) => {
        setActiveFilter(i)
        clickHandler(i)
    }

    return (
        <Wrapper>
            {buildings.map(({id, name}) => {
                return (<div onClick={() => selectFilter()}>
                    <TagButton>{name}</TagButton>
                </div>)
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 35px;
`

export default FilterBuildings