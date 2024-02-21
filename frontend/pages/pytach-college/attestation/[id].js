import Head from "next/head";
import { API } from "/helpers/API";
import Layout from "/components/Layouts/Layout";
import PagePost from "/components/UI/PagePost";

export default function AttestationTeacherPage({ post }) {
  return (
    <Layout>
      <Head>
        <title>Аттестация - {post?.attributes?.name}</title>
      </Head>
      <PagePost post={post} />
    </Layout>
  );
}

AttestationTeacherPage.getInitialProps = async (ctx) => {
  const post = await API.getAttestationTeacher(ctx.query.id);

  return {
    post: post.data.data[0],
  };
};
