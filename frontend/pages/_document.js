import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";

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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          {/* Yandex.Metrika counter*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)}; 
                        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) 
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
                        ym(52013204, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });
                        `,
            }}
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/52013204"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
          {/*/Yandex.Metrika counter*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
