import MainLayout from "../../layouts/MainLayout";
import {API} from "../../libs/API";
import Events from "./index";

export default function Home(props) {

    console.log(props)
    return (
        <MainLayout>
            <div className='bg-gray-50 w-full'>
                <div className="flex flex-col items-center justify-center max-w-screen-xl m-auto bg-white border-l border-r border-black min-h-screen font-sans">
                    <main className="flex flex-col w-full flex-1 px-20 max-w-screen-lg pt-4">
                        <div className="flex border-b justify-between items-center">
                            <h1 className="text-4xl font-bold mt-8  pb-4">

                            </h1>
                        </div>
                        <div className='flex w-full mb-4'>
                            <div className="flex flex-col w-3/5 sm:w-full">
                                <div className="flex w-full">
                                    {/*<div className="h-72 w-72 bg-blue-300 rounded-xl my-4 mr-8"> </div>*/}
                                </div>
                                <   div className="flex items-center my-4 mt-4">
                                    <div className="pb-2 mr-20">
                                        <div className="text-md text-gray-500">Когда</div>
                                        <div className="text-2xl text-blue-900">5 ноября</div>
                                    </div>
                                    <div className="pb-2 mr-20">
                                        <div className="text-md text-gray-500">Где</div>
                                        <div className="text-2xl text-blue-900">Онлайн</div>
                                    </div>
                                    <div className="flex justify-center items-center rounded-xl text-blue-50 text-lg bg-blue-800 w-48 cursor-pointer px-8 py-4">
                                        Учавствовать
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="text-md leading-8">
                                        1 октября в 17:00 по московскому времени

                                        В ходе семинара будут обсуждаться следующие вопросы:

                                        Как изменилось представление искусственного интеллекта в современном обществе, по сравнению со старым пониманием.
                                        Дальнейшие перспективы развития технологий искусственного интеллекта.
                                        Практическое использование искусственного интеллекта.
                                        Участники: Научные работники, заведующие отделами и лабораториями ФИЦ ИУ РАН, ИПМ им М.В. Келдыша РАН.

                                        В обсуждении примут участие:

                                        Орлов Ю.Н., зав. отделом ИПМ им М.В. Келдыша РАН, д.ф.-м.н.;
                                        Хачумов В.М., зав. лабораторией ФИЦ ИУ РАН, д.т.н., профессор;
                                        Смирнов И.В., зав. лабораторией ФИЦ ИУ РАН, к.ф.-м.н., доцент;
                                        Стефанюк В.Л., действительный член Европейского координационного совета Искусственного интеллекта, вице-президент Российской ассоциации искусственного интеллекта, д.т.н., профессор
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold mt-8 pb-4 mb-2">
                            Другие мероприятия
                        </h1>
                        <div className="text-lg mb-10">Сдесь будут отображаться другие мероприятия</div>
                    </main>
                </div>
            </div>
        </MainLayout>
    )
}

Events.getInitialProps = async ctx => {
    // const { data } = await API.getEvent(ctx.query.id)
    // return { event: data }

    const { data } = await API.getEvents()
    return { event: ctx }
}
