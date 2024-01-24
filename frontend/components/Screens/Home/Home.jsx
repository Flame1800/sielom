import React from "react";
import Infographics from "./components/Infographics";
import News from "./components/News";
import Ads from "./components/Ads";
import SpecialitiesContent from "../../Specialtity/SpecialitiesContent";
import Mission from "./components/Mission";
import Banner from "./components/Banner";
import Partners from "./components/Partners";

const Home = ({ specialties, news, statistics, ads }) => {

  return (
    <>
      <Banner />
      <Infographics statistics={statistics} />
      <News news={news} />
      <Ads ads={ads} />
      <SpecialitiesContent specialties={specialties} />
      <Partners />
    </>
  );
};

export default Home;
