import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import React from "react";
import Head from "next/head";
import Courses from "../../components/Screens/Courses/Courses";

export default function CoursesPage(props) {
  return (
    <Layout>
      <Head>
        <title>Курсы - СИЭУиП</title>
      </Head>
      <Courses {...props} />
    </Layout>
  );
}

CoursesPage.getInitialProps = async () => {
  const specialties = await API.getCourses();
  const content = await API.getCoursesPage();
  return { specialties: specialties.data.data, content: content.data.data };
};
