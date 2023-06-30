import React from "react";
import Layout from "../../components/Layouts/Layout";
import Head from "next/head";
import PaymentSNGB from "../../components/Screens/Payment/PaymentSNGB";


// Оплата через SNGB, что бы отобразить эту страницу переименуйте в payment
const PaymentPage = () => {
  return (
    <Layout>
      <Head>
        <title>Онлайн оплата - СИЭУиП</title>
      </Head>
      <PaymentSNGB />
    </Layout>
  );
};

export default PaymentPage;
