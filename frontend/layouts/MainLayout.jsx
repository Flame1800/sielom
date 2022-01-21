import Header from "../components/Header/Header";
import styled from "styled-components";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
        <Footer />
    </>
  );
}



const Wrapper = styled.div`
  max-width: 1320px;
  margin: auto;
  min-height: 60vh;
`
