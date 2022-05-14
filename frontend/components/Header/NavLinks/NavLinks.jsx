import React from 'react';
import mapLinks from "../mapLinks";
import styled from "styled-components";
import LinkComponent from "./Link";
import {observer} from "mobx-react-lite";
import ButtonSchedule from "../ButtonSchedule";
import Link from 'next/link'

const NavLinks = () => {
    return (
            <LinksContainer>
                <div className='links'>
                    {mapLinks.map(({link, content}) =>
                            (<LinkComponent key={link.src} link={link} content={content} />))}
                </div>
                <Link href='/payment'>
                    <a className='btn-payment'> Онлайн оплата</a>
                </Link>
                <ButtonSchedule />
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
  
  .btn-payment {
    position: relative;
    margin-left: 40px;
    border: 2px solid #2e2a5d;
    border-radius: 6px;
    font-weight: 600;
    font-size: 13px;
    line-height: 10px;
    color: #3E3E3E;
    padding: 9px 18px;
    transition: .3s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #2e2a5d;
      color: #fff;
    }
  }
`

export default observer(NavLinks);