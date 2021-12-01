import React from "react"

export default function FilterByTasks({tasks}) {
    const [selected, setSelected] = React.useState

    const selectTask = () => {
        setSelected(task)

        ``
    }

    return (
        <div className="flex flex-wrap py-5">
            {tasks.map(task => <div key={task.id} className='text-xl text-blue-500 mr-3 cursor-pointer' onClick={(task) => selectTask(task)}>{task.name}</div>)}
        </div>
    )
}