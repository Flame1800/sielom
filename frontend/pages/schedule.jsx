import React from "react";
import Layout from "../components/Layouts/Layout";
import { API } from "../helpers/API";
import Head from "next/head";

const Schedule = ({ schedule }) => {
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

Schedule.getInitialProps = async () => {
  const { data } = await API.getSchedule();
  return { schedule: data.data.attributes };
};

export default Schedule;
