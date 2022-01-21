import Link from "next/link";
import styled from "styled-components";
import {baseTheme} from "../styles/theme";

const sections = {
    one: [
        {
            src: "/timetable",
            name: "Расписание",
        },
        {
            src: "/",
            name: "Контакты",
        },
    ],
    two: [
        {
            src: "/",
            name: "Абитуренту",
        },
        {
            src: "/",
            name: "Родителю",
        },
        {
            src: "/",
            name: "Студенту",
        },
    ],
    three: [
        {
            src: "/",
            name: "Выпускнику",
        },
        {
            src: "/",
            name: "Об институте",
        },
        {
            src: "/",
            name: "Персонал",
        },
        {
            src: "/",
            name: "WordSkills",
        },
    ],
};


const Footer = () => {
    return (
    <Wrapper>
        <div className="content">
            <div className='section'>
                {sections.one.map(item => (
                    <Link href={item.src} >
                        <a>
                            <div className="item">
                                {item.name}
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
            <div className='section'>
                {sections.two.map(item => (
                    <Link href={item.src} >
                        <a>
                            <div className="item">
                                {item.name}
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
            <div className='last-section'>
                <div className='section'>
                    {sections.three.map(item => (
                        <Link href={item.src} >
                            <a>
                                <div className="item">
                                    {item.name}
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
                <div className="contacts">
                    <div className="phone">+7 (893) 244 68 89</div>
                    <div className="email">sielom@yandex.ru</div>
                </div>
            </div>

        </div>
        <div className="last">
            <div className="item">
                © Сургутский институт экономики, управления и права. 2022
            </div>
        </div>
    </Wrapper>
    );
};

export const Wrapper = styled.div`
  border-top: 1px solid #b4b4b4;
  width: 100%;
  max-width: 1320px;
  margin: -1px auto;
  padding-top: 60px;

  .content {
    display: grid;
    grid-template-columns: 25% 25% 50%;
    margin-bottom: 90px;
    
    .last-section {
      display: flex;
      justify-content: space-between;
    }
    
    .contacts {
      .phone {
        font-weight: bold;
        font-size: 14px;
        line-height: 15px;
        margin-bottom: 16px;
        color: #3E3E3E;
      }
      
      .email {
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #3E3E3E;
      }
    }

    .section {
      display: flex;
      flex-direction: column;
      
      a {
        width: fit-content;
      }
      
      .item {
        font-weight: 500;
        font-size: 13px;
        line-height: 24px;
        margin-top: 10px;
        color: #3E3E3E;
      }
    }
  }

  .last {
    margin-bottom: 40px;
    
    .item {
      font-weight: 500;
      font-size: 13px;
      line-height: 24px;
      margin-top: 10px;
      color: #3E3E3E;
    }
  }
`

export default Footer




