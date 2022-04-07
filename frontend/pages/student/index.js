import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import MainHeader from "../../components/Shared/MainHeader";
import styled from "styled-components";
import {Title} from "../../styles/homeStyle";
import LongLink from "../../components/Shared/LongLink";
import Link from "next/link";
import {Tooltip} from "@mui/material";

export default function Events({posts}) {
    return (
        <MainLayout>
            <MainHeader>Студенту</MainHeader>
            <Header>
                <div className="text">
                    Расписание, стипендии, учебные программы, информация  об оценках и экзаменах в одном месте
                </div>
                <img src="/img/student-bg.png" ></img>
            </Header>
            <Content>
                <div className="fast-links">
                    <Tooltip title='в разработке'>
                     <div className="link">
                        <img src="/img/arrow-45.png" alt="arrow-icon" className="icon"/>
                        Студенческая жизнь
                    </div>
                    </Tooltip>

                   <Tooltip title='в разработке'>
                     <div className="link">
                        <img src="/img/arrow-45.png" alt="arrow-icon" className="icon"/>
                        Лига волонтеров
                    </div>
                   </Tooltip>

                    <Tooltip title='в разработке'>
                     <div className="link">
                        <img src="/img/arrow-45.png" alt="arrow-icon" className="icon"/>
                        Проекты студентов
                    </div>
                    </Tooltip>

                </div>
                <div className="link-group">
                    <div className="group">
                        <Title>Учебный процесс</Title>
                        <div className="links">
                            {posts.map(post =>
                                <Link key={post.id} href={`student/educational_process?post=${post.attributes.name}`}>
                                    <a>
                                        <LongLink>{post.attributes.name}</LongLink>
                                    </a>
                                </Link>)}
                        </div>
                    </div>
                    <img src="/img/spring-elem.png" alt="img" className="spring"/>
                </div>
            </Content>
        </MainLayout>
    )
}

Events.getInitialProps = async () => {
    const posts = await API.getEdProcess()

    return {
        posts: posts.data.data
    }
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
    line-height: 35px;
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
      margin: 0 15px;
      border-radius: 20px;
      position: relative;
      display: flex;
      align-items: flex-end;
      border: 1px solid #B1B1B1;
      max-width: 31%;
      min-width: 360px;
      width: 100%;
      height: 303px;
      padding: 40px 25px;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 59px;
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

    .group {
      max-width: 700px;
      width: 100%;

      .links {
        margin-top: 90px;
      }
    }
  }
`

