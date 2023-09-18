import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Logo = () => {
  return (
    <Link href="/">
      <Wrapper href="/">
        <img src="/img/logo-sielom.svg" alt="Logo" />
        <h1 className="name">
          Сургутский институт <br /> экономики, управления <br/> и права
        </h1>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  img {
    width: 70px;
    height: 65px;
  }

  .name {
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.1px;
    text-transform: uppercase;
    color: #3d3d3d;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

export default Logo;
