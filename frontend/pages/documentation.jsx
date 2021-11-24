import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import router from "next/router";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import React from "react";
import {fetchPosts} from "../redux/slices/posts";
import moment from "moment";
import 'moment/locale/ru'

export default function Home() {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
            const data = dispatch(fetchPosts())
            console.log(data);
    }, [])

    const posts = useAppSelector((state) => state.posts.entities)

    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center min-h-screen font-sans">
                <main className="flex w-full flex-1 max-w-screen-xl border-l border-r border-black">
                    <div className='flex flex-col w-full mb-4'>
                        <div className="flex items-center justify-between border-b border-black h-16 ">
                            <a onClick={() => router.back()} className='h-full w-1/6 flex justify-center items-center text-xl cursor-pointer border-r border-black'>
                                Назад
                            </a>
                            <div className="font-bold text-4xl">Учебные материалы</div>
                            <Link href="/post/new">
                                <a className="flex justify-center items-center p-5 text-xl bg-blue-300 w-1/6 border-l border-black h-full">Новый пост</a>
                            </Link>
                        </div>
                        <div className="h-20 border-black flex justify-center items-center w-full">
                            <input type='text' placeholder='Поиск...' className='placeholder-gray-700 w-4/6
                             text-xl pl-3 focus:outline-none h-full w-full' />
                        </div>
                        <div className="flex flex-wrap sm:w-full border-separate">
                            {posts.map(post => {
                                const date = moment(post.published_at).calendar()
                                return (
                                    <div key={post.id} className='flex flex-col w-1/3 mb-5 h-96'>
                                        <div className="  bg-white flex flex-col min-w-0 h-full justify-between border-r border-b mb-5  border-black border-t">
                                            <div className="p-7">
                                                <div className="flex flex-col justify-between mb-3">
                                                    <div className="text-md text-gray-600 mb-2">{date}</div>
                                                    <div className="font-bold text-md line-clamp-3">{post.title}</div>
                                                </div>
                                                <p className="text-md overflow-hidden max-h-24 line-clamp-4">
                                                    {post.body?.blocks ? post.body.blocks[0].data.text : ''}
                                                </p>
                                            </div>
                                            <Link href={`/post/${post.id}`}>
                                                <a
                                                    className="flex justify-center items-center text-lg font-bold py-6 border-t bg-white
                                border-black cursor-pointer bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                                                >
                                                    Открыть
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </main>
            </div>
        </MainLayout>
    )
}
