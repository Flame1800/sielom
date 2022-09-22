import Layout from "../../components/Layouts/Layout";
import Head from "next/head";
import React from "react";
import Login from "../../components/Screens/Profile/Login";

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title> Авторизация - СИЭУиП</title>
      </Head>
      <Login />
    </Layout>
  );
}
