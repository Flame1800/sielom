import React from "react";
import MainHeader from "../../UI/MainHeader";
import NewsCard from "../../Card/NewsCard";
import styled from "styled-components";
import AdsCard from "../../Card/AdsCard";

const AdsList = ({ posts }) => {
    return (
        <>
            <MainHeader>Объявления</MainHeader>
            <Content>
                {posts.map((post) => (
                    <AdsCard key={post.id} post={post} />
                ))}
            </Content>
        </>
    );
};

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
`;

export default AdsList;
