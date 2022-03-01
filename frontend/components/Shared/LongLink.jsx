import styled from "styled-components";
import {baseTheme} from "../../styles/theme";
import {useRouter} from "next/router";

const LongLink = ({children}) => {

    return <Wrapper>
            <div className="item">{children}</div>
            <img src="/img/arrow-45-small.png" alt="arrow-icon" className="icon"/>
    </Wrapper>
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: -0.01em;
  color: #000000;
  width: 100%;
  border-bottom: 1px solid ${baseTheme.colors.light};
  padding-bottom: 12px;
  transition:  0.2s;
  cursor: pointer;
  margin-bottom: 20px;

  .icon {
    position: absolute;
    top: -10px;
    right: -10px;
    transition:  0.2s;
  }

  &:hover {
    color: ${baseTheme.colors.gold};

    .icon {
      transform: rotate(45deg);
    }
  }
`

export default LongLink