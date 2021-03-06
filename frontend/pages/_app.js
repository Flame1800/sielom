import NextNProgress from "nextjs-progressbar";
import {baseTheme} from "../styles/theme";
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <NextNProgress
            color={baseTheme.colors.gold}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
        />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
