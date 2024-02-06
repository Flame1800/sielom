import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";
import { Suspense } from "react";
import { Metrika } from "../components/Metrika";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/*/!* Jquery *!/*/}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
          <link rel="stylesheet" href="/letsee/letsee.css" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <script src="//code.jivo.ru/widget/ZMOiXQR5r4" async />

          <meta
            name="description"
            content="Миссия СИЭУиП - Готовить профессионалов для рынка способных в условиях конкуренции
            Адаптировать и внедрять основные и новые виды деятельности по своей квалификации.
            Преобразовывать социальную среду. Владеть информационными технологиями, развивающими цифровую экономику"
          />
          <meta
            name="keywords"
            content="Сургутский институт экономики управления и права, среднее профессиональное образование"
          />
          <link
            rel="search"
            type="application/opensearchdescription+xml"
            href="/search/opensearch"
            title="Поиск на Сургутский институт экономики, управления и права"
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/96380617"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Metrika />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
