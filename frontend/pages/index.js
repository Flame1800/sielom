import EventCard from "../components/Card/EventCard";
import { API } from "../libs/API";
import React from "react";
import {
    DefaultSection, Title, Specialties, Infographics, Partners
} from '../styles/homeStyle'
import NewsCard from "../components/Card/NewsCard";
import ArrowButton from "../components/Common/ArrowButton";
import SpecCard from "../components/Specialtity/SpecCard";
import TagButton from "../components/Common/TagButton";
import Head from 'next/head'
import SwiperCore, {
    Navigation, Autoplay
} from 'swiper';

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/autoplay"
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Banner from "../components/HomePage/Banner/Banner";
import CardsCarouselWrapper from "../components/HomePage/CardsCarouselWrapper";
import {SwiperSlide} from "swiper/react";
import SpecialityCardsHolder from "../components/Specialtity/SpecialityCardsHolder";

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
                            <div className="value">515</div>
                            <div className="description">Студентов на бюджетных местах</div>
                        </div>
                        <div className="card">
                            <div className="value">21</div>
                            <div className="description">Специальность</div>
                        </div>
                        <div className="card">
                            <div className="value">5</div>
                            <div className="description">Корпусов</div>
                        </div>
                    </div>
                </div>
            </DefaultSection>
        </Infographics>


        {/* ------ Секция мероприятий и новостей ----- */}

        {events.length > 0  && <CardsCarouselWrapper title="Мероприятия" btnText="Все мероприятия">
            {events.map((event, i) => {
                if (i < 16) {
                    return (
                        <SwiperSlide key={event.id}>
                            <EventCard event={event} />
                        </SwiperSlide>
                    )
                }
            })}
        </CardsCarouselWrapper>}

        {events.length > 0  && <CardsCarouselWrapper title="Новости" btnText="Все новости">
            {news.map((post, i) => {
                if (i < 16) {
                    return (
                        <SwiperSlide key={post.id}>
                            <NewsCard post={post} />
                        </SwiperSlide>
                    )
                }
            })}
        </CardsCarouselWrapper>}

        {/* ------ Секция специальностей ----- */}
        <SpecialityCardsHolder specialties={specialties} />

        {/* ------ Секция партнеров ----- */}
        <Partners>
            <a href="https://depobr.admhmao.ru/"><img alt='partner' src='/img/offical-partner-1.png' /></a>
            <a href="https://edu.gov.ru"><img alt='partner' src='/img/offical-partner-2.png' /></a>
            <a href="http://sielom.ru/pages/stopcorrupt.html"><img alt='partner' src='/img/offical-partner-3.png' /></a>
            <a href="https://obrnadzor.gov.ru/"><img alt='partner' src='/img/offical-partner-4.png' /></a>
        </Partners>
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
