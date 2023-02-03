import Header from "../Header/Header";
import styled from "styled-components";
import Footer from "../Footer";
import UpButton from "../UpButton";

export default function Layout({ children, noFooter }) {
  return (
    <Container>
      <Header />
      <Wrapper>{children}</Wrapper>
      {!noFooter && <Footer />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 99vh;
  
  
  @media screen and (max-width: 1340px) {
    display: block;
  }
`

const Wrapper = styled.main`
  max-width: 1320px;
  margin: auto;
  min-height: 60vh;
  font-size: 1vw;
  padding-bottom: 50px;
  flex: 1;
  position: relative;

  @media (max-width: 1350px) {
    padding: 20px;
  }
`;
