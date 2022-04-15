import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import styled from "styled-components";
import React from "react";
import PostPages from "../../components/PostPages";
import MainHeader from "../../components/Shared/MainHeader";
import {baseTheme} from "../../styles/theme";
import Button from "../../components/Shared/Button";
import Link from "next/link";

const Post = ({ posts, commission }) => {

    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = "http://code.jivo.ru/widget/ZMOiXQR5r4";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <MainLayout>
            <Wrapper>
                <MainHeader>Приемная кампания</MainHeader>
                <div onClick={() => jivo_api.open()} className='btn'>
                    Задать вопрос
                </div>
                <Link href='/specialties'>
                    <a>
                        <Button>Специальности</Button>
                    </a>
                </Link>
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
  
  .btn {
    background: #59d175;
    border-radius: 13px;
    height: 55px;
    padding: 20px 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    max-width: 400px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
    filter: drop-shadow(0px 0px 10px #59d175);
    border:  #59d175 2px solid;
    margin-right: 30px;

    &:hover {
      color: #3E3E3E;
      background: none;
      border: #59d175 2px solid;
    }
  }

`


Post.getInitialProps = async ctx => {
    const posts = await API.getReceptionCampainPages()
    const commission = await API.getCommissonPage()

    return { posts: posts.data.data, commission: commission.data.data  }
}


export default Post