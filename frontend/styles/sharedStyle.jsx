import styled from "styled-components";
import {baseTheme} from "./theme";

export const SidebarWrapper = styled.div`
  display: grid;
  grid-template-columns: 310px auto;
  margin-top: 60px;
  border-top: 1px solid ${baseTheme.colors.light};
  
  .body-post {
    padding-top: 20px;
    padding-left: 35px;
    max-width: 1040px;
    min-height: 60vh;
    border-left: 1px solid ${baseTheme.colors.light};
  }
`

export const SidebarLinks = styled.div`
  margin-top: 40px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  
  div {
    cursor: pointer;
    margin-bottom: 20px;
    transition: .1s;
    
    &:hover {
      color: ${baseTheme.colors.gold};
    }
  }
`