import Link from "next/link";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import LinkWrapper from "../Shared/LinkWrapper";
import React from 'react'
import Dropdown from "./DropLinks/Dropdown";
import mapLinks from "./DropLinks/mapLinks";
import {useAppDispatch} from "../../redux/hooks";
import {setDropdownContent, setDropLink} from "../../redux/slices/nav";

const upLinks = [
  {
    src: "/",
    name: "Об институте",
  },
  {
    src: "/",
    name: "Персонал",
  },
  {
    src: "/",
    name: "WordSkills",
  },
  {
    src: "/events",
    name: "Календарь мероприятий",
  },
  {
    src: "/rules",
    name: "Учебные материалы",
  },
];


const Header = () => {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const dispatch = useAppDispatch()

  const selectLink = (content) => {
    setShowDropdown(true)
    dispatch(setDropdownContent(content))
  }

  return (
      <>
        <Wrapper>
          <div className='content'>
            <Link href="/"><a><img src="/img/logo-sielom.png" alt="Logo" /></a></Link>
            <LinksContainer>
              <div className='first-links'>
                {upLinks.map((link) => (
                    <LinkWrapper href={link.src} >{link.name}</LinkWrapper>
                ))}
              </div>
              <div className="second-links" onClick={e => e.stopPropagation()}>
                {mapLinks.map(({link, content}) => (
                    <div onClick={() => selectLink(content)}>{link.name}</div>
                ))}
              </div>
            </LinksContainer>
            <a className='phone' href="tel:(3462) 550-528">(3462) 550-528</a>
          </div>
        </Wrapper>
        {showDropdown && <Dropdown close={() => setShowDropdown(!showDropdown)} />}
      </>
);
};

const Wrapper = styled.div`
  padding-top: 26px;
  padding-bottom: 5px;
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255);
  z-index: 10;
  border-bottom: 1px solid ${baseTheme.colors.light};

  .content {
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .phone {
    font-size: 13px;
    color: ${baseTheme.colors.black};
    font-weight: bold;
  }
`

const LinksContainer = styled.div`
  .first-links {
    margin-bottom: 20px;

    a {
      font-size: 12px;
      color: #797979;
      font-weight: 600;
      margin-right: 26px;

      &:hover {
        color: #3d3d3d;
      }
    }
  }
  
  .second-links {    margin-bottom: 20px;
    display: flex;

    div {
      font-size: 13px;
      color: ${baseTheme.colors.black};
      font-weight: 600;
      margin-right: 26px;
      cursor: pointer;

      &:hover {
        color: #d5a833;
      }
    }
  }
`

export default Header;
