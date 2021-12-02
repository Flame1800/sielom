import React from "react"
import {useAppDispatch} from "../../../redux/hooks";
import {clearFilterRules, filterRulesByTask} from "../../../redux/slices/rules";

export default function FilterByTasks({tasks}) {
    const [selected, setSelected] = React.useState(null)
    const dispatch = useAppDispatch()

    const selectTask = (task) => {
        if (!task) {
            setSelected(task)
            return dispatch(clearFilterRules())
        }
        setSelected(task.id)
        dispatch(filterRulesByTask(task))
    }

    return (
        <div className="flex flex-wrap py-5">
            <div
                className={`text-lg ${!selected ? "text-red-500" : "text-blue-500"} mr-3 cursor-pointer`}
                onClick={() => selectTask(null)}>все задачи
            </div>
            {tasks.data.map(task => {
                return <div
                        key={task.id}
                        className={`text-lg ${selected === task.id ? "text-red-500" : "text-blue-500"} mr-3 cursor-pointer`}
                        onClick={() => selectTask(task)}>{task.attributes.name}
                    </div>
            })}
        </div>
    )
}