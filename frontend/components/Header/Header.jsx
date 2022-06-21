import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
import React from "react";
import Dropdown from "./DropLinks/LinksDropdown";
import MetaHeaderInfo from "./MetaHeaderInfo";
import Logo from "./Logo";
import NavLinks from "./NavLinks/NavLinks";
import { observer } from "mobx-react-lite";
import MobileDropdown from "./MobileHeader/MobileDropdown";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <HeaderTag>
        <Content>
          <Logo />
          <NavLinks />
          <div className="meta">
            <MetaHeaderInfo />
          </div>
          <MobileDropdown />
        </Content>
      </HeaderTag>
      <Dropdown />
    </>
  );
};

const HeaderTag = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  z-index: 10;
`;

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

    .meta {
      display: none;
    }
  }
`;

export default observer(Header);
