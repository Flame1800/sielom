import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import React from "react";
import {setRules} from "../redux/slices/rules";
import RuleCard from "../components/Rules/Card";
import {API} from "../libs/API";
import Filter from "../components/Rules/Filters/Filter";

export default function Rules({ rules, roles }) {
    const dispatch = useAppDispatch()
    const cards = useAppSelector(state => state.rules.entities)

    React.useEffect(async () => {
        const data = await API.getRules()
    })

    React.useEffect(() => {
        dispatch(setRules(rules))
    }, [])

    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center min-h-screen font-sans">
                <main className="flex w-full flex-1 max-w-screen-xl">
                    <div className='flex flex-col w-full mb-4'>
                        <div className="flex flex-col my-5 items-center justify-between h-16">
                            <div className="font-bold text-4xl">Регламенты</div>
                            <Link href="/rule/new">
                                <a className="flex mt-3 justify-center items-center text-xl w-1/6 border-black h-full
                                bg-gradient-to-r hover:from-red-400 hover:to-yellow-500">Новый регламент</a>
                            </Link>
                        </div>
                        <Filter rules={rules} cards={cards} roles={roles} />
                        <div className="flex flex-wrap sm:w-full border-separate">
                            {cards.map(rule => <RuleCard key={rule.id} rule={rule} />)}
                        </div>
                    </div>

                </main>
            </div>
        </MainLayout>
    )
}



Rules.getInitialProps = async () => {
    const { data } = await API.getRules()
    const roles = await API.getEmployeeRoles()
    return { rules: data, roles: roles.data }
    // return { rules: [], roles: [] }
}