import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import NotFound from "../components/Screens/NotFound/NotFound";

export default function NotFoundPage() {
  return (
    <Layout>
      <Head>
        <title>Страница не найдена</title>
      </Head>
      <NotFound />
    </Layout>
  );
}
