import Head from 'next/head'
import Select from "../../components/Select";
import Input from "../../components/Input";
import EventCard from "../../components/Events/EventCard";
import MainLayout from "../../layouts/MainLayout";
import FilterBuildings from "../../components/FilterBuildings";
import {API} from "../../libs/API";
import PostPage from "../rules/[id]";
import MainHeader from "../../components/Shared/MainHeader";
import styled from "styled-components";


export default function Events({ events }) {
  return (
      <MainLayout>
          <MainHeader>МЕРОПРИЯТИЯ</MainHeader>
          <FilterBuildings clickHandler={() => {}} />
          <Content>
              {events.map(event => <EventCard key={event.id} event={event} />)}
          </Content>
      </MainLayout>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

Events.getInitialProps = async () => {
    const { data } = await API.getEvents()
    return { events: data.data }
}
