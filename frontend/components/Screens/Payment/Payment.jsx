import React from "react";
import Link from "next/link";
import { ButtonStyle } from "../../../styles/sharedStyle";
import { dataInfo } from "./dataDefendInfo";
import { Content } from "./Payment.style";

const linkPay =
  "https://securepayments.sberbank.ru/payment/docsite/payform-1.html?token=vartvnr9ai2dk36ch4afur8rke&ask=amount&ask=email&ask=description&ask=%7B%22name%22:%22PLATELSHIK%22,%22placeholder%22:%22ФИО%20плательщика%22,%22label%22:%22ФИО%20плательщика%22%7D&ask=%7B%22name%22:%22STUDENT%22,%22placeholder%22:%22ФИО%20студента%22,%22label%22:%22ФИО%20студента%22%7D&ask=%7B%22name%22:%22KURS%22,%22placeholder%22:%22Укажите%20номер%20курса%22,%22label%22:%22Номер%20курса%22%7D&ask=%7B%22name%22:%22DOGOVOR%22,%22placeholder%22:%22№%20вашего%20договора%22,%22label%22:%22Номер%20договора%22%7D";

const Payment = () => {
  const [activeButton, setActiveButton] = React.useState(false);

  return (
    <Content>
      <div className="title">ОНЛАЙН ОПЛАТА</div>
      <div className="sub-title">Ознакомьтесь с информацией перед оплатой</div>
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

export default Payment;
