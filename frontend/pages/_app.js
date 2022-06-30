import NextNProgress from "nextjs-progressbar";
import { baseTheme } from "../styles/theme";
import "../styles/index.css";
import { observer } from "mobx-react-lite";
import React from "react";
import {
  defaultSetBodyClass,
  defaultGetSettings,
} from "@n3/react-vision-panel";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const settings = defaultGetSettings();
    Object.keys(settings).forEach((property) => {
      defaultSetBodyClass(property, settings[property]);
    });
  }, []);

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
