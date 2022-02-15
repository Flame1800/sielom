import styled from "styled-components";

const MainHeader = ({children}) => {
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  margin-top: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 36px;
  text-transform: uppercase;
  color: #3e3e3e;
  margin-bottom: 80px;
`

export default MainHeader