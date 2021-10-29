import React from "react";
import cn from 'classnames'

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
        <div className='flex'>
            {buildings.map(({id, name}) => {
                const  btnClass = cn('flex justify-center items-center mr-6 px-6 py-2 cursor-pointer rounded-md text-gray-800', {
                    'bg-blue-300': activeFilter === id,
                    'border-2': activeFilter !== id,
                });

                return <div
                    onClick={() => selectFilter(id)}
                    key={id}
                    className={btnClass}>
                    {name}
                </div>
            })}
        </div>
    )
}

export default FilterBuildings