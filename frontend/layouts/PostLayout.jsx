import styled from "styled-components";
import ArrowButton from "../components/Shared/ArrowButton";

export default function PostLayout({ children }) {
    return (
        <Wrapper>
            <div>
                <ArrowButton back>назад</ArrowButton>
            </div>
            <div className='body-post'>
                {children}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 310px auto;
  margin-top: 60px;
  margin-bottom: 100px;
  
  .body-post {
    max-width: 740px;
  }
`
