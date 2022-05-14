import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import MainHeader from "../../components/Common/MainHeader";
import SpecCard from "../../components/Specialtity/SpecCard";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import SpecialityCardsHolder from "../../components/Specialtity/SpecialityCardsHolder";


export default function Specialties({ specialties }) {
    return (
        <MainLayout>
            <MainHeader>СПЕЦИАЛЬНОСТИ</MainHeader>
            <Content>
                <SpecialityCardsHolder specialties={specialties}/>
            </Content>
        </MainLayout>
    )
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: 60px;
  padding-top: 20px;
`

Specialties.getInitialProps = async () => {
    const { data } = await API.getSpecialties()
    return { specialties: data.data }
}
