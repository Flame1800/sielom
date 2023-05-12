import React, {useEffect, useState} from "react";
import Layout from "../../components/Layouts/Layout";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";
import getPaymentStatus from "../../components/Payment/getPaymentStatus";
import getAtolToken from "../../components/Payment/getAtolToken";
import loadAtolPaymentReceipt from "../../components/Payment/loadAtolPaymentReceipt";
import getPaymentReceipt from "../../components/Payment/getPaymentReceipt";

const additionalValues = {
    courseNumber: "Номер курса",
    student: "Студент",
    payer: "Плательщик",
    documentNumber: "Номер договора",
    email: "Email",
    service: "Услуга"
}

const Payment = () => {
  const [loading, setLoading] = useState(false );
  const [paymentData, setPaymentData] = useState(null);
  const [receipt, setReceipt] = useState(null)
    const [error, setError] = useState(false)

  const router = useRouter();

  const { paymentId, requestId } = router.query

    const loadPaymentReceipt = async (data) => {
        if (error && !paymentData) return;
        setLoading(true)

        try {
            const tokenData = await getAtolToken()
            const {token} = tokenData.data

            const sellDataResponse = await loadAtolPaymentReceipt(token, data)

            if (!sellDataResponse.data.error) {
                setTimeout(async () => {
                    const {data} = await getPaymentReceipt(sellDataResponse.data.uuid, token)
                    setReceipt(data.payload.ofd_receipt_url)
                    setLoading(false)
                }, 5000)
            }
        } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        if (!router.query.paymentId) return

        (async () => {
            try {
                const response = await getPaymentStatus({paymentId, requestId});
                setPaymentData(response.data);
                if (response.data.status === "FAILED") {
                    return setError(true)
                }
                await loadPaymentReceipt(response.data)

            } catch(e) {
                console.log(e);
            }
        })()
    }, [router.query])

    const isSuccess = paymentData?.status === 'SUCCESS'
    const titleText = isSuccess
        ? <span className="title success">Оплата была успешно <br/> произведена</span>
        : <span className="title fail">Оплата не произведена <br/> произошла ошибка</span>

  return (
    <Layout>
      <Head><title>Онлайн оплата - СИЭУиП</title></Head>
      <Content>
          {paymentData ? titleText : <span className="title">Загрузка...</span>}
          {paymentData && <div className="payment-info">
              <p className='info-item'>{paymentData.details.resultDescription}</p>
              <hr/>
              <p className='info-item'><b>Номер оплаты</b> {paymentData.paymentId}</p>
              <p className='info-item'><b>Сумма</b> {paymentData.amount} руб.</p>
              <p className='info-item'><b>Коммисия</b> {paymentData.fee} руб.</p>
              <p className='info-item'><b>Карта</b>
                  {paymentData.details.maskedPan} {paymentData.details.paymentSystem}
              </p>
              {Object.entries(paymentData.additionalInfo).map(([key, value]) => {
                  return  <p className='info-item'><b>{additionalValues[key]}</b> {value}</p>
              })}
              {loading && <div className='loader'>Загрузка чека...</div>}
              {!loading && receipt && <a className='receipt' target="_blank" href={receipt}>Получить чек</a>}
          </div>}
          <Link href="/">
              <a><Button>На главную</Button></a>
          </Link>
      </Content>
    </Layout>
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

  .loader {
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    border: 2px solid #5c5c5c;
    font-size: 18px;
    margin-top: 60px;
  }

  .receipt {
    padding: 20px;
    border-radius: 10px;
    background: #454545;
    margin-top: 60px;
    width: 100%;
    cursor: pointer;
    font-weight: 500;
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 18px;
  }

  .title {
    text-align: center;
    font-weight: 400;
    margin-top: 50px;
    font-size: 36px;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  .success {
    color: #009100;
  }

  .fail {
    color: red;
  }

  .payment-info {
    padding: 20px 30px;
    border: 1px solid gray;
    border-radius: 15px;
    margin: 30px 0;

    p {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      font-weight: 500;
      font-size: 17px;

      b {
        margin-bottom: 3px;
        font-size: 15px;
        font-weight: 400;
        color: gray;
      }
    }
  }
`;

export default Payment;
