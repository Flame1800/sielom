import Link from 'next/link'
import moment from "moment";

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
    const date = moment(event.attributes.start_date).calendar()
    return (
        <div className='text-left border-b border-black bg-gradient-to-r hover:from-green-100 hover:to-blue-200 '>
            <div className='flex px-4 pt-4 items-center'>
                <div className='text-md text-gray-700'>{event.attributes.division.data.attributes.name}</div>
                <div className='ml-4 text-indigo-700'>{date}</div>
            </div>
            <Link href={`/events/${event.id}`}>
                <a>
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-900">{event.attributes.title}</h3>
                        <div className='flex mt-4'>
                            <div className='flex items-center'>
                                <img className='h-6 mr-2' src='/img/map-pin-icon.png' />
                                <div>{event.attributes.place}</div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default EventCard