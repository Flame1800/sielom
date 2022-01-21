import React from "react"
import {useAppDispatch} from "../../../redux/hooks";
import {clearFilterRules, filterRulesByTask} from "../../../redux/slices/rules";
import TagButton from "../../Shared/TagButton";
import styled from "styled-components";

export default function FilterByTasks({tasks}) {
    const links = [
        {
            id: 'all',
            attributes: {
                name: 'все задачи'
            }
        },
        ...tasks.data
    ]
    const [selected, setSelected] = React.useState(links[0])
    const dispatch = useAppDispatch()



    const selectTask = (task) => {
        setSelected(task)
        return dispatch(filterRulesByTask(task))
    }

    return (
        <Wrapper>
            {links.map(task => {
                return <div
                        key={task.id}
                        onClick={() => selectTask(task)}>
                    <TagButton active={task.id === selected.id} >{task.attributes.name}</TagButton>
                    </div>
            })}
        </Wrapper>
    )
}


const Wrapper = styled.div`
  display: flex;
  margin-bottom: 35px;
`