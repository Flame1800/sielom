import Layout from "../../components/Layouts/Layout";
import { API } from "../../helpers/API";
import Head from "next/head";
import React from "react";
import AdsList from "../../components/Screens/Posts/AdsList";

export default function AdsPage({ news }) {
    return (
        <Layout>
            <Head>
                <title>Объявления - СИЭУиП</title>
            </Head>
            <AdsList posts={news} />
        </Layout>
    );
}

AdsPage.getInitialProps = async () => {
    const { data } = await API.getAds();
    return { news: data.data };
};
