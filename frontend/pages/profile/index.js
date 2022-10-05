import Layout from "../../components/Layouts/Layout";
import Head from "next/head";
import React from "react";
import Profile from "../../components/Screens/Profile/Profile";

export default function ProfilePage() {
  return (
    <Layout noFooter>
      <Head>
        <title> Личный кабинет - СИЭУиП</title>
      </Head>
      <Profile />
    </Layout>
  );
}
