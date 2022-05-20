import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const ButtonSchedule = () => {
    return (
        <>
            <Link href='/payment'>
                <PayButton className='btn-payment'> Онлайн оплата</PayButton>
            </Link>
            <Wrapper target="_blank" href={`http://milkankt.beget.tech/obrazovanie/raspisanie-zanjatii`}>
                Расписание
            </Wrapper>
        </>

    );
};

const PayButton = styled.a`
  position: relative;
  margin-left: 40px;
  border: 2px solid #2e2a5d;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  line-height: 10px;
  color: #3E3E3E;
  padding: 9px 18px;
  transition: .3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1350px) {
    right: 0;
    width: 300px;
    height: 40px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
  }
  
  &:hover {
    background: #2e2a5d;
    color: #fff;
  }
`

const Wrapper = styled.a`
  position: relative;
  margin-left: 10px;
  border: 2px solid #EABC5D;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
  line-height: 10px;
  color: #3E3E3E;
  padding: 9px 18px;
  transition: .3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  @media (max-width: 1350px) {
    right: 0;
    width: 300px;
    height: 40px;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    background: #EABC5D;
    color: #3E3E3E;
  }
`

export default ButtonSchedule;