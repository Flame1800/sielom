import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import {useRouter} from "next/router";

const ArrowButton = ({children, back}) => {
    const router = useRouter()

        return <Wrapper onClick={() => router.back()}>
            {back
                ? (<><img src='/img/arrow-button-back.png' />
                {children}</>)
                :  (<>{children}
                <img src='/img/arrow-button.png' /></>)}
        </Wrapper>
}

const Wrapper = styled.div`
  color: ${baseTheme.colors.black};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
    margin-right: 10px;
  }
  
  &:hover {
    color: ${baseTheme.colors.light};
  }
`

export default ArrowButton