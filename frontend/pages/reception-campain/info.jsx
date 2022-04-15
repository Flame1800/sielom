import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import Link from "next/link";
import {} from "../../styles/homeStyle";
import styled from "styled-components";
import {SidebarLinks} from "../../styles/sharedStyle";
import PagePost from "../../components/Shared/PagePost";
import React from "react";
import PostPages from "../../components/PostPages";
import MainHeader from "../../components/Shared/MainHeader";
import LongLink from "../../components/Shared/LongLink";
import {baseTheme} from "../../styles/theme";


const Post = ({ posts, commission }) => {

    return (
        <MainLayout>
            <Wrapper>
                <MainHeader>Приемная компания</MainHeader>
                <div className="commission">
                    <div>
                        <div className="title">Контакты приемной коммисии</div>
                        <div className='items'>
                            <div className='item'>
                                <div className="name">Адресс</div>
                                {commission.attributes.address}
                            </div>
                            <div className='item'>
                                <div className="name">Номера телефона</div>
                                {commission.attributes.phone}
                            </div>
                            <div className='item'>
                                <div className="name">Эл. почта</div>
                                {commission.attributes.email}
                            </div>
                            <div className='item'>
                                <div className="name">Время работы</div>
                                {commission.attributes.worktime}
                            </div>
                        </div>
                    </div>
                </div>
                <PostPages notLayout posts={posts} />
            </Wrapper>
        </MainLayout>
    )
}



const Wrapper = styled.div`
  .commission {
    width: 100%;
    margin-bottom: 80px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-right: 50px;
    margin-top: 80px;

    .title {
      margin-bottom: 50px;
      font-weight: 600;
      font-size: 26px;
      color: ${baseTheme.colors.black};
    }

    .item {
      margin-bottom: 40px;

      .name {
        color: #525252;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
      }
    }
  }

`


Post.getInitialProps = async ctx => {
    const posts = await API.getReceptionCampainPages()
    const commission = await API.getCommissonPage()

    return { posts: posts.data.data, commission: commission.data.data  }
}


export default Post