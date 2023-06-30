import React from 'react';
import Layout from "../../../components/Layouts/Layout";
import styled from "styled-components";
import Image from "next/image";
import {baseTheme} from "../../../styles/theme";

const ProductPage = () => {
    return (
        <Layout>
            <Wrapper>
                <Images>
                    <Image src="/img/product.png" width={660} height={760} />
                </Images>
                <Info>
                    <Title>Худи с логотипом Sielom</Title>
                    <Price>2500 ₽</Price>
                    <SelectItems>
                        <TitleSelectItem>Размер</TitleSelectItem>
                        <Sizes>
                            <Size>XS</Size>
                            <Size>S</Size>
                            <Size>M</Size>
                            <Size>L</Size>
                            <Size>XL</Size>
                            <Size>XXL</Size>
                        </Sizes>
                    </SelectItems>
                    <Button>Купить</Button>
                </Info>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  gap: 20px;
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
`



const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 23px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 15px;
`

const Price = styled.div`
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  color: #5A5A5A;
  margin-bottom: 50px;
`

const SelectItems =  styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`

const TitleSelectItem = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 10px;
`

const Sizes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const Size = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  height: 44px;
  width: 44px;
  background: #FFFFFF;
  border: 1px solid #cbcbcb;
  cursor: pointer;
`

const Button = styled.div`
  background: ${baseTheme.colors.black};
  border-radius: 9px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  font-weight: 700;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #767676;
  }
`

export default ProductPage;