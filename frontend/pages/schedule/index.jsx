import MainLayout from "../../layouts/MainLayout";
import styled from "styled-components";


export default function Timetable()  {
    return (
        <MainLayout noFooter>
                <Content>
                    <iframe src="https://new.sielom.ru/timetable" scrolling="yes" frameborder="0"></iframe>
                </Content>
        </MainLayout>
    )
}

const Content = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0;

  
  iframe {
    border: none;
    width: 99vw;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    min-height: 85vh;
  }
`

