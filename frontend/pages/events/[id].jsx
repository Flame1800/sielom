import MainLayout from "../../layouts/MainLayout";
import router from "next/router";
import {API} from "../../libs/API";
import OutEditorText from "../../components/Editor/OutEditorText";
import moment from "moment";
import 'moment/locale/ru'

export default function Rule({event}) {
    console.log(event)

    const {attributes} = event
    const date = moment(attributes.start_date).calendar()

    return (
        <MainLayout>
            <div className='bg-gray-50 w-full'>
                <div className="flex flex-col items-center justify-center max-w-screen-xl m-auto bg-white border-l border-r border-black min-h-screen font-sans">
                    <main className="flex flex-col w-full flex-1 px-20 max-w-screen-lg pt-4">
                        <div className="flex border-b justify-between items-center">
                            <h1 className="text-4xl font-bold mt-8  pb-4">
                                {attributes.title}
                            </h1>
                        </div>
                        <div className='flex w-full mb-4'>
                            <div className="flex flex-col w-3/5 sm:w-full">
                                {attributes.cover.data && <div className="flex w-full">
                                    <img
                                    src={`http://localhost:1337${attributes.cover.data.attributes.url}`}
                                    alt={'Не удалось заргуить изображение'}
                                        className="max-w-full h-96 rounded-xl my-4 mr-8" />
                                </div>}
                                <   div className="flex items-center my-4 mt-4">
                                    <div className="pb-2 mr-20">
                                        <div className="text-md text-gray-500">Когда</div>
                                        <div className="text-2xl text-blue-900">{date}</div>
                                    </div>
                                    <div className="pb-2 mr-20">
                                        <div className="text-md text-gray-500">Где</div>
                                        <div className="text-2xl text-blue-900">{attributes.place}</div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="text-md leading-8">
                                        {attributes.description}
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

Rule.getInitialProps = async ctx => {
    const { data } = await API.getEvent(ctx.query.id)
    return { event: data.data }
}