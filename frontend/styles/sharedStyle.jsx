import styled from "styled-components";
import {baseTheme} from "./theme";


export const SidebarLinks = styled.div`
  position: sticky;
  top: 100px;
  min-width: 300px;
  max-width: 300px;
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e3e3e3;
  margin-right: 20px;
  padding: 15px;
  height: 100%;
  margin-bottom: 30px;
  bottom: 30px;
  margin-top: 80px;
  
  @media (max-width: 768px) {
    position: relative;
    margin-top: 0;
    margin-bottom: 100px;
    border-right: 0;
    margin-right: 0;
  }

  a {
    cursor: pointer;
    margin-bottom: 10px;
    transition: .1s;
    border-radius: 10px;
    padding: 8px;

    &:hover {
      background: #fff4dd;
    }
  }

  .active {
    background: #fff4dd;
    color: #785100;
  }
`

export const ButtonStyle = styled.button`
  background: ${({outline}) => !outline ? baseTheme.colors.gold : ''};
  border-radius: 13px;
  height: 55px;
  padding: 20px 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #46371a;
  font-size: 18px;
  max-width: 400px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  white-space: nowrap;
  border: ${baseTheme.colors.gold} 2px solid;

  &:disabled {
    background: #cecece;
    border: #cecece 2px solid;
    cursor: default;
  }

  &:hover {

    &:disabled {
      background: #cecece;
      border: #cecece 2px solid;
      cursor: default;
    }

    color: #3E3E3E;
    background: none;
    border: ${baseTheme.colors.gold} 2px solid;
  }
`