import styled from "styled-components";

const MainHeader = ({children}) => {
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  margin-top: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 74px;
  text-transform: uppercase;
  color: #3e3e3e;
  margin-bottom: 40px;
`

export default MainHeader