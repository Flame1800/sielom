import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import MainHeader from "../../components/Common/MainHeader";
import styled from "styled-components";
import PersonCard from "../../components/Card/PersonCard";
import {SidebarLinks} from "../../styles/sharedStyle";
import React from "react";
import Button from "../../components/Common/Button";
import {useRouter} from "next/router";

const list = [
    "Руководство",
    "Сотрудники",
    "Педагоги",
]

export default function Specialties({ employees }) {

    const router = useRouter()
    const [currentPost, setCurrentPost] = React.useState(list[0])

    const selectPost = category => {
        router.push(`${router.pathname}/?category=${category}`, undefined)
        setCurrentPost(category)
    }

    return (
        <MainLayout>
            <MainHeader>Персонал</MainHeader>
            <Wrapper>
                <SidebarLinks>
                    {list.map((item, id) =>
                        <a
                            key={id}
                            onClick={() => selectPost(item)}
                            className={item === currentPost ? 'active' : ''}
                        >
                            {item}
                        </a>)}
                    <a target="_blank" href="https://old.sielom.ru/attestat_pedagog/1-attestacija-pedagogov.html">
                        Аттестация педагогов
                    </a>
                </SidebarLinks>
                <div className='items'>
                    <Content>
                        {employees.map(item => <PersonCard key={item.id} entity={item} />)}
                    </Content>
                </div>
            </Wrapper>
        </MainLayout>
    )
}

const Wrapper = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  
  .items {
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`


const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: 30px;
`

Specialties.getInitialProps = async (ctx) => {
    const { data } = await API.getEmployees(ctx.query.category)
    return { employees: data.data }
}
