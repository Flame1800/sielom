import NextNProgress from "nextjs-progressbar";
import { baseTheme } from "../styles/theme";
import "../styles/index.css";
import { observer } from "mobx-react-lite";
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";


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
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    </>
  );
}

export default observer(MyApp);
