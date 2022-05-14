import styled from "styled-components";
import {baseTheme} from "../../styles/theme";

const Button = ({children, outline}) => {
    return <Wrapper outline={outline}>{children}</Wrapper>
}

const Wrapper = styled.button`
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
  border:  ${baseTheme.colors.gold} 2px solid;

  &:hover {
    color: #3E3E3E;
    background: none;
    border:  ${baseTheme.colors.gold} 2px solid;
  }
`

export default Button