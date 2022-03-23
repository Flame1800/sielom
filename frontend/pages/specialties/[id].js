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
import MainDisciplines from "../../components/Specialtity/PromoPageComponents/MainDisciplines";
import SecialistSalary from "../../components/Specialtity/PromoPageComponents/SpecialistSalary";
import Advantages from "../../components/Specialtity/PromoPageComponents/Advantages";
import Resume from "../../components/Specialtity/PromoPageComponents/Resume";
import Diploma from "../../components/Specialtity/PromoPageComponents/Diploma";
import PromoBlock from "../../components/Specialtity/PromoPageComponents/PromoBlock";
import Questions from "../../components/Specialtity/PromoPageComponents/Questions";


export default function Specialties({ entity }) {
    const img  = entity.attributes.cover?.data ? process.env.API_URL + entity.attributes.cover.data[0].attributes.url : null
    const {attributes} = entity

    return (
        <MainLayout>
            <Wrapper>
                <ArrowButton back>назад</ArrowButton>
                <div className="main-title">{attributes.name}</div>
                <img className="cover" width="1000" src={img} alt='cover' />
                <Button>Подать заявку</Button>
                <EducationForm durations={entity.attributes.durations} />
                <div className="description">
                    {attributes.description}
                </div>
                <Technologies technologies={entity.attributes.technologies} />
                <TrainingPlan training_plan={entity.attributes.training_plan} />
                <MainDisciplines disciplines={entity.attributes.disciplines} />
                <SecialistSalary salary={entity.attributes.salary} />
                <Advantages />
            </Wrapper>
            <WideWrapper>
                <Resume resume={entity.attributes.resume} />
                <Diploma />
                <PromoBlock speciality={entity.attributes} />
                <Questions questions={entity.attributes.questions} />
            </WideWrapper>
        </MainLayout>
    )
}

const WideWrapper = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  padding-top: 70px;
  
  .main-title {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 61px;
    letter-spacing: -1.5px;
    margin-top: 60px;
    color: #3E3E3E;
  }
  
  .cover {
    margin-top: 40px;
    margin-bottom: 30px;
  }
  
  .description {
    margin-top: 55px;
    margin-bottom: 70px;
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 46px;
    letter-spacing: -0.25px;
    color: #3E3E3E;

  }
`

Specialties.getInitialProps = async (ctx) => {
    const { data } = await API.getSpecialty(ctx.query.id)
    return { entity: data.data }
}
