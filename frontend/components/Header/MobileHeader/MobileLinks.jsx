import React from 'react';
import styled from "styled-components";
import mapLinks from "../mapLinks";
import {baseTheme} from "../../../styles/theme";
import LinkWrapper from "../../Shared/LinkWrapper";
import MobileDropLink from "./MobileDropLink";

const MobileLinks = () => {
    const [drop, setDrop] = React.useState(null)

    return (
        <Wrapper>
            {mapLinks.map((link) => {
                return (
                    <>
                        <div onClick={() => setDrop(link.link.src)} className='link'>
                            {link.link.name}
                        </div>
                        {drop === link.link.src && <MobileDropLink link={link} />}
                    </>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  border-bottom: 1px solid ${baseTheme.colors.light};
  
  .link {
    padding: 30px 20px;
    font-size: 18px;
    font-weight: 600;
    border-top: 1px solid ${baseTheme.colors.light};
  }
`

export default MobileLinks;