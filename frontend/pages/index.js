import Head from "next/head";
import Select from "../components/Select";
import Input from "../components/Input";
import EventCard from "../components/Events/EventCard";
import MainLayout from "../layouts/MainLayout";
import FilterBuildings from "../components/FilterBuildings";
import { API } from "../libs/API";

const events = [
  {
    id: 1,
    title: "Всероссийский форум студенческих спортивных клубов России",
    description: "описание мероприятия",
    date: "2 октября 13:00",
    duration: "2 часа",
    direction: "Общее",
    division: "Мелик-Карамова 18/1",
    watches: 0,
    manager: {
      name: "Василий Анатольевич Пупкин",
      number: "+7-932-256-36-78",
    },
    format: "Онлайн",
    place: "Онлайн",
    image: "http://sielom.ru/upload/000/u19/7/e/7e9cfaba.jpg",
  },
  {
    id: 2,
    title: "Что то интересное",
    description: "описание мероприятия",
    date: "5 октября 09:00",
    duration: "1.5 часа",
    direction: "Дизайн",
    division: "Мелик-Карамова 18/1",
    watches: 20,
    manager: {
      name: "Василий Анатольевич Пупкин",
      number: "+7-932-256-36-78",
    },
    format: "Мелик-карамова 18/1",
    place: "Мелик-карамова 18/1",
    image: null,
  },
];

export default function Events() {
  return (
    <MainLayout>
      {/* -------------------- Баннер (Слайдер) -------------------- */}
      <div className="mt-5 border-b ">
        <div className="max-w-screen-xl mx-auto flex justify-between relative">
          <h1 className="text-8xl mt-5 flex flex-col font-bold pl-4 h-16">
            <div className="flex mr-3">
              <div className="text-yellow">Буду</div>щее
            </div>
            <div>начинается</div>
            <div className="text-yellow">здесь</div>
          </h1>
          <img src="/img/students.png" className="mt-20 z-10" />
          <div className="w-64 h-64 blur-3xl opacity-30 rounded-full bg-purple-600 absolute right-0" />
          <div className="w-96 h-96 blur-3xl opacity-30 rounded-full bg-yellow absolute right-2 mr-80" />
          <div className="w-96 h-96 blur-3xl opacity-20 rounded-full bg-yellow absolute right-2 mr-40" />
        </div>
      </div>
      {/* -------------------- Конец секции -------------------- */}
    </MainLayout>
  );
}
