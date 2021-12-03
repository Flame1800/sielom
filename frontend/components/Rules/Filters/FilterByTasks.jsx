import React from "react"
import {useAppDispatch} from "../../../redux/hooks";
import {clearFilterRules, filterRulesByTask} from "../../../redux/slices/rules";

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
        <div className="flex flex-wrap py-5">
            {links.map(task => {
                return <div
                        key={task.id}
                        className={`text-lg ${selected.id === task.id ? "text-red-500" : "text-blue-500"}  mr-3 cursor-pointer`}
                        onClick={() => selectTask(task)}>{task.attributes.name}
                    </div>
            })}
        </div>
    )
}