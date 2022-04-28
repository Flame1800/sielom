import React from 'react';
import LinkWrapper from "../../Shared/LinkWrapper";
import styled from "styled-components";

const MobileDropLink = ({linkWrapper}) => {
    const {content} = linkWrapper

    return (
        <Wrapper>
            {content.map(item => {
                return (
                    <div className='tab'>
                        <div className='title'>
                            {item.main?.src?.length > 0
                                ?   <LinkWrapper href={item.main.src}>
                                    {item.main.name}
                                </LinkWrapper>
                                :  <div>{item.main.name}</div>}

                        </div>
                        <div className="sub-link">
                            {item.links.map((link, id) => (
                                <LinkWrapper key={id} href={link.src}>
                                    {link.name}
                                </LinkWrapper>
                            ))}
                        </div>
                    </div>
                )
            })}

        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  border-top: 2px dashed #c2c2c2;

  .tab {
    margin: 40px 0;

    .title {
      font-weight: 500;
      font-size: 19px;
      margin-bottom: 10px;
    }

    .sub-link {
      display: flex;
      flex-direction: column;

      a {
        margin: 8px 0;
      }
    }
  }
`

export default MobileDropLink;