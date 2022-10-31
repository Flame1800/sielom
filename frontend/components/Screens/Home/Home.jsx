import React from "react";
import Infographics from "./components/Infographics";
import News from "./components/News";
import SpecialitiesContent from "../../Specialtity/SpecialitiesContent";
import Mission from "./components/Mission";
import Banner from "./components/Banner";

const Home = ({ specialties, news, statistics }) => {
  return (
    <>
      <Banner />
      <Infographics statistics={statistics} />
      <Mission />
      <News news={news} />
      <SpecialitiesContent specialties={specialties} />
    </>
  );
};

export default Home;
