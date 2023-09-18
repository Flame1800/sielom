import React from "react";
import styled from "styled-components";

const JivoButton = ({ children }) => {
  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = "/letsee/letsee.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Wrapper onClick={() => letsee_toggle_panel()} className="btn">
      <img
        src="/img/eye.svg"
        alt="версия для слабовилдящих"
        title="версия для слабовилдящих"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 5px;
  margin-left: 20px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(215, 215, 215, 0.3);
  }
  
  @media (max-width: 350px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export default JivoButton;
