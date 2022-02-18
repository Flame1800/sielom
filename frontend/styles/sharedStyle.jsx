import styled from "styled-components";
import {baseTheme} from "./theme";


export const SidebarLinks = styled.div`
  position: sticky;
  top: 140px;
  max-width: 300px;
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  border: 1px solid ${baseTheme.colors.light};
  border-radius: 20px;
  margin-right: 20px;
  padding: 15px;
  height: 100%;
  margin-bottom: 30px;
  bottom: 30px;
  margin-top: 80px;

  div {
    cursor: pointer;
    margin-bottom: 10px;
    transition: .1s;
    border-radius: 10px;
    padding: 8px;

    &:hover {
      background: #fff4dd;
    }
  }
`