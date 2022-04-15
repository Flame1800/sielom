import EventCard from "../components/Card/EventCard";
import { API } from "../libs/API";
import React from "react";
import {
    DefaultSection, Title, EventsAndNews, Specialties, Infographics, Partners
} from '../styles/homeStyle'
import NewsCard from "../components/Card/NewsCard";
import ArrowButton from "../components/Shared/ArrowButton";
import SpecCard from "../components/Specialtity/SpecCard";
import TagButton from "../components/Shared/TagButton";
import Head from 'next/head'
import SwiperCore, {
    Navigation, Autoplay
} from 'swiper';

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/autoplay"
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import _ from "lodash";
import Link from 'next/link'
import Banner from "../components/HomePage/Banner/Banner";

SwiperCore.use([Navigation, Autoplay]);

export default function Home({events, news, specialties}) {

  return (
    <>
        <Head>
            <title>Сургутский институт экономики, управления и права</title>
        </Head>
        <Header />
      {/* -------------------- Баннер -------------------- */}

        <Banner />

      {/* -------------------- Конец секции -------------------- */}



        {/* ------ Секция инфографики ----- */}
        <Infographics>
            <DefaultSection>
                <div className="content">
                    <div className="info-cards">
                        <div className="card">
                            <div className="value">3326</div>
                            <div className="description">Студентов</div>
                        </div>
                        <div className="card">
                            <div className="value">508</div>
                            <div className="description">Студентов на бюджетных местах</div>
                        </div>
                        <div className="card">
                            <div className="value">24</div>
                            <div className="description">Специальности</div>
                        </div>
                        <div className="card">
                            <div className="value">5</div>
                            <div className="description">Корпусов</div>
                        </div>
                    </div>
                </div>
            </DefaultSection>
        </Infographics>
        {/* -------------------- Конец секции -------------------- */}


        {/* ------ Секция мероприятий и новостей ----- */}
        <EventsAndNews>
            <DefaultSection>
                <div className='header'>
                    <Title>Мероприятия</Title>
                    <Link href='/events'>
                        <a><ArrowButton>Узнать больше</ArrowButton></a>
                    </Link>
                </div>
                    <div className="cards">
                        {events.map((event, i) => {
                            if (i < 4) {
                                return <EventCard event={event} />
                            }
                        })}
                    </div>
            </DefaultSection>
        </EventsAndNews>
        {/* -------------------- Конец секции -------------------- */}

        <EventsAndNews>
            <DefaultSection>
                <div className='header'>
                    <Title>Новости</Title>
                    <Link href='/news'>
                        <a><ArrowButton>Узнать больше</ArrowButton></a>
                    </Link>
                </div>
                <div className="cards" >
                    {news.map((post, i) => {
                        if (i < 4) {
                            return <NewsCard post={post} />
                        }
                    })}
                </div>
            </DefaultSection>
        </EventsAndNews>
        {/* -------------------- Конец секции -------------------- */}


        {/* ------ Секция программ обучения ----- */}
        <Specialties>
            <DefaultSection>
                <div className='header'>
                    <Title>Программы обучения</Title>
                    <div className='header flex'>
                        <div className='name'>на базе:</div>
                        <TagButton>Всех классов</TagButton>
                        <TagButton>9 классов</TagButton>
                        <TagButton>11 классов</TagButton>
                    </div>
                </div>
                <div className="list">
                    {specialties.map(item => <SpecCard key={item.id} entity={item} />)}
                </div>
            </DefaultSection>
        </Specialties>


        {/* ------ Секция партнеров ----- */}
        <Partners>
            <a href="https://depobr.admhmao.ru/"><img alt='partner' src='/img/offical-partner-1.png' /></a>
            <a href="https://edu.gov.ru"><img alt='partner' src='/img/offical-partner-2.png' /></a>
            <a href="http://sielom.ru/pages/stopcorrupt.html"><img alt='partner' src='/img/offical-partner-3.png' /></a>
            <a href="https://obrnadzor.gov.ru/"><img alt='partner' src='/img/offical-partner-4.png' /></a>
        </Partners>
        {/* -------------------- Конец секции -------------------- */}
        <Footer />
    </>
  );
}

Home.getInitialProps = async () => {
    const events =  await API.getEvents()
    const news =  await API.getNews()
    const specialties = await API.getSpecialties()

    return {
        news: news.data.data,
        events: events.data.data,
        specialties: specialties.data.data
    }
}
