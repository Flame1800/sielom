import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {baseTheme} from "../../styles/theme";
import Link from "next/link";

const ProductCard = () => {
    return (
        <Link href="/merch/product/1" >
            <Wrapper>
                <Image src='/img/product.jpg' width={265} height={330} />
                <Title>Футболка с логотипом Sielom</Title>
                <Price>1000 ₽</Price>
            </Wrapper>
        </Link>
    );
};

const Wrapper = styled.div`
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  img {
    height: 450px !important; 
    &:hover {
      opacity: 0.8;
    }
  }
`

const Title = styled.span`
  color: #575757;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`

const Price = styled.span`
  color: #5A5A5A;
  font-size: 17px;
  font-weight: 700;
  margin-top: 5px;
`

export default ProductCard;