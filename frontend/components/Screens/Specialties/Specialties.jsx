import React from "react";
import MainHeader from "../../UI/MainHeader";
import SpecialitiesContent from "../../Specialtity/SpecialitiesContent";
import styled from "styled-components";

const Specialties = ({ specialties }) => {
  return (
    <>
      <MainHeader>СПЕЦИАЛЬНОСТИ</MainHeader>
      <Content>
        <SpecialitiesContent specialties={specialties} />
      </Content>
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: 60px;
  padding-top: 20px;
`;

export default Specialties;
