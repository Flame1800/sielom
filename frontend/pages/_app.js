import "../styles/index.css";
import NextNProgress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }) {
  return (
    <>
        <NextNProgress color="#EABC5D"  />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
