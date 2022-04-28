import React from 'react';
import styled from "styled-components";
import mapLinks from "../mapLinks";
import {baseTheme} from "../../../styles/theme";
import MobileDropLink from "./MobileDropLink";
import Link from "next/link";

const MobileLinks = () => {
    const [drop, setDrop] = React.useState(null)

    return (
        <Wrapper>
            {mapLinks.map((item) => {

                if (item.content.length === 0) {
                    return (
                        <Link href={item.link.src}>
                            <a className='link' onClick={() => setDrop(null)}>
                                {item.link.name}
                            </a>
                        </Link>
                    )
                }

                return (
                    <>
                        <div
                            onClick={() => setDrop(drop === item.link.src ? null  : item.link.src)}
                            className='link'
                        >
                            {item.link.name}
                        </div>
                        {drop === item.link.src && <MobileDropLink linkWrapper={item} />}
                    </>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  border-bottom: 1px solid ${baseTheme.colors.light};
  
  .link {
    padding: 30px 20px;
    font-size: 18px;
    font-weight: 600;
    border-top: 1px solid ${baseTheme.colors.light};
    
    &:first-child {
      border-top: none;
    }
  }
`

export default MobileLinks;