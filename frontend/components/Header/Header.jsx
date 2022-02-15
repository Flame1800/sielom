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
              <img src="/img/logo-sielom.svg" alt="Logo" />
                <span className="name">
                  Сургутский институт экономики, управления  и права
                </span>
              </a>
            </Link>
            <LinksContainer>
              <div className="second-links" onClick={e => e.stopPropagation()}>
                {mapLinks
                    .map(({link, content}) => {
                      if (link.name === 'common') {
                        return <div key={link.name} onClick={() => selectLink(content)}>
                          <img src="/img/menu-icon.svg" alt=""/>
                        </div>
                      }
                      return <div key={link.name} onClick={() => selectLink(content)}>{link.name}</div>

                })}
                <Link href='/schedule'>
                  <a style={{ marginRight: '0px' }}>
                    <div className="button-schedule">Рассписание</div>
                  </a>
                </Link>
              </div>
            </LinksContainer>
            <div className="right-side">
              <Link href='/profile/login'>
                <a>
                  <div className="user-button">
                     <img src="/img/user-icon.svg" width={20} height={20}  />
                  </div>
                </a>
              </Link>
              <div className="left-side">
                <a className='phone' href="tel:(3462) 550-528">
                  <img src="/img/phone-icon.svg" alt='icon' />
                  (3462) 550-528
                </a>
                <div className="social">
                  <a target="_blank" href="https://vk.com/sielom"><img src="/img/vk.svg" alt='icon' /></a>
                  <a target="_blank" href="https://www.instagram.com/sielom86/"><img src="/img/inst.svg" alt='icon' /></a>
                  <a target="_blank" href="https://www.youtube.com/c/АНПООСИЭУиП"><img src="/img/youtube.svg" alt='icon' /></a>
                  <a target="_blank" href="https://www.facebook.com/sielom86-568601863544116"><img src="/img/facebook.svg" alt='icon' /></a>
                </div>
              </div>

            </div>
          </div>
        </Wrapper>
        {showDropdown && <Dropdown close={() => setShowDropdown(!showDropdown)} />}
      </>
);
};

const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
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
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #9E9E9E;
      margin-left: 15px;
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
  
  .left-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    .social {
      display: flex;
      align-items: center;
      height: 20px;
      margin-top: 5px;
      
      a {
        display: flex;
      }
       img {
         margin-left: 10px;
         
         &:hover {
           opacity: 0.7;
         }
       }
    }
  }

  .right-side {
    display: flex;
    align-items: center;

    .user-button {
      margin-right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #c2c2c2;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .phone {
      img {
        margin-right: 5px;
        object-fit: contain;
        height: 18px;
        width: 18px;
      }
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      color: #5F5F5F;
    }
  }
`

const LinksContainer = styled.div`
  margin-left: -10%;

  .second-links {    
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
