import Link from "next/link";
import styled from "styled-components";
import {baseTheme} from "../styles/theme";

const sections = {
    one: [
        {
            src: "/schedule",
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
        <div className="item">
            © Сургутский институт экономики, управления и права. 2022
        </div>
        <div className="contacts">
            <a href="tel:+7 (3462) 55-09-18" className="phone">+7 (3462) 55-09-18</a>
            <a href="mailto:sielom@yandex.ru" className="email">sielom@yandex.ru</a>
        </div>
    </Wrapper>
    );
};

export const Wrapper = styled.div`
  border-top: 1px solid #b4b4b4;
  width: 100%;
  max-width: 1320px;
  margin: -1px auto;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    margin-top: 10px;
    color: #3E3E3E;
  }

    .contacts {
      display: flex;
      flex-direction: column;
      .phone {
        font-weight: bold;
        font-size: 14px;
        line-height: 15px;
        margin-bottom: 15px;
        color: #3E3E3E;
      }
      
      .email {
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #3E3E3E;
      }
    }

`

export default Footer




