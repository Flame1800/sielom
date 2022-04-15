import React from 'react';
import LinkWrapper from "../../Shared/LinkWrapper";
import styled from "styled-components";

const MobileDropLink = ({link}) => {
    return (
        <Wrapper>
            <div className='title'>
                {link.content?.main?.src?.length > 0
                    ?   <LinkWrapper href={link.content.main.src}>
                        {link.content.main.name}
                    </LinkWrapper>
                    :  <div>{link.content?.main?.name}</div>}

            </div>
            <div className="link">
                {link.content?.links?.map((link, id) => (
                    <LinkWrapper key={id} href={link.src}>
                        {link.name}
                    </LinkWrapper>
                ))}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  
`

export default MobileDropLink;