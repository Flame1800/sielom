import React from "react";
import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import Payment from "../components/Screens/Payment/Payment";

const PaymentPage = () => {
  return (
    <Layout>
      <Head>
        <title>Онлайн оплата - СИЭУиП</title>
      </Head>
      <Payment />
    </Layout>
  );
};

export default PaymentPage;
