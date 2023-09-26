import Head from "next/head";
import { API } from "../../helpers/API";
import Attestation from "../../components/Screens/Attestation/Attestation";
import Layout from "../../components/Layouts/Layout";

export default function AttestationTeacherPage({ post }) {
  return (
    <Layout>
      <Head>
        <title>Аттестация - {post?.attributes?.name}</title>
      </Head>
      <Attestation post={post} />
    </Layout>
  );
}

AttestationTeacherPage.getInitialProps = async (ctx) => {
  const post = await API.getAttestationTeacher(ctx.query.id);

  return {
    post: post.data.data[0],
  };
};
