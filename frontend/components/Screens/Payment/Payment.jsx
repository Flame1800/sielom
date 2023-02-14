import React from "react";
import Link from "next/link";
import { ButtonStyle } from "../../../styles/sharedStyle";
import { dataInfo } from "./dataDefendInfo";
import { Content } from "./Payment.style";
import styled from "styled-components";

const linkPay =
  "https://securepayments.sberbank.ru/payment/docsite/payform-1.html?token=vartvnr9ai2dk36ch4afur8rke&ask=amount&ask=email&ask=description&ask=%7B%22name%22:%22PLATELSHIK%22,%22placeholder%22:%22ФИО%20плательщика%22,%22label%22:%22ФИО%20плательщика%22%7D&ask=%7B%22name%22:%22STUDENT%22,%22placeholder%22:%22ФИО%20студента%22,%22label%22:%22ФИО%20студента%22%7D&ask=%7B%22name%22:%22KURS%22,%22placeholder%22:%22Укажите%20номер%20курса%22,%22label%22:%22Номер%20курса%22%7D&ask=%7B%22name%22:%22DOGOVOR%22,%22placeholder%22:%22№%20вашего%20договора%22,%22label%22:%22Номер%20договора%22%7D";

const Payment = () => {
  const [activeButton, setActiveButton] = React.useState(false);

  return (
    <Content>

      <div className="title">ОНЛАЙН ОПЛАТА</div>
      <div className="sub-title">Ознакомьтесь с информацией перед оплатой</div>
        <AlertBlock>
            <Title>Могут возникать ошибки при оплате</Title>
            <p>
                Оплата производится через сервисы Сбера.
                В ближайшее время все онлайн-сервисы Сбера будут переведены на работу с применением сертификатов Минцифры России.
                Для бесперебойного и безопасного доступа к веб-ресурсам Сбера настоятельно рекомендуем установить
                на свои устройства сертификаты или яндекс браузер, поддерживающий отечественные сертификаты.
            </p>
            <Flex>
                <BtnInstallCerf href={'https://www.sberbank.com/ru/certificates/windows'}>Установить сертификаты</BtnInstallCerf>
                <BtnInstallBrowser href={'https://browser.yandex.ru/'}>Установить Яндекс браузер</BtnInstallBrowser>
            </Flex>
        </AlertBlock>
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
      <p className="agreement">
        <input
          type="checkbox"
          checked={activeButton}
          onChange={(e) => setActiveButton(e.target.checked)}
          name="pay"
          value="pay"
        />
        Я согласен с <a href="/">политикой конфиденциальности сайта </a>и
        ознакомился со всей информацией перед оплатой.
      </p>
      <div className="payment-box">
        <img
          className="methods"
          src="/img/payment-methods.png"
          alt="png logo banks"
        />
        {activeButton ? (
          <a target="_blank" href={linkPay}>
            <ButtonStyle onSubmit={() => {}}>Оплатить услуги</ButtonStyle>
          </a>
        ) : (
          <a>
            <ButtonStyle onSubmit={() => {}} disabled>
              Оплатить услуги
            </ButtonStyle>
          </a>
        )}
      </div>
    </Content>
  );
};

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
