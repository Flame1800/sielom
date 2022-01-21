import styled from "styled-components";
import {baseTheme} from "../../styles/theme";

const Button = ({children}) => {
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  background: ${baseTheme.colors.gold};
  border-radius: 13px;
  height: 55px;
  min-width: 229px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color:  ${baseTheme.colors.black};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #3E3E3E;
    background: #fff;
    border:  ${baseTheme.colors.gold} 2px solid;
  }
`

export default Button