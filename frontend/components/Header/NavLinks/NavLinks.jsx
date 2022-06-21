import React from 'react';
import mapLinks from "../mapLinks";
import styled from "styled-components";
import LinkComponent from "./Link";
import {observer} from "mobx-react-lite";
import SpecialButtons from "../SpecialButtons";
import Link from 'next/link'

const NavLinks = () => {
    return (
            <LinksContainer>
                <div className='links'>
                    {mapLinks.map(({link, content}) =>
                            (<LinkComponent key={link.src} link={link} content={content} />))}
                </div>
                <SpecialButtons />
            </LinksContainer>
    );
};


const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1350px) {
    display: none;
  }
`

export default observer(NavLinks);