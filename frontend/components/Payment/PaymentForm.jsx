import React from "react";
import Link from "next/link";
import { ButtonStyle, InputStyled } from "../../styles/sharedStyle";
import styled from "styled-components";
import { useRouter } from "next/router";
import { API } from "../../helpers/API";
import qs from "qs";
import createPayment from "./createPayment";

const PaymentForm = () => {
  const [agreeCheck, setAgreeCheck] = React.useState(false);
  const [payer, setPayer] = React.useState("payer");
  const [student, setStudent] = React.useState("student");
  const [course, setCourse] = React.useState("1");
  const [contract, setContract] = React.useState("4321");
  const [amount, setAmount] = React.useState("120000");
  const [error, setError] = React.useState("");
  const router = useRouter()

  const formHandler = async (e) => {
    e.preventDefault()


    setError("")
    const allValuesFull = payer && student && course && contract && amount

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
      fee: 0
    };

    const startSession = await createPayment(form);

    const orderPayment = startSession.data;
    console.log(orderPayment);
    router.push(orderPayment.formUrl)
  };

  return (
    <Wrapper>
      <div className="sub-title">
        Заполните форму для того что бы перейти к оплате
      </div>
      <form className="form" onSubmit={formHandler}>
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
        <ButtonStyle>Оплатить услуги</ButtonStyle>
      </form>

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
    width: 100%;
    align-items: center;
  }

  .error {
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
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
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
