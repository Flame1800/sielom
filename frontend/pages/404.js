import MainLayout from "../layouts/MainLayout";
import styled from "styled-components";
import Button from "../components/Common/Button";
import {baseTheme} from "../styles/theme";
import {useRouter} from "next/router";

export default function NotFound() {
    const router = useRouter()

    return (
        <MainLayout>
            <Content>
                <div className="title">Страница не найдена</div>
                <div className="tag">404</div>
                <div onClick={() => router.back()}>
                    <Button>Вернуться назад</Button>
                </div>
            </Content>
        </MainLayout>
    )
}


const Content = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 80px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #3E3E3E;
    margin-bottom: 20px;
  }
  
  .tag {
    max-width: 458px;
    width: 100%;
    height: 177px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${baseTheme.colors.black};
    padding: 34px 0;
    font-size: 144px;
    font-weight: bold;
    margin-bottom: 30px;
    
    .gold {
      color: ${baseTheme.colors.gold};
    }
  }
`

