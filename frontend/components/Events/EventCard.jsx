import Link from 'next/link'

const colors = {
    IT: 'blue',
    Дизайн: 'yellow',
    Общее: 'red'
}

const icons = {
    IT: 'it',
    Дизайн: 'pencil',
    Общее: 'theme'
}


const EventCard = ({event}) => {
    return (
        <div className='text-left border-b border-black bg-gradient-to-r hover:from-green-100 hover:to-blue-200 '>
            <div className='flex px-4 pt-4 items-center'>
                <div className="w-10 h-10 mr-4 flex items-center justify-center border border-black bg-white">
                    <img className='w-6' src={`/img/directions-icons/${icons[event.direction]}.png`} alt='icon' />
                </div>
                <div className='font-bold text-md text-gray-700'>{event.direction}</div>
                <div className='ml-4 text-indigo-700'>{event.date}</div>
            </div>
            <Link href='/event'>
                <a>
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                        <div className='flex mt-4'>
                            <div className='flex items-center'>
                                <img className='h-6 mr-2' src='/img/map-pin-icon.png' />
                                <div>{event.place}</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default EventCard