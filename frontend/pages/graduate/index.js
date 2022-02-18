import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import MainHeader from "../../components/Shared/MainHeader";
import styled from "styled-components";
import {Title} from "../../styles/homeStyle";
import LongLink from "../../components/Shared/LongLink";
import React from "react";

export default function Graduate({ posts, content }) {
    const [activePost, setPost] = React.useState(null)

    return (
        <MainLayout>
            <MainHeader>Выпускнику</MainHeader>
            <Header>
                <div className="text">
                    Одним из приоритетных направлений развития института является подготовка высококвалифицированных
                    специалистов для предприятий-партнеров и содействие в трудоустройстве выпускников.
                </div>
                <img src="/img/graduate.png" ></img>
            </Header>
            <Content>
                <div className="fast-links">
                    <div className="link">
                        <img src="/img/arrow-45.png" alt="arrow-icon" className="icon"/>
                        Трудоустройство</div>
                    <div className="link">
                        <img src="/img/arrow-45.png" alt="arrow-icon" className="icon"/>
                        Вакансии для выпускников</div>
                    <a href='http://sielom.ru/vipusknikam/sotrudnichestvo-s-tyumgu' target="_blank" className="link">
                        <img src="/img/arrow-45.png" alt="arrow-icon" className="icon"/>
                        Сотрудничество с ТюмГУ</a>
                </div>
                <div className="link-group">
                    <div className="group">
                        <Title>Полезные материалы</Title>
                        <div className="links">
                            {posts.map(post =>
                                <>
                                    <div
                                        key={post.id}
                                        onClick={() => post.id === activePost?.id ? setPost(null) : setPost(post)}
                                    >
                                        <LongLink>{post.attributes.name}</LongLink>
                                    </div>
                                    {activePost?.id === post.id
                                    && <div className='page-list' dangerouslySetInnerHTML={{ __html: activePost.attributes.body }} />}
                                </>
                                )}
                        </div>
                    </div>
                    <img src="/img/spring-elem.svg" alt="img" className="spring"/>
                </div>
                <div className='employment'>
                    <Title>{content.attributes.name}</Title>
                    <div className='body' dangerouslySetInnerHTML={{ __html: content.attributes.body }} />
                </div>
            </Content>
        </MainLayout>
    )
}


Graduate.getInitialProps = async ctx => {
    const posts = await API.getGraduatePages()
    const content = await API.getEmploymentPage()
    return { posts: posts.data.data, content: content.data.data }
}

const Header = styled.div`
  margin-top: 60px;
  display: grid;
  margin-bottom: 120px;
  grid-template-columns: 50% 50%;
  
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 39px;
    letter-spacing: -1.25px;
    color: #3E3E3E;
  }


  img {
    border-radius: 20px;
  }
`

const Content = styled.div`
  .fast-links {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 120px;
    
    .link {
      border-radius: 20px;
      position: relative;
      display: flex;
      align-items: flex-end;
      border: 1px solid #B1B1B1;
      max-width: 33%;
      min-width: 360px;
      width: 100%;
      height: 303px;
      margin-right: -1px;
      padding: 40px 25px;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 50px;
      letter-spacing: -0.05em;
      color: #3E3E3E;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background: #3E3E3E;
        color: #fff;
      }
    }
    
    .icon {
      position: absolute;
      top: 10px;
      right: 20px;
      filter: invert(100%);
    }
  }

  .link-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 100px;
    position: relative;
    min-height: 60vh;
    
    .page-list {
      margin-bottom: 80px; 
      
      p {
        margin-bottom: 5px !important;
        text-decoration: underline;
        line-height: 40px;
        font-size: 18px;
      }
    }
    
    .spring {
      position: absolute;
      right: 30px;
      top: 100px;
    }

    .group {
      max-width: 666px;
      width: 100%;
      
      .links {
        margin-top: 90px;
      }
    }
  }
  
  .employment {
    display: flex;
    
    .name {
      font-size: 44px;
      font-weight: 500;
      margin-bottom: 60px;
    }
    
    .body {
      margin-left: 100px;
      max-width: 800px;
      font-size: 16px;
      margin-bottom: 60px;
    }
  }
`

