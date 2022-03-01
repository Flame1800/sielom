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
            <div className="phone">+7 (893) 244 68 89</div>
            <div className="email">sielom@yandex.ru</div>
        </div>
    </Wrapper>
    );
};

export const Wrapper = styled.div`
  border-top: 1px solid #b4b4b4;
  width: 100%;
  max-width: 1320px;
  margin: -1px auto;
  padding-top: 40px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  .item {
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    margin-top: 10px;
    color: #3E3E3E;
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

`

export default Footer




