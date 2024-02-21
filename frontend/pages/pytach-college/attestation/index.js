import Head from "next/head";

import { API } from "/helpers/API";
import Layout from "/components/Layouts/Layout";
import PagePost from "/components/UI/PagePost";

export default function AttestationPage({ post }) {
  return (
    <Layout>
      <Head>
        <title>Аттестация педагогов</title>
      </Head>
      <PagePost post={post} />
    </Layout>
  );
}

AttestationPage.getInitialProps = async () => {
  const post = await API.getAttestationPageSecondCollege();

  return {
    post: post.data.data,
  };
};
