import Link from "next/link";
import styled from "styled-components";
import {baseTheme} from "../../../styles/theme";
import LinkWrapper from "../../Shared/LinkWrapper";
import React from "react";
import {useAppSelector} from "../../../redux/hooks";

const MenuHeader = ({ close }) => {
    const content = useAppSelector(state => state.nav.dropdownContent)

   React.useEffect(() => {
       if (close) {
           document.addEventListener('click', close)
           return () => {
               document.removeEventListener('click', close)
           }
       }
    }, []);

    if (!content) {
        return null
    }

    return (
        <Wrapper onClick={e => e.stopPropagation()}>
            <div className='map'>
                {content.map((column, id) => (
                    <NavColumn key={id} >
                        <div className='title'>
                            <LinkWrapper href={column.main.src}>
                                {column.main.name}
                            </LinkWrapper>
                        </div>
                        <div className="link">
                            {column.links.map((link, id) => (
                                <LinkWrapper key={id} href={link.src}>
                                   {link.name}
                                </LinkWrapper>
                            ))}
                        </div>
                    </NavColumn>
                ))}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  padding-top: 45px;
  padding-bottom: 45px;
  background: rgb(255, 255, 255);
  z-index: 10;
  box-shadow: 1px 14px 22px rgba(0, 0, 0, 0.07);

  .map {
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }

`

const NavColumn = styled.div`
  margin-right: 40px;

  .title {
    margin-bottom: 5px;

    a {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      color: #3E3E3E;

      &:hover {
        color: #939393;
      }
    }
  }

  .link {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    a {
      margin-top: 18px;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #3E3E3E;
      transition: 0.1s;

      &:hover {
        color: ${baseTheme.colors.gold};
      }
    }
  }
`

export default MenuHeader;
