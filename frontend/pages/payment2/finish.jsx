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
import moment from "moment";

const Payment = () => {
  const [loading, setLoading] = useState(true );
  const [paymentData, setPaymentData] = useState(null);
  const [receipt, setReceipt] = useState(null)


  const router = useRouter();

  const { paymentId, requestId, status } = router.query

    const loadPaymentReceipt = async () => {

        try {
            const tokenData = await getAtolToken()
            const {token} = tokenData.data
            console.log(token)

            const sellDataResponse = await loadAtolPaymentReceipt(token)

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
                await loadPaymentReceipt()

                setPaymentData(response.data);
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
      <Head>
        <title>Онлайн оплата - СИЭУиП</title>
      </Head>
      <Content>
          {paymentData ? titleText : <span className="title">Загрузка...</span>}
          {/*<button onClick={loadPaymentReceipt}>Load Payment receipt</button>*/}
          {paymentData && <div className="payment-info">
              <p className='info-item'>{paymentData.details.resultDescription}</p>
              <hr/>
              <p className='info-item'><b>Номер оплаты</b> {paymentData.paymentId}</p>
              <p className='info-item'><b>Сумма</b> {paymentData.amount} руб.</p>
              <p className='info-item'><b>Коммисия</b> {paymentData.fee} руб.</p>
              <p className='info-item'><b>Карта</b> {paymentData.details.maskedPan} {paymentData.details.paymentSystem}</p>
              {Object.entries(paymentData.additionalInfo).map(([key, value]) => {
                  return  <p className='info-item'><b>{key}</b> {value}</p>
              })}
              {loading
                  ? <div className='loader'>Загрузка чека...</div>
                  : <a className='receipt' target="_blank" href={receipt}>Получить чек</a>}
          </div>}
          {!loading && <Link href="/">
              <a>
                  <Button>На главную</Button>
              </a>
          </Link>}
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
    background: #ffe4ad;
  }

  .receipt {
    padding: 20px;
    border-radius: 10px;
    background: #231b09;
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
    font-weight: 500;
    color: #fff;
    display: flex;
    justify-content: center;
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

  .payment-box {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .methods {
      margin-bottom: 30px;
    }
  }
`;

export default Payment;
