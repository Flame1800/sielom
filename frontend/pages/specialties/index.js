import Head from 'next/head'
import Select from "../../components/Select";
import Input from "../../components/Input";
import EventCard from "../../components/Events/EventCard";
import MainLayout from "../../layouts/MainLayout";
import FilterBuildings from "../../components/FilterBuildings";
import {API} from "../../libs/API";
import PostPage from "../rules/[id]";
import MainHeader from "../../components/Shared/MainHeader";
import SpecCard from "../../components/Specialties/SpecCard";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";


export default function Events({ events }) {
    return (
        <MainLayout>
            <MainHeader>ПРОГРАММЫ ОБУЧЕНИЯ</MainHeader>
            <Content>
                {events.map(event => <SpecCard key={event.id} event={event} />)}
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

Events.getInitialProps = async () => {
    const { data } = await API.getEvents()
    return { events: data.data }
}
