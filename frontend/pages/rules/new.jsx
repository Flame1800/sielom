import MainLayout from "../../layouts/MainLayout";

import dynamic from "next/dynamic";
import React from "react";
import router from 'next/router'
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {fetchCreateRule} from "../../redux/slices/rules";
import Editor from "../../components/Editor/Editor";



export default function NewPost() {
    const [status, setStatus] = React.useState('process')
    const [title, setTitle] = React.useState( '')
    const [body, setBody] = React.useState('')
    const [error, setError] = React.useState(false)

    const dispatch = useAppDispatch()

    const createPostHandle = async () => {
        setError(false)

        if (title && body) {
            dispatch(fetchCreateRule({ title, body }))
            setStatus('success')
        }
        else {
            setError(true)
        }
    }

        const editorJS = React.useRef(null)

    const handleSave = React.useCallback(async () => {
        const savedData = await editorJS.current.save();
        setBody(savedData)
    }, [])

    const handleInitialize = React.useCallback((instance) => {
        editorJS.current = instance
    }, [])

    const succesBlock = (
        <div className='mt-10'>
            <div className="text-4xl font-bold">
                Статья опубликованна!
            </div>
            <div className='mt-5 p-5 flex justify-center cursor-pointer border border-green-500 text-green-500' onClick={() => router.back()}>
                Вернутся назад
            </div>
        </div>
    )

    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center min-h-screen font-sans">
                <main className="flex w-full flex-1 max-w-screen-xl border-l border-r border-black">
                    <div className='flex flex-col w-full mb-4'>
                        <h1 className="text-4xl flex items-center font-bold border-b border-black pl-4 h-16">
                            Новый регламент
                        </h1>
                        <div className="flex flex-wrap flex-col sm:w-full items-center relative">
                            {status === 'process' ? <>
                                {error &&
                                <div className='mt-4'>
                                    <div className="text-red-500 text-lg">Заполните заголовок и саму статью прежде чем опубликовать!</div>
                                </div>}
                                <div className="max-w-screen-lg px-20 w-full mt-20 flex flex-col">
                                    <textarea
                                           placeholder="Заголовок - Начите писать здесь"
                                           onChange={e => setTitle(e.target.value)}
                                           value={title}
                                           className='text-4xl ml-24 pl-2 mb-4 h-auto font-bold text-black w-full outline-none'
                                    />
                                    <Editor data={body} instanceRef={editorJS} handleSave={handleSave} init={handleInitialize} />
                                </div>
                            </> : succesBlock}

                            {status !== 'success' &&
                            <div className="w-full max-w-screen-xl flex justify-between border fixed bottom-0 border-black bg-white z-10 h-20">
                                    <a onClick={() => router.back()} className='h-full w-80 flex justify-center items-center text-xl cursor-pointer border-r border-black'>
                                        Назад
                                    </a>
                                <div onClick={() => createPostHandle()} className='h-full w-80 flex justify-center items-center text-xl bg-blue-300 cursor-pointer border-l border-black'>
                                    Опубликовать
                                </div>
                            </div>}
                        </div>
                    </div>

                </main>
            </div>
        </MainLayout>
    )
}