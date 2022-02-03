import Link from "next/link";
import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import LinkWrapper from "../Shared/LinkWrapper";
import React from 'react'
import Dropdown from "./DropLinks/Dropdown";
import mapLinks from "./DropLinks/mapLinks";
import {useAppDispatch} from "../../redux/hooks";
import {setDropdownContent} from "../../redux/slices/nav";

const upLinks = [
  {
    src: "/specialties",
    name: "Программы обучения",
  },
  {
    src: "/",
    name: "Персонал",
  },
  {
    src: "/",
    name: "WordSkills",
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
            <Link href="/">
              <a className='logo'>
              <img src="/img/logo-sielom.png" alt="Logo" />
                <span className="name">
                  Сургутский институт экономики, управления  и права
                </span>
              </a>
            </Link>
            <LinksContainer>
              <div className='first-links'>
                {upLinks.map((link) => (
                    <LinkWrapper href={link.src} >{link.name}</LinkWrapper>
                ))}
                <Link href='/schedule'>
                  <a style={{ marginRight: '0px' }}>
                    <div className="button-schedule">Рассписание</div>
                  </a>
                </Link>
              </div>
              <div className="second-links" onClick={e => e.stopPropagation()}>
                {mapLinks.map(({link, content}) => (
                    <div key={link.name} onClick={() => selectLink(content)}>{link.name}</div>
                ))}
              </div>
            </LinksContainer>
            <div className="right-side">
              <Link href='/profile/login'>
                <a>
                  <div className="user-button">
                     <img src="/img/user-icon.png" width={20} height={20}  />
                  </div>
                </a>
              </Link>
              <a className='phone' href="tel:(3462) 550-528">(3462) 550-528</a>
            </div>
          </div>
        </Wrapper>
        {showDropdown && <Dropdown close={() => setShowDropdown(!showDropdown)} />}
      </>
);
};

const Wrapper = styled.div`
  padding-top: 26px;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255);
  z-index: 10;
  border-bottom: 1px solid ${baseTheme.colors.light};
  
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .name {
      max-width: 190px;
      margin-left: 16px;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #5F5F5F;
      font-weight: 500;
    }
  }

  .content {
    position: relative;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .right-side {
    display: flex;
    align-items: center;
    
    .user-button {
      margin-right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #F2F2F2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .phone {
      font-size: 13px;
      color: ${baseTheme.colors.black};
      font-weight: bold;
    }
  }
`

const LinksContainer = styled.div`
  margin-left: -10%;
  .first-links {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
      }
    }
    
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
    justify-content: space-between;

    div {
      font-size: 13px;
      margin-right: 30px;
      color: ${baseTheme.colors.black};
      font-weight: 600;
      cursor: pointer;
      
      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: #d5a833;
      }
    }
  }
`

export default Header;
