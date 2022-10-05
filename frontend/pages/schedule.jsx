import React from "react";
import Layout from "../components/Layouts/Layout";
import { API } from "../helpers/API";
import Head from "next/head";
import Schedule from "../components/Screens/Schedule/Schedule";

const SchedulePage = ({ schedule }) => {
  console.log(schedule);
  return (
    <Layout>
      <Head>
        <title>Расписание - СИЭУиП</title>
      </Head>
      <Schedule schedule={schedule} />
    </Layout>
  );
};

SchedulePage.getInitialProps = async () => {
  const { data } = await API.getSchedule();
  return { schedule: data.data.attributes };
};

export default SchedulePage;
