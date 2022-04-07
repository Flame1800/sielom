import React from 'react';
import mapLinks from "../mapLinks";
import styled from "styled-components";
import Link from "./Link";
import {observer} from "mobx-react-lite";

const NavLinks = () => {
    return (
            <LinksContainer>
                    {mapLinks
                        .map(({link, content}) => (<Link link={link} content={content} />))}
                    <a
                        target="_blank" href='https://new.sielom.ru/timetable'
                        style={{ marginLeft: "20px", marginRight: '0px' }}
                    >
                        <div className="button-schedule">Расписание</div>
                    </a>
            </LinksContainer>
    );
};


const LinksContainer = styled.div`
  margin-left: -10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

    .button-schedule {
      border: 2px solid #EABC5D;
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
      line-height: 10px;
      color: #3E3E3E;
      padding: 9px 18px;
      transition: .3s;
      cursor: pointer;

      &:hover {
        background: #EABC5D;
        color: #3E3E3E;
      }
    }
`

export default observer(NavLinks);