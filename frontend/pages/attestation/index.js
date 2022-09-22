import Head from "next/head";
import { API } from "../../helpers/API";
import Attestation from "../../components/Screens/Attestation/Attestation";
import Layout from "../../components/Layouts/Layout";

export default function AttestationPage({ post }) {
  return (
    <Layout>
      <Head>
        <title>Аттестация педагогов</title>
      </Head>
      <Attestation post={post} />
    </Layout>
  );
}

AttestationPage.getInitialProps = async () => {
  const post = await API.getAttestationPage();

  return {
    post: post.data.data,
  };
};
