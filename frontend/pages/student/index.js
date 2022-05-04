import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import {Title} from "../../styles/homeStyle";
import LongLink from "../../components/Common/LongLink";
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
                    <Link href='/events'>
                            <a className="link">
                                <img src="/img/arrow-45.png" alt="arrow-icon" className="icon"/>
                                <p>
                                    Мероприятия
                                </p>
                            </a>
                    </Link>
                   <Tooltip title='в разработке'>
                     <a className="link">
                        <img src="/img/arrow-45.png" alt="arrow-icon" className="icon"/>
                         <p>
                             Студенческое самоуправление
                         </p>
                    </a>
                   </Tooltip>

                    <Tooltip title='в разработке'>
                     <a className="link">
                        <img src="/img/arrow-45.png" alt="arrow-icon" className="icon"/>
                         <p>
                             Мы в проектах
                         </p>
                     </a>
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

  @media (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }
  
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: -1.25px;
    color: #3E3E3E;
    margin-bottom: 40px;

    @media (max-width: 726px) {
      font-size: 20px;
    }
  }
  
  img { 
    border-radius: 20px; 
    width: 100%;
  }
`

const Content = styled.div`
  .fast-links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
    width: 100%;
    
    @media (max-width: 1300px) {
      flex-wrap: wrap;
    }

    .link {
      margin: 10px;
      flex-basis: 100%;
      border-radius: 20px;
      position: relative;
      display: flex;
      align-items: flex-end;
      border: 1px solid #B1B1B1;
      height: 303px;
      padding: 40px 25px;
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 59px;
      letter-spacing: -0.05em;
      color: #3E3E3E;
      transition: 0.2s;
      cursor: pointer;
      
      
      @media (max-width: 768px) {
        font-size: 35px;
        line-height: 42px;
        margin: 20px 0;
      }

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

      @media (max-width: 768px) {
        filter: none;
      }
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
    
    .spring {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`

