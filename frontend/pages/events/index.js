import EventCard from "../../components/Card/EventCard";
import MainLayout from "../../layouts/MainLayout";
import FilterBuildings from "../../components/FilterBuildings";
import { API } from "../../libs/API";
import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import Head from "next/head";
import React from "react";

export default function Events({ events }) {
  return (
    <MainLayout>
      <Head>
        <title>Мероприятия - СИУЭиП</title>
      </Head>
      <MainHeader>МЕРОПРИЯТИЯ</MainHeader>
      <Content>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Content>
    </MainLayout>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

Events.getInitialProps = async () => {
  const { data } = await API.getEvents();
  return { events: data.data };
};
