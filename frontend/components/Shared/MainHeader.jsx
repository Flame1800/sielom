import styled from "styled-components";

const MainHeader = ({children}) => {
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  margin-top: 40px;
  font-family: Playfair Display, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 36px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: #3E3E3E;
`

export default MainHeader