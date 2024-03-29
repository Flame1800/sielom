import React from "react";
import ArrowButton from "../../UI/ArrowButton";
import Link from "next/link";
import Button from "../../UI/Button";
import JivoButton from "../../UI/JivoButton";
import EducationForm from "./components/EducationForm";
import Quote from "./components/Quote";
import Technologies from "./components/Technologies";
import TrainingPlan from "./components/TrainingPlan";
import PromoList from "./components/PromoList";
import BannerBlock from "./components/BannerBlock";
import WorksBlock from "./components/WorksBlock";
import PlacesWorkBlock from "./components/PlacesWorkBlock";
import SecialistSalary from "./components/SpecialistSalary";
import Advantages from "./components/Advantages";
import Reviews from "./components/Reviews";
import Resume from "./components/Resume";
import Diploma from "./components/Diploma";
import PromoBlock from "./components/PromoBlock";
import Questions from "./components/Questions";
import styled from "styled-components";
import moment from "moment";

const Specialty = ({ entity }) => {
  const img = entity.attributes.cover?.data
    ? process.env.API_URL + entity.attributes.cover.data[0].attributes.url
    : null;
  const { attributes } = entity;
  const isCourse = attributes.education_type === "courses";

  return (
    <div>
      <Banner>
        <ArrowButton back>назад</ArrowButton>
        <div className="main-title">{attributes.name}</div>
        {attributes.video_link ? (
          <iframe
            width="80%"
            height="400"
            src={attributes.video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="cover"
          />
        ) : (
          <img
            className="cover"
            width="80%"
            src={img ? img : "/img/placeholder.png"}
            alt="cover"
          />
        )}

        <div className="buttons">
          {!isCourse && <Link
              href={
                isCourse
                    ? "https://trudvsem.ru/educational-programs"
                    : `/reception-campain/${moment().year()}/info?post=Подача%20документов`
              }
          >
            <a>
              <Button>Подать заявление</Button>
            </a>
          </Link>}
          <JivoButton>Задать вопрос</JivoButton>
        </div>
        <EducationForm durations={attributes.durations} />
      </Banner>
      <Blocks>
        <Quote quote={attributes.quote} />
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: attributes.full_description }}
        />
        <Technologies technologies={attributes.technologies} />
        <TrainingPlan training_plan={attributes.training_plan} />
        <PromoList
          list={attributes.promo_list}
          title={attributes.promo_list_name}
        />
        <BannerBlock banner_text={attributes.banner_text} />
        <WorksBlock works={attributes.works} />
        <PlacesWorkBlock
          work_places={attributes.work_places}
          is_business_speciality={attributes.is_business_speciality}
        />
        <SecialistSalary salary={attributes.salary} />
        <Advantages advantages={attributes.advantages} />
        <Reviews reviews={attributes.reviews} />
        <Resume resume={attributes.resume} />
        {!isCourse && <Diploma />}
        <PromoBlock speciality={attributes} />
        <Questions questions={attributes.questions} />
      </Blocks>
      <ArrowButton back>назад</ArrowButton>
    </div>
  );
};

const Banner = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-title {
    font-style: normal;
    text-align: center;
    font-weight: 600;
    font-size: 48px;
    line-height: 61px;
    letter-spacing: -1.5px;
    margin-top: 40px;
    color: #3e3e3e;

    @media (max-width: 768px) {
      font-size: 6em;
      line-height: 1em;
    }
  }

  .buttons {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > div,
    > a {
      margin: 10px 15px;
    }
  }

  .cover {
    height: 400px;
    object-fit: cover;
    margin-top: 40px;
    margin-bottom: 30px;
    border-radius: 20px;
  }
`;

const Blocks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    padding: 0 10px;
    margin-bottom: 70px;
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 46px;
    letter-spacing: -0.25px;
    max-width: 1000px;
    color: #3e3e3e;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 29px;
    }
  }
`;

export default Specialty;
