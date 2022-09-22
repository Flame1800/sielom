import React from "react";
import { PartnersStyle } from "../../../../styles/homeStyle";
import Link from "next/link";

const Partners = () => {
  return (
    <PartnersStyle>
      <a href="components/Screens/Home/components/Partners">
        <img alt="partner" src="/img/offical-partner-1.png" />
      </a>
      <a href="https://edu.gov.ru">
        <img alt="partner" src="/img/offical-partner-4.png" />
      </a>
      <Link href="/site/stopcorrupt">
        <a>
          <img alt="partner" src="/img/offical-partner-2.png" />
        </a>
      </Link>
      <a href="components/Screens/Home/components/Partners">
        <img alt="partner" src="/img/offical-partner-3.png" />
      </a>
    </PartnersStyle>
  );
};

export default Partners;
