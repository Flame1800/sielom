import styled from "styled-components";
import { baseTheme } from "./theme";

export const SidebarLinks = styled.div`
  position: sticky;
  top: 140px;
  min-width: 300px;
  max-width: 300px;
  max-height: 50vh;
  overflow: auto;
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  padding: 15px;
  height: 100%;
  bottom: 30px;
  margin-top: 40px;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #efefef;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbcbcb;
    border-radius: 5px;
  }


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
    transition: 0.1s;
    border-radius: 10px;
    padding: 10px;

    &:hover {
      background: rgba(238, 238, 238, 0.5);
    }
  }

  .active {
    background: #fff4dd;
    color: #785100;

    &:hover {
      background: #fff4dd;
    }
  }
`;

export const InputStyled = styled.input`
  border: 2px solid ${baseTheme.colors.light};
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 5px;
  font-size: 18px;
`;

export const ButtonStyle = styled.button`
  background: ${({ outline }) => (!outline ? baseTheme.colors.gold : "")};
  border-radius: 13px;
  height: 45px;
  padding: 20px 40px;
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

    color: #3e3e3e;
    background: #fff;
    border: ${baseTheme.colors.gold} 2px solid;
  }
`;
