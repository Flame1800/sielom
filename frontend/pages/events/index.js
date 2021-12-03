import Head from 'next/head'
import Select from "../../components/Select";
import Input from "../../components/Input";
import EventCard from "../../components/Events/EventCard";
import MainLayout from "../../layouts/MainLayout";
import FilterBuildings from "../../components/FilterBuildings";
import {API} from "../../libs/API";
import PostPage from "../rules/[id]";

const eventsPlaceholders = [
    {
        id: 1,
        title: 'Всероссийский форум студенческих спортивных клубов России',
        description: 'описание мероприятия',
        date: '2 октября 13:00',
        duration: '2 часа',
        direction: 'Общее',
        division: 'Мелик-Карамова 18/1',
        watches: 0,
        manager: {
            name: 'Василий Анатольевич Пупкин',
            number: '+7-932-256-36-78'
        },
        format: 'Онлайн',
        place: 'Онлайн',
        image: 'http://sielom.ru/upload/000/u19/7/e/7e9cfaba.jpg'
    },
    {
        id: 2,
        title: 'Что то интересное',
        description: 'описание мероприятия',
        date: '5 октября 09:00',
        duration: '1.5 часа',
        direction: 'Дизайн',
        division: 'Мелик-Карамова 18/1',
        watches: 20,
        manager: {
            name: 'Василий Анатольевич Пупкин',
            number: '+7-932-256-36-78'
        },
        format: 'Мелик-карамова 18/1',
        place: 'Мелик-карамова 18/1',
        image: null
    },
]

export default function Events({ events }) {
  return (
      <MainLayout>
          <div className="flex flex-col items-center justify-center min-h-screen font-sans">
              <main className="flex w-full flex-1 max-w-screen-xl border-l border-r border-black">
                  <div className='flex flex-col w-9/12 mb-4 border-r border-black'>
                      <h1 className="text-4xl flex items-center font-bold border-b border-black pl-4 h-16">
                          Календарь мероприятий
                      </h1>
                      <div className="h-14 border-b border-black flex items-center ">
                          <input type='text' placeholder='Поиск...' className='placeholder-gray-700 ml-3 focus:outline-none h-full w-full' />
                      </div>
                      <FilterBuildings clickHandler={(i) => console.log(i)} />
                      <div className="flex flex-col w-3/5 sm:w-full">
                          {events.map(event => <EventCard key={event.id} event={event} />)}
                      </div>
                  </div>
                    <div className='w-3/12'>
                        <div className="h-16 border-b border-black flex justify-center items-center">
                            <img src='img/star.png' className='h-10' />
                        </div>
                        <div className='sticky flex flex-col top-10 h-24 border-b border-black p-4'>
                            <label className='mb text-gray-600'>Дата</label>
                            <input type='date' className='focus:outline-none '  />
                        </div>
                    </div>
              </main>
          </div>
      </MainLayout>
  )
}

Events.getInitialProps = async ctx => {
    const { data } = await API.getEvents()
    return { events: data.data }
}
