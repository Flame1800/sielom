import Header from "../components/Header/Header";
import styled from "styled-components";
import Footer from "../components/Footer";

export default function MainLayout({ children, noFooter }) {
  return (
    <>
      <Header />
      <Wrapper>
          {children}
      </Wrapper>
        {!noFooter && <Footer />}
    </>
  );
}



const Wrapper = styled.div`
  max-width: 1320px;
  margin: auto;
  min-height: 60vh;
  font-size: 1vw;
  padding-bottom: 50px;
  
  @media (max-width: 1350px) {
    padding: 20px;
  }
`

