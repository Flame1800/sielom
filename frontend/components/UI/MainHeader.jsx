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

  @media (max-width: 768px) {
    font-size: 8em;
    margin-bottom: 0;
    line-height: 38px;
  }
`

export default MainHeader