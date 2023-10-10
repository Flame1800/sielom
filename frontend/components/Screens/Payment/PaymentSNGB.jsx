import React from "react";
import Link from "next/link";
import { ButtonStyle } from "../../../styles/sharedStyle";
import { dataInfo } from "./dataDefendInfo";
import { Content } from "./Payment.style";
import styled from "styled-components";
import PaymentForm from "../../Payment/PaymentForm";


const Payment = () => {
  const [activeButton, setActiveButton] = React.useState(false);

  return (
    <Content>

      <div className="title">ОНЛАЙН ОПЛАТА</div>
      <div className="sub-title">Ознакомьтесь с информацией перед оплатой</div>
        <Link href="/news/325">
            <a>
                <AlertMessage><b>!</b>Объявление студентам! Дубликаты чеков/квитанций за оплату.</AlertMessage>
            </a>
        </Link>
      <div className="links">
        <Link href="/site/contacts">
          <a>Контактные данные организации</a>
        </Link>
        <Link href="/sveden">
          <a>Описание сферы деятельности</a>
        </Link>
        <Link href="/site/polzovatelskoe-soglashenie">
          <a>Пользовательское соглашение</a>
        </Link>
        <Link href="/site/politika-konfidencialnosti-personalnyh-dannyh">
          <a>Политика конфидициальности</a>
        </Link>
      </div>
      <div className="license">
        <b>Информация о защите ваших данных</b>
        <hr />
        <p>{dataInfo}</p>
      </div>
        <PaymentForm />
    </Content>
  );
};


const AlertMessage = styled.div`
  border-radius: 10px;
  background: rgba(255, 140, 0, 0.18);
  font-size: 17px;
  margin-top: 50px;
  padding: 20px 40px;
  font-weight: 500;
  border: 1px solid #ff8400;

  b {
    color: #ff8400;
    font-size: 30px;
    font-weight: 600;
    border-radius: 50%;
    margin-right: 10px;
  }
`

export default Payment;
