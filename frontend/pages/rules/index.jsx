import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import React from "react";
import {setRules} from "../../redux/slices/rules";
import RuleCard from "../../components/Rules/RuleCard";
import {API} from "../../libs/API";
import FilterSection from "../../components/Rules/Filters/FilterSection";
import MainHeader from "../../components/Shared/MainHeader";
import ArrowButton from "../../components/Shared/ArrowButton";
import Button from "../../components/Shared/Button";
import styled from "styled-components";

export default function Index({ rules, roles }) {
    const dispatch = useAppDispatch()
    const cards = useAppSelector(state => state.rules.entities)


    React.useEffect(() => {
        dispatch(setRules(rules))
    }, [])


    return (
        <MainLayout>
            <MainHeader>Регламенты</MainHeader>
            <Btn><Link href="/rules/new"><Button>Новый регламент</Button></Link></Btn>
            <FilterSection rules={rules} cards={cards} roles={roles} />
            {cards.map(rule => <RuleCard key={rule.id} rule={rule} />)}
        </MainLayout>
    )
}


const Btn = styled.div`
  margin-top: 30px;
`


Index.getInitialProps = async () => {
    const rules = await API.getRules()
    const roles = await API.getEmployeeRoles()
    return { rules: rules.data.data, roles: roles.data.data }
}
