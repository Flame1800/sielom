import React from 'react';
import styled from "styled-components";

const JivoButton = ({children}) => {

    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = "http://code.jivo.ru/widget/ZMOiXQR5r4";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);


    return (
        <Wrapper onClick={() => jivo_api.open()} className='btn'>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background: #59d175;
  border-radius: 13px;
  height: 55px;
  padding: 20px 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  max-width: 400px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  border:  #59d175 2px solid;


  &:hover {
    color: #3E3E3E;
    background: none;
    border: #59d175 2px solid;
  }
`

export default JivoButton;