import NextNProgress from "nextjs-progressbar";
import { baseTheme } from "../styles/theme";
import "../styles/index.css";
import { observer } from "mobx-react-lite";
import React from "react";


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

export default observer(MyApp);
