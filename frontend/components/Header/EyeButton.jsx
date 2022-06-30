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
  height: 32px;
  border-radius: 5px;
  margin-left: 10px;
  padding: 5px 10px;
  border: 2px solid #d7d7d7;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(215, 215, 215, 0.3);
  }
`;

export default JivoButton;
