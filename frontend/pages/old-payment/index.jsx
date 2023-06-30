import React from "react";
import Head from "next/head";
import PaymentSber from "../../components/Screens/Payment/PaymentSber";
import Layout from "../../components/Layouts/Layout";

const PaymentPage = () => {
  return (
      <Layout>
        <Head>
          <title>Онлайн оплата - СИЭУиП</title>
        </Head>
        <PaymentSber />
      </Layout>
  );
};

export default PaymentPage;