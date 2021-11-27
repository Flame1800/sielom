import MainLayout from "../../layouts/MainLayout";
import router from "next/router";
import {API} from "../../libs/API";
import OutEditorText from "../../components/Editor/OutEditorText";

export default function PostPage({post}) {
    return (
        <MainLayout>
            <div className='bg-gray-50 w-full'>
                <div className="flex flex-col items-center justify-center max-w-screen-xl m-auto bg-white border-l border-r border-black min-h-screen font-sans">
                    <main className="flex flex-col w-full flex-1 px-20 max-w-screen-lg pt-4">
                        <a onClick={() => router.back()} className="text-xl text-indigo-700 cursor-pointer">
                            Назад
                        </a>
                        <div className="flex border-b justify-between items-center">
                            <h1 className="text-4xl font-bold mt-4  pb-4">
                                {post.title}
                            </h1>
                        </div>
                        <div className='flex w-full mb-4'>
                            <div className="flex flex-col w-3/5 sm:w-full">
                                <div className="mt-8">
                                    <div className="text-md leading-8">
                                        <OutEditorText data={post.body} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </MainLayout>
    )
}

PostPage.getInitialProps = async ctx => {
    const { data } = await API.getRule(ctx.query.slug)
    return { post: data }
}