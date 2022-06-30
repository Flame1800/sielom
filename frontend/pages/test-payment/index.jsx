import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import MainLayout from "../../layouts/MainLayout";
import PaymentForm from "../../components/Payment/PaymentForm";

const Payment = () => {
  return (
    <MainLayout>
      <Head>
        <title>Онлайн оплата - СИЭУиП</title>
      </Head>
      <Content>
        <div className="title">ОНЛАЙН ОПЛАТА</div>
        <div className="sub-title">
          Ознакомьтесь с информацией перед оплатой
        </div>
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
          <p>
            Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены
            на платежный шлюз ПАО СБЕРБАНК. Соединение с платежным шлюзом и
            передача информации осуществляется в защищенном режиме с
            использованием протокола шифрования SSL. В случае если Ваш банк
            поддерживает технологию безопасного проведения интернет-платежей
            Verified By Visa или MasterCard SecureCode для проведения платежа
            также может потребоваться ввод специального пароля. Настоящий сайт
            поддерживает 256-битное шифрование. Конфиденциальность сообщаемой
            персональной информации обеспечивается ПАО СБЕРБАНК. Введенная
            информация не будет предоставлена третьим лицам за исключением
            случаев, предусмотренных законодательством РФ. Проведение платежей
            по банковским картам осуществляется в строгом соответствии с
            требованиями платежных систем МИР, Visa Int. и MasterCard Europe
            Sprl.
          </p>
        </div>
        <PaymentForm />
      </Content>
    </MainLayout>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 200px;
  a {
    width: fit-content;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    font-weight: 700;
    margin-top: 40px;
    font-size: 60px;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  .sub-title {
    width: 360px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #5f5f5f;
  }

  .links {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 25px;
    color: #3e3e3e;
    font-weight: 500;

    a {
      text-decoration: underline;
      margin-top: 15px;
      font-size: 14px;
    }
  }

  .license {
    margin-top: 10px;
    margin-bottom: 50px;
    background: #f4f4f4;
    border: 1px solid #dddddd;
    border-radius: 15px;
    padding: 30px 40px;
    overflow: auto;
    height: 320px;
    font-size: 16px;
    line-height: 30px;
    max-width: 600px;

    &::-webkit-scrollbar {
      opacity: 1;
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #d8d8d8;
      border-radius: 10px;
      width: 1px;
    }
  }

  .agreement {
    text-align: center;
    max-width: 500px;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.75px;
    color: #000000;
    padding-bottom: 30px;
    border-bottom: 1px solid #b1b1b1;

    a {
      text-decoration: underline;
      font-weight: 600;
      color: midnightblue;
    }

    input {
      margin-right: 5px;
      width: 16px;
      height: 16px;
    }
  }
`;

export default Payment;
