import Head from 'next/head'
import Select from "../components/Select";
import Input from "../components/Input";
import EventCard from "../components/Events/EventCard";
import MainLayout from "../layouts/MainLayout";
import FilterBuildings from "../components/FilterBuildings";

const events = [
    {
        id: 1,
        title: '  Декада первокурсника',
        description: 'описание мероприятия',
        date: new Date(),
        duration: '2 часа',
        direction: 'IT',
        watches: 0,
        manager: {
            name: 'Василий Анатольевич Пупкин',
            number: '+7-932-256-36-78'
        },
        format: 'Онлайн'
    }
]

export default function Home() {
  return (
      <MainLayout>
          <div className="flex flex-col items-center justify-center min-h-screen font-sans">
              <main className="flex flex-col w-full flex-1 px-20 max-w-screen-xl pt-4">
                  <h1 className="text-xl font-bold text-gray-600 pb-4">
                      Календарь мероприятий
                  </h1>
                  <FilterBuildings clickHandler={(i) => console.log(i)} />
                  <div className='flex w-full mb-4'>
                      <div className="flex flex-col w-3/5 sm:w-full">
                          {events.map(event => < EventCard event={event} />)}
                          <EventCard />
                          <EventCard />
                          <EventCard />
                      </div>
                      <div className='sticky top-10 h-64 mt-6 ml-6 border rounded-xl shadow-md w-2/5 py-2 px-6'>
                          <Input label={"Поиск"} placeholder={"Что вы хотите найти?"} />
                          <Select label={"Дата"} />
                          <Select label={"Направление"} />
                      </div>
                  </div>
              </main>
          </div>
      </MainLayout>
  )
}
