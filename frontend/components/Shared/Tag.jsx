import styled from "styled-components";
import {baseTheme} from "../../styles/theme";

const Tag = ({children, white}) => {
    return white ? <WhiteWrapper>{children}</WhiteWrapper> : <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  border-radius: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #151515;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
  border: rgba(0, 0, 0, 0.6) 2px solid;
  margin-right: 10px;
  padding: 10px 15px;
  height: 33px;
  margin-bottom: 10px;
`

const WhiteWrapper = styled(Wrapper)`
  color: #fff;
  border: #fff 2px solid;
`


export default Tag