import { Provider } from "react-redux";
import "../styles/index.css";
import NextNProgress from 'nextjs-progressbar';

import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <NextNProgress color="#EABC5D"  />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
