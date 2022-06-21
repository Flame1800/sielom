import React from 'react';
import styled from "styled-components";
import {baseTheme} from "../../../styles/theme";
import MetaHeaderInfo from "../MetaHeaderInfo";
import NavLinks from "../NavLinks/NavLinks";
import SpecialButtons from "../SpecialButtons";
import mapLinks from "../mapLinks";
import Link from "../NavLinks/Link";
import MobileLinks from "./MobileLinks";

const MobileDropdown = () => {
    const [drop, setDrop] = React.useState(false)

    React.useEffect(() => {
        if (document) {
            document.body.style.overflow = drop ? 'hidden' : 'auto'
        }
    }, [drop])

    return (
        <Wrapper>
            <img src="/img/menu-icon.svg" alt="menu" className="button" onClick={() => setDrop(!drop)} />
            {drop &&
                <div className="dropdown">
                    <SpecialButtons />
                    <MobileLinks />
                    <div className="meta-mobile">
                        <MetaHeaderInfo />
                    </div>
                </div>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`

  .button {
    width: 30px;
    height: 30px;
    margin-left: 20px;
    transform: scale(-1, 1);
  }

  @media (min-width: 1350px) {
    display: none;
  }

  .dropdown {
    background: rgb(255, 255, 255);
    width: 100%;
    bottom: 0;
    left: 0;
    top: 100px;
    position: fixed;
    padding: 20px;
    color: #000;
    z-index: 9;
    overflow: scroll;
    min-height: 100vh;

    .meta-mobile {
      margin-top: 100px;
      margin-left: -40px;
      display: flex;
      justify-content: center;
    }
  }

`

export default MobileDropdown;