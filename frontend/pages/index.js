import EventCard from "../components/Card/EventCard";
import { API } from "../libs/API";
import React from "react";
import {
    DefaultSection, Title, EventsAndNews, Specialties, Infographics, Partners, HeroBlock
} from '../styles/homeStyle'
import NewsCard from "../components/Card/NewsCard";
import ArrowButton from "../components/Shared/ArrowButton";
import SpecCard from "../components/Specialties/SpecCard";
import TagButton from "../components/Shared/TagButton";
import Head from 'next/head'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation, Autoplay
} from 'swiper';

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/autoplay"
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Button from "../components/Shared/Button";
import _ from "lodash";

SwiperCore.use([Navigation, Autoplay]);

export default function Home({events, news, specialties}) {

  return (
    <>
        <Header />
        <Head>
            <title>Сургутский институт экономики, управления и права</title>
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
                      <div className="slide-content">
                          <div className="text">
                              <div className="title">С днем студента</div>
                              <div className="sub-title">
                                  У нас в инстутитуте прошел день студента.
                                  Узнайте как это было
                              </div>
                              <Button>Подробнее</Button>
                          </div>
                          <div className="img">
                              <img src="/img/test-img-slide.png" alt=""/>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="slide-content">
                          <div className="text">
                              <div className="title">С днем студента</div>
                              <div className="sub-title">
                                  У нас в инстутитуте прошел день студента.
                                  Узнайте как это было
                              </div>
                              <Button>Подробнее</Button>
                          </div>
                          <div className="img">
                              <img src="/img/test-img-slide.png" alt=""/>
                          </div>
                      </div>
                  </SwiperSlide>
              </Swiper>
          </div>
      </HeroBlock>
      {/* -------------------- Конец секции -------------------- */}


        {/* ------ Секция мероприятий и новостей ----- */}
        <EventsAndNews>
            <DefaultSection>
                <div className='header'>
                    <Title>Мероприятия</Title>
                    <ArrowButton>Узнать больше</ArrowButton>
                </div>
                    <div className="cards">
                        {_.shuffle(events).map((event, i) => {
                            if (i < 4) {
                                return <EventCard event={event} />
                            }
                        })}
                    </div>
            </DefaultSection>
            <DefaultSection>
                <div className='header'>
                    <Title>Новости</Title>
                    <ArrowButton>Узнать больше</ArrowButton>
                </div>
                    <div className="cards" >
                        {_.shuffle(news).map((post, i) => {
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
        {/* -------------------- Конец секции -------------------- */}

        {/* ------ Секция инфографики ----- */}
        <Infographics>
            <DefaultSection>
                <div className="content">
                    <div>
                        <Title>Об интституте</Title>
                    </div>
                    <div className="info-cards">
                        <div className="card">
                            <div className="value">1384</div>
                            <div className="description">Студентов</div>
                        </div>
                        <div className="card">
                            <div className="value">260</div>
                            <div className="description">Бюджетных мест</div>
                        </div>
                        <div className="card">
                            <div className="value">24</div>
                            <div className="description">Специальности</div>
                        </div>
                        <div className="card">
                            <div className="value">5</div>
                            <div className="description">Лет работы</div>
                        </div>

                    </div>
                </div>
            </DefaultSection>
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
