import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import styled from "styled-components";
import React from "react";
import PostPages from "../../components/PostPages";
import MainHeader from "../../components/Shared/MainHeader";
import {baseTheme} from "../../styles/theme";
import Button from "../../components/Shared/Button";
import Link from "next/link";
import JivoButton from "../../components/Shared/JivoButton";

const Post = ({ posts, commission }) => {


    return (
        <MainLayout>
            <Wrapper>
                <MainHeader>Приемная кампания</MainHeader>
                <div className="buttons">
                    <JivoButton>
                        Задать вопрос
                    </JivoButton>
                    <Link href='/specialties'>
                        <a>
                            <Button>Специальности</Button>
                        </a>
                    </Link>
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
  
  .buttons {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    
    > div, > a {
      margin: 10px;
    }
  }
`


Post.getInitialProps = async ctx => {
    const posts = await API.getReceptionCampainPages()
    const commission = await API.getCommissonPage()

    return { posts: posts.data.data, commission: commission.data.data  }
}


export default Post