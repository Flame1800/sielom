import Link from 'next/link'

const EventCard = () => {
    return (
        <div className="p-6 mt-6 text-left border rounded-xl shadow-md hover:shadow-lg">
            <div className='flex mb-2'>
                <div className='font-bold text-gray-600'>Дизайн</div>
                <div className='ml-4 text-indigo-700'>2 октября</div>
            </div>
            <Link href='/event'>
                <a>
                    <h3 className="text-xl font-bold">Мастер класс как увеличить продуктивность с помощью правильного освещения</h3>
                    <div className='flex mt-4'>
                        <div className='flex items-center'>
                            <img className='h-4 mr-2' src='/img/clock-icon.png' />
                            <div className='text-gray-600'>2 часа</div>
                        </div>
                        <div className='ml-4 flex items-center'>
                            <img className='h-4 mr-2' src='/img/map-pin-icon.png' />
                            <div>2 корпус</div>
                        </div>
                    </div>
                </a>
            </Link>
            <div className='flex items-center mt-4'>
                <img className='h-5 mr-2' src='/img/arrow-upload-icon.png' />
                <div className='ml-4 flex items-center'>
                    <img className='h-4 mr-2' src='/img/eye-icon.png' />
                    <div>22</div>
                </div>
            </div>
        </div>
    )
}

export default EventCard