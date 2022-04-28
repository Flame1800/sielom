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