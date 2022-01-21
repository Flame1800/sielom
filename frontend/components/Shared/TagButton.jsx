import styled from "styled-components";
import {baseTheme} from "../../styles/theme";

const Tag = ({children, active}) => {
    if (active) {
        return <ActiveTag>{children}</ActiveTag>
    }

    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  border-radius: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #151515;
  font-size: 15px;
  font-weight: 600;
  transition: 0.2s;
  border: rgba(0, 0, 0, 0.6) 2px solid;
  margin-right: 10px;
  padding: 10px 15px;
  cursor: pointer;
  height: 33px;

  &:hover {
    background: rgba(234, 188, 93, 0.56);
  }
`


const ActiveTag = styled(Wrapper)`
  background: ${baseTheme.colors.gold};

  &:hover {
    background: ${baseTheme.colors.gold};
  }
`

export default Tag