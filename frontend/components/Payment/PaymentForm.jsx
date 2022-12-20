import React from "react";
import Link from "next/link";
import { ButtonStyle, InputStyled } from "../../styles/sharedStyle";
import styled from "styled-components";
import { useRouter } from "next/router";
import { API } from "../../helpers/API";
import qs from "qs";

const PaymentForm = () => {
  const [agreeCheck, setAgreeCheck] = React.useState(false);
  const [payer, setPayer] = React.useState("payer");
  const [student, setStudent] = React.useState("student");
  const [course, setCourse] = React.useState("1");
  const [contract, setContract] = React.useState("4321");
  const [amount, setAmount] = React.useState("120000");
  const [error, setError] = React.useState("");

  const formHandler = async () => {
    setError("");
    const allValuesFull = payer && student && course && contract && amount;

    if (!allValuesFull || !agreeCheck) {
      if (!allValuesFull) {
        setError("Не все поля заполнены");
      }

      if (!agreeCheck) {
        setError(
          "Ознакомтесь с политикой конфиденциальности сайта и поставтье галочку"
        );
      }

      return;
    }

    const form = {
      payer,
      student,
      course,
      contract,
      amount,
    };
    const orderId = 24;
    const queryString = qs.stringify({
      key: "bef28076-fabd-4b6c-b20f-ac200d83a57a",
      order_id: orderId,
      amount: amount * 60,
      type: "OneStep",
      return_url_success: `http://localhost:3000/test-payment/success?order_id=${orderId}`,
    });

    const startSession = await API.paymentStartSession(queryString);

    const orderPayment = startSession.data;
    console.log(orderPayment);
    // router.push("https://yandex.ru/");
  };

  return (
    <Wrapper>
      <div className="sub-title">
        Заполните форму для того что бы перейти к оплате
      </div>
      <div className="form">
        <InputStyled
          value={payer}
          onInput={({ target }) => setPayer(target.value)}
          type="text"
          placeholder="ФИО плательщика"
        />
        <InputStyled
          value={student}
          onInput={({ target }) => setStudent(target.value)}
          type="text"
          placeholder="ФИО студента"
        />
        <InputStyled
          value={course}
          onInput={({ target }) => setCourse(target.value)}
          type="text"
          placeholder="Номер курса"
        />
        <InputStyled
          value={contract}
          onInput={({ target }) => setContract(target.value)}
          type="text"
          placeholder="Номер договора"
        />
        <InputStyled
          value={amount}
          onInput={({ target }) =>
            setAmount(target.value.replace(/[^0-9\.]/g, ""))
          }
          type="text"
          placeholder="Сумма платежа, без пробелов"
        />
      </div>
      <p className="agreement" onClick={() => setAgreeCheck(!agreeCheck)}>
        <input type="checkbox" checked={agreeCheck} />
        <p>
          Я согласен с
          <Link href="/site/politika-konfidencialnosti-personalnyh-dannyh">
            <a> политикой конфиденциальности сайта </a>
          </Link>
          и ознакомился со всей информацией перед оплатой.
        </p>
      </p>
      <div className="payment-box">
        <img
          className="methods"
          src="/img/payment-methods.png"
          alt="png logo banks"
        />
      </div>
      <ButtonStyle onClick={formHandler}>Оплатить услуги</ButtonStyle>
      {error.length !== 0 && <div className="error">{error}</div>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .form {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 20px;
    width: 80%;
  }

  .error {
    margin-top: 20px;
    font-size: 16px;
    color: red;
    font-weight: 500;
    text-align: center;
    width: 90%;
  }

  .methods {
    margin-bottom: 30px;
  }

  .agreement {
    text-align: center;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.75px;
    color: #000000;
    padding-bottom: 30px;
    border-bottom: 1px solid #b1b1b1;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    cursor: pointer;

    a {
      text-decoration: underline;
      font-weight: 600;
      color: midnightblue;
    }

    input {
      margin-right: 5px;
      width: 32px !important;
      height: 32px !important;
      position: relative;
      left: 20px;
    }
  }

  .payment-box {
    margin-top: 20px;
  }
`;

export default PaymentForm;
