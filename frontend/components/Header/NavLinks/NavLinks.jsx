import React from 'react';
import mapLinks from "../mapLinks";
import styled from "styled-components";
import Link from "./Link";
import {observer} from "mobx-react-lite";
import ButtonSchedule from "../ButtonSchedule";

const NavLinks = () => {
    return (
            <LinksContainer>
                <div className='links'>
                    {mapLinks.map(({link, content}) =>
                            (<Link key={link.src} link={link} content={content} />))}
                </div>

                <ButtonSchedule />
            </LinksContainer>
    );
};


const LinksContainer = styled.div`
  width: 680px;
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