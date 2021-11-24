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
        <div className='flex w-full h-10 divide-x divide-black border-b border-black'>
            {buildings.map(({id, name}) => {
                const  btnClass = cn('flex w-full justify-center items-center px-1 py-2 cursor-pointer text-gray-800 hover:bg-blue-100', {
                    'bg-blue-400': activeFilter === id
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