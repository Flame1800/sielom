import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import MainHeader from "../../components/Shared/MainHeader";
import styled from "styled-components";
import ArrowButton from "../../components/Shared/ArrowButton";
import Tag from "../../components/Shared/Tag";
import Button from "../../components/Shared/Button";
import EducationForm from "../../components/Specialtity/PromoPageComponents/EducationForm";
import Technologies from "../../components/Specialtity/PromoPageComponents/Technologies";
import TrainingPlan from "../../components/Specialtity/PromoPageComponents/TrainingPlan";
import PromoList from "../../components/Specialtity/PromoPageComponents/PromoList";
import SecialistSalary from "../../components/Specialtity/PromoPageComponents/SpecialistSalary";
import Advantages from "../../components/Specialtity/PromoPageComponents/Advantages";
import Resume from "../../components/Specialtity/PromoPageComponents/Resume";
import Diploma from "../../components/Specialtity/PromoPageComponents/Diploma";
import PromoBlock from "../../components/Specialtity/PromoPageComponents/PromoBlock";
import Questions from "../../components/Specialtity/PromoPageComponents/Questions";
import Quote from "../../components/Specialtity/PromoPageComponents/Quote";
import BannerBlock from "../../components/Specialtity/PromoPageComponents/BannerBlock";
import WorksBlock from "../../components/Specialtity/PromoPageComponents/WorksBlock";
import PlacesWorkBlock from "../../components/Specialtity/PromoPageComponents/PlacesWorkBlock";
import Reviews from "../../components/Specialtity/PromoPageComponents/Reviews";
import Link from "next/link";
import React from "react";
import {baseTheme} from "../../styles/theme";

export default function Specialties({ entity }) {
    const img  = entity.attributes.cover?.data ? process.env.API_URL + entity.attributes.cover.data[0].attributes.url : null
    const {attributes} = entity

    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = "http://code.jivo.ru/widget/ZMOiXQR5r4";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <MainLayout>
            <Banner>
                <ArrowButton back>назад</ArrowButton>
                <div className="main-title">{attributes.name}</div>
                {
                    attributes.video_link
                    ? <iframe width="800" height="400" src={attributes.video_link}
                              title="YouTube video player" frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen className='cover' />
                    : <img className="cover" width="800" src={img} alt='cover' />
                }

                <div className='btns'>
                    <Link href="/reception-campain/info?post=Подача%20документов">
                        <a>
                            <Button>Подать заявку</Button>
                        </a>
                    </Link>
                    <div onClick={() => jivo_api.open()} className='btn'>
                        Задать вопрос
                    </div>
                </div>
                <EducationForm durations={attributes.durations} />
            </Banner>
            <Blocks>
                <Quote quote={attributes.quote} />
                <div className="description" dangerouslySetInnerHTML={{ __html: attributes.full_description }} />
                <Technologies technologies={attributes.technologies} />
                <TrainingPlan training_plan={attributes.training_plan} />
                <PromoList list={attributes.promo_list} />
                <BannerBlock banner_text={attributes.banner_text} />
                <WorksBlock works={attributes.works} />
                <PlacesWorkBlock work_places={attributes.work_places} is_business_speciality={attributes.is_business_speciality} />
                <SecialistSalary salary={attributes.salary} />
                <Advantages advantages={attributes.advantages} />
                <Reviews reviews={attributes.reviews} />
                <Resume resume={attributes.resume} />
                {attributes.full_description && <Diploma />}
                <PromoBlock speciality={attributes} />
                <Questions questions={attributes.questions} />
            </Blocks>
            <ArrowButton back>назад</ArrowButton>
        </MainLayout>
    )
}

const Banner = styled.div`
  margin: 0 auto;
  width: 1000px;
  min-height: 100vh;
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
    color: #3E3E3E;
  }
  
  .btns {
    margin-top: 30px;
    display: flex;
    
    .btn {
      background: #59d175;
      border-radius: 13px;
      height: 55px;
      padding: 20px 50px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      max-width: 400px;
      font-weight: 500;
      cursor: pointer;
      transition: 0.2s;
      margin-left: 30px;
      filter: drop-shadow(0px 0px 10px #59d175);
      border:  #59d175 2px solid;

      &:hover {
        color: #3E3E3E;
        background: none;
        border: #59d175 2px solid;
      }
    }
  }
  
  .cover {
    height: 400px;
    object-fit: cover;
    margin-top: 40px;
    margin-bottom: 30px;
    border-radius: 20px;
  }
`

const Blocks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    margin-bottom: 70px;
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 46px;
    letter-spacing: -0.25px;
    max-width: 1000px;
    color: #3E3E3E;
  }
`

Specialties.getInitialProps = async (ctx) => {
    const { data } = await API.getSpecialty(ctx.query.id)
    return { entity: data.data }
}
