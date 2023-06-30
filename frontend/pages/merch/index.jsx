import React from 'react';
import Layout from "../../components/Layouts/Layout";
import Head from "next/head";
import MainHeader from "../../components/UI/MainHeader";
import ProductCard from "../../components/Merch/ProductCard";
import styled from "styled-components";
import Image from "next/image";

const Merch = () => {
    return (
        <Layout>
            <Head>
                <title>Мерч института - СИЭУиП</title>
            </Head>
            <Header>
                <MainHeader>Sielom Мерч</MainHeader>
                <a href="https://vk.com" target="_blank">
                    <Image src="/img/vk-black.svg"  width={40} height={40} />
                </a>
            </Header>
            <ProductList>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductList>
        </Layout>
    );
};

const ProductList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 60px
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Merch;