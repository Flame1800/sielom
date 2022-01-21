import EventCard from "../components/Events/EventCard";
import { API } from "../libs/API";
import React from "react";
import Button from "../components/Shared/Button";
import {
    DefaultSection, Title, SubTitle, Banner, MainParagraph,
    FastLinks, AbiturentInfo, EventsAndNews, Specialties, Infographics, Partners
} from '../styles/homeStyle'
import NewsCard from "../components/News/NewsCard";
import ArrowButton from "../components/Shared/ArrowButton";
import SpecCard from "../components/Specialties/SpecCard";
import TagButton from "../components/Shared/TagButton";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Head from 'next/head'


export default function Home({events, news}) {

    React.useEffect(() => {
        const section1 = document.querySelector('body')

        window.addEventListener('scroll', () => {
            if (window.scrollY > 1900) {
                if (window.scrollY >= 2600) {
                    section1.style.backgroundColor = `#fffefb`
                } else {
                    section1.style.backgroundColor = `#EABC5D`
                }
            }
            else {
                section1.style.backgroundColor = `rgb(255, 255, 255)`
            }
        })

    }, [])

  return (
    <div>
        <Head>
            <title>Сургутский институт
                экономики, управления и права</title>
        </Head>
        <Header />
      {/* -------------------- Баннер -------------------- */}
      <Banner>
          <div className="bg"></div>
          <div className='empty-column' />
          <div className='content'>
          <MainParagraph>
              <div>
                  <div className="part-text swap-text">
                      <span className="light-text">БУДУ</span>ЩЕЕ
                  </div>
                  <div className="part-text">
                      <img src="/img/stars.png" className='stars' />
                      НАЧИНАЕТСЯ
                  </div>
                  <div className="part-text swap-text-2">
                      <span className="light-text">ЗДЕСЬ</span>
                  </div>
              </div>
              <div className="banner-footer">
                  <div>
                      <div className="sub-title">
                          Сургутский институт <br />
                          экономики, управления  и права
                      </div>
                      <FastLinks>
                          <TagButton>Расписание</TagButton>
                          <TagButton>Студенческая жизнь</TagButton>
                          <TagButton>Специальности</TagButton>
                          <TagButton>Об интстуте</TagButton>
                      </FastLinks>
                  </div>
                  <div className="video-wrapper">
                      <a target="_blank" href='https://youtu.be/PaF4DCwq0JA'>
                          <div className="video">
                              <div className="cover">
                                  <div className="btn">
                                      <img src="/img/btn-play-video.png" className='icon'/>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
              </div>
        </MainParagraph>
          </div>
      </Banner>
      {/* -------------------- Конец секции -------------------- */}

        {/* ------ Секция поступления в институт ----- */}
        <AbiturentInfo>
            <DefaultSection>
                <div>
                    <Title>У нас есть все для построения успешной карьеры</Title>
                    <SubTitle>
                        В институте действует программа целевого обучения — программа, при которой студент обучается
                        за счет работодателя. после окончания обучения должен по договору отработать не менее 3-х лет
                        в организации направившей его на обучение.
                    </SubTitle>
                </div>
                <div>
                    <div className='card'>
                        <div className="card-title">
                            МЫ ЗАИНТЕРЕСОВАННЫ В ВАШЕМ ТРУДОУСТРОЙСТВЕ
                        </div>
                        <div className="card-subtitle">
                            Одним из приоритетных направлений развития института
                            является подготовка высококвалифицированных специалистов для предприятий-партнеров.
                        </div>
                        <img src='/img/students.png' className='students-img' />
                    </div>
                    <div className='buttons'>
                        <Button>Подать заявку</Button>
                        <ArrowButton>Узнать подробнее</ArrowButton>
                    </div>
                </div>
            </DefaultSection>
        </AbiturentInfo>
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
                {[0,1,2,3,4,5,6,7].map(item => <SpecCard />)}
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
                    <div className="card no-card">
                    </div>
                    <div className="card no-card">
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
    </div>
  );
}

Home.getInitialProps = async () => {
    const { data } = await API.getEvents()
    const news = await API.getNews()

    return { news: news.data.data, events: data.data }
}
