import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Logo = () => {
  return (
    <Link href="/">
      <Wrapper href="/">
        <img src="/img/logo-sielom.svg" alt="Logo" />
        <h1 className="name">
          Сургутский институт экономики, управления и права
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

  .name {
    max-width: 190px;
    width: 100%;
    flex-grow: inherit;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #3d3d3d;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

export default Logo;
