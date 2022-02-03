import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import MainHeader from "../../components/Shared/MainHeader";
import SpecCard from "../../components/Specialties/SpecCard";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";


export default function Specialties({ specialties }) {
    return (
        <MainLayout>
            <MainHeader>ПРОГРАММЫ ОБУЧЕНИЯ</MainHeader>
            <Content>
                {specialties.map(item => <SpecCard key={item.id} item={item.attributes} />)}
            </Content>
        </MainLayout>
    )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-left: -10px;
  margin-top: 60px;
  border-top: 1px solid ${baseTheme.colors.light};
  padding-top: 20px;
`

Specialties.getInitialProps = async () => {
    const { data } = await API.getSpecialties()
    return { specialties: data.data }
}
