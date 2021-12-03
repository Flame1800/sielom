import Head from 'next/head'
import Select from "../components/Select";
import Input from "../components/Input";
import EventCard from "../components/Events/EventCard";
import MainLayout from "../layouts/MainLayout";
import FilterBuildings from "../components/FilterBuildings";
import {API} from "../libs/API";

const events = [
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

export default function Events() {
  return (
      <MainLayout>
          <div className="flex flex-col items-center justify-center min-h-screen font-sans">
              <main className="flex w-full flex-1 max-w-screen-xl border-l border-r border-black">
                  <div className='flex flex-col mb-4 border-black'>
                      <h1 className="text-4xl flex items-center font-bold pl-4 h-16">
                          Главная
                      </h1>
                  </div>
              </main>
          </div>
      </MainLayout>
  )
}
