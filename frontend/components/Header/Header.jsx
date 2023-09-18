import styled from "styled-components";
import React from "react";
import Dropdown from "./DropLinks/LinksDropdown";
import MetaHeaderInfo from "./MetaHeaderInfo";
import Logo from "./Logo";
import NavLinks from "./NavLinks/NavLinks";
import { observer } from "mobx-react-lite";
import MobileDropdown from "./MobileHeader/MobileDropdown";
import SpecialButtons from "./SpecialButtons";
import EyeButton from "./EyeButton";

const Header = () => {
  return (
    <>
      <HeaderTag>
        <Content>
          <Logo />
            <Rows>
                <Row>
                    <SpecialButtons />
                    <MetaHeaderInfo />
                </Row>
                <hr />
                <Row>
                    <NavLinks />
                </Row>
            </Rows>
          <MobileDropdown />
        </Content>
      </HeaderTag>
      <Dropdown />
    </>
  );
};

const HeaderTag = styled.header`
  padding: 20px 0;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 10px;
  z-index: 10;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  
  hr {
    background-color: #E2E2E2; 
    height: 1px; 
    border: 0;
  }

  @media (max-width: 1350px) {
    display: none;
  }
`

const Row = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1350px) {
    padding: 0 20px;
  }
`;

export default observer(Header);
