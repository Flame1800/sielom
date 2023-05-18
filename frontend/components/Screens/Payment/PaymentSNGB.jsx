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

const AlertBlock = styled.div`
  margin: 40px 0;
  width: 100%;
  background: rgba(227,85,2,.08);
  border-radius: 8px;
  padding: 34px 30px;
  max-width: 700px;
  
  p {
    color: #262626;
    font-size: 16px;
    line-height: 26px;
  }
`

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 19px;
  font-weight: bold;
  color: #262626;
`

const BtnInstallCerf = styled.a`
  appearance: none;
  background: #148F2B;
  border: 2px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: block;
  letter-spacing: -.3px;
  outline: none;
  text-align: center;
  text-decoration: none;
  transition: background .2s linear,border-color .2s linear;
  width: 100%;
  font-size: 15px;
  padding: 10px 20px;
  margin-top: 30px;
  margin-right: 20px;
`

const BtnInstallBrowser = styled.a`
  appearance: none;
  border: 1px solid #262626;
  border-radius: 4px;
  box-sizing: border-box;
  color: #565656;
  cursor: pointer;
  display: block;
  letter-spacing: -.3px;
  outline: none;
  text-align: center;
  text-decoration: none;
  transition: background .2s linear, border-color .2s linear;
  width: 100%;
  font-size: 15px;
  padding: 10px 20px;
  margin-top: 30px;
  font-weight: 600;
`

const Flex = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: flex-start;
`

export default Payment;
