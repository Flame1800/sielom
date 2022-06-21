import React from 'react';
import Link from "next/link";
import {baseTheme} from "../../../styles/theme";
import styled from "styled-components";
import navigationStore from "../../../stores/navigationStore";
import {observer} from "mobx-react-lite";

const LinkComponent = ({link, content}) => {

    const openDropDown = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (link.name === navigationStore?.activeDropLink?.link?.name) {
            navigationStore.setDropLink(null)
        } else {
            navigationStore.setDropLink({link, content})
        }
    }

    if (link.src === 'common') {
        return (
            <LinkWrapper onClick={(e) => openDropDown(e)}>
                <img src="/img/menu-icon.svg" alt=""/>
            </LinkWrapper>
        )
    }

    if (content.length === 0) {
        return (
            <Link href={link.src} >
                <LinkWrapper>
                    {link.name}
                </LinkWrapper>
            </Link>
        )
    }

    return (
        <LinkWrapper onClick={(e) => openDropDown(e)}>
            {link.name}
        </LinkWrapper>
    );
};

const LinkWrapper = styled.a`
  font-size: 13px;
  margin-right: 20px;
  color: ${baseTheme.colors.black};
  font-weight: 600;
  cursor: pointer;
  user-select: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #d5a833;
  }
`

export default  observer(LinkComponent);