import MainLayout from "../../layouts/MainLayout";
import MainHeader from "../../components/Shared/MainHeader";
import styled from "styled-components";
import Button from "../../components/Shared/Button";
import {baseTheme} from "../../styles/theme";
import Link from "next/link";

export default function NotFound() {
    return (
        <MainLayout>
            <Content>
                <div className="title">Вход в личный <br /> кабинет</div>
                <div className="form">
                    <input type="text" placeholder="ФИО" className="input"/>
                    <input type="password" placeholder="Пароль" className="input"/>
                </div>
                <Link href='/profile'>
                    <a>
                        <Button>Войти</Button>
                    </a>
                </Link>
            </Content>
        </MainLayout>
    )
}


const Content = styled.div`
  width: 55%;
  border-left: 1px solid ${baseTheme.colors.light};
  border-right: 1px solid ${baseTheme.colors.light};
  height: 60vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 41px;
    line-height: 50px;
    text-align: center;
    letter-spacing: -0.05em;
    color: #3E3E3E;
    margin-bottom: 70px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .input {
    border: 1px solid #3E3E3E;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 10px;
    max-width: 280px;
    width: 100%;
    height: 40px;
    padding-left: 15px;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    color: ${baseTheme.colors.black};
    
    &::placeholder {
      color: #5F5F5F;
    }
  }
`

