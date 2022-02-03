import EventCard from "../components/Events/EventCard";
import { API } from "../libs/API";
import React from "react";
import {
    DefaultSection, Title, EventsAndNews, Specialties, Infographics, Partners, HeroBlock
} from '../styles/homeStyle'
import NewsCard from "../components/News/NewsCard";
import ArrowButton from "../components/Shared/ArrowButton";
import SpecCard from "../components/Specialties/SpecCard";
import TagButton from "../components/Shared/TagButton";
import Head from 'next/head'
import MainLayout from "../layouts/MainLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation, Autoplay
} from 'swiper';

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/autoplay"
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

SwiperCore.use([Navigation, Autoplay]);

export default function Home({events, news, specialties}) {

    console.log(specialties)

  return (
    <>
        <Header />
        <Head>
            <title>Сургутский институт
                экономики, управления и права</title>
        </Head>
      {/* -------------------- Баннер -------------------- */}
      <HeroBlock>
          <div className="slider">
              <Swiper
                  navigation={true}
                  loop={true}
                  // autoplay={{delay: 10000}}
              >
                  <SwiperSlide>
                      <img src='/img/1-20211220-085630-0000.png'  />
                      <div className="title">WordSkills Югра - Болеем за наших</div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <img src='/img/students-bg.jpg'  />
                      <div className="title">Поступай в наш институт</div>
                  </SwiperSlide>
              </Swiper>
          </div>

          <div className="video-and-news">
              <div className="video">
                  <a href='https://youtu.be/PaF4DCwq0JA' target='_blank'>
                      <div className="button">
                          <div className="play">
                              PLAY
                              <img src="/img/play-icon.png" alt="play"/>
                          </div>
                      </div>
                  </a>
              </div>
              <div className="news">
                  <div className="item">
                      <div className="post">
                          <div className="title">SIELOM</div>
                          <div className="body">
                              Инстиутут экономики управления и права обрел новое назввание и стиль
                          </div>
                      </div>
                      <ArrowButton>Подробнее</ArrowButton>
                  </div>
                  <div className="item">
                      <div className="post">
                          <div className="title">День открытых дверей</div>
                          <div className="body">
                              29 января 2022 года. Регистрация открыта!
                          </div>
                      </div>
                      <ArrowButton>Подробнее</ArrowButton>
                  </div>
              </div>
          </div>

      </HeroBlock>
      {/* -------------------- Конец секции -------------------- */}


        {/* ------ Секция мероприятий и новостей ----- */}
        <EventsAndNews>
            <DefaultSection>
                <div className='header'>
                    <Title>Мероприятия и новости</Title>
                    <ArrowButton>Узнать больше</ArrowButton>
                </div>
                <div>
                    <div className="news">
                        {events.map((event, i) => {
                            if (i < 4) {
                                return <EventCard event={event} />
                            }
                        })}
                    </div>
                    <div className="news">
                        {news.map((post, i) => {
                            if (i < 4) {
                                return <NewsCard post={post} />
                            }
                        })}
                    </div>
                </div>
            </DefaultSection>
        </EventsAndNews>
        {/* -------------------- Конец секции -------------------- */}

        {/* ------ Секция программ обучения ----- */}
        <Specialties>
            <DefaultSection>
                <div className='header'>
                    <Title>Программы обучения</Title>
                </div>
                <div className='header flex'>
                    <div className='name'>на базе:</div>
                    <TagButton>Всех классов</TagButton>
                    <TagButton>9 классов</TagButton>
                    <TagButton>11 классов</TagButton>
                </div>
                {specialties.map(item => <SpecCard key={item.id} item={item.attributes} />)}
            </DefaultSection>
        </Specialties>
        {/* -------------------- Конец секции -------------------- */}

        {/* ------ Секция инфографики ----- */}
        <Infographics>
            <div className="content">
                <div>
                    <Title>Об интституте</Title>
                </div>
                <div className='info-items'>
                    <div className="item">
                        <div className="value">61 553 </div>
                        <div className="description">Экземпляров учебных книг в библиотеке  </div>
                    </div>
                    <div className="item">
                        <div className="value">18</div>
                        <div className="description">Научно-практических статей</div>
                    </div>
                    <div className="item">
                        <div className="value">176 </div>
                        <div className="description">Договоров на производственную практику</div>
                    </div>
                    <div className="item">
                        <div className="value">275</div>
                        <div className="description">Бюджетных мест</div>
                    </div>
                </div>
                <div className="info-cards">
                    <div className="card">
                        <div className="value">4</div>
                        <div className="description">Корпуса</div>
                    </div>
                    <div className="card">
                        <div className="value">5</div>
                        <div className="description">Лет работы</div>
                    </div>
                    <div className="card">
                        <div className="value">20</div>
                        <div className="description">Специальностей</div>
                    </div>
                    <div className="card">
                        <div className="value">1384</div>
                        <div className="description">Студентов</div>
                    </div>
                </div>
            </div>
        </Infographics>
        {/* -------------------- Конец секции -------------------- */}

        {/* ------ Секция партнеров ----- */}
        <Partners>
            <div><img src='/img/offical-partner-1.png' /></div>
            <div><img src='/img/offical-partner-2.png' /></div>
            <div><img src='/img/offical-partner-3.png' /></div>
            <div><img src='/img/offical-partner-4.png' /></div>
        </Partners>
        {/* -------------------- Конец секции -------------------- */}
        <Footer />
    </>
  );
}

Home.getInitialProps = async () => {
    const { data } = await API.getEvents()
    const news = await API.getNews()
    const specialties = await API.getSpecialties()

    return {
        news: news.data.data,
        events: data.data,
        specialties: specialties.data.data
    }
}
