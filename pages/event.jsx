import MainLayout from "../layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center max-w-screen-xl m-auto bg-gray-50 min-h-screen font-sans">
                <main className="flex flex-col w-full flex-1 px-20 max-w-screen-lg pt-4">
                    <div className="flex border-b justify-between items-center">
                        <h1 className="text-xl font-bold  pb-4">
                            Декада первокурсника - 30 октября
                        </h1>
                        <div className="text-md text-blue-400">мероприятие состоится</div>
                    </div>
                    <div className='flex w-full mb-4'>
                        <div className="flex flex-col w-3/5 sm:w-full">
                            <div className="flex w-full">
                                <div className="h-72 w-72 bg-blue-300 rounded-xl my-4 mr-8"> </div>
                                <div className="h-60 flex flex-col my-4">
                                    <div className="w-full pb-2 border-b">
                                        <div className="text-md text-gray-500">Время и место:</div>
                                        <div className="text-lg text-gray-900">Онлайн, 30 октября, 2021</div>
                                    </div>
                                    <div className="flex my-3 items-center">
                                        <div>
                                            <div className="text-md text-gray-500">Направление:</div>
                                            <div className="text-lg text-gray-900">Дизайн</div>
                                        </div>
                                    </div>
                                    <div className="flex my-3 items-center">
                                        <div>
                                            <div className="text-md text-gray-500">Контактное лицо:</div>
                                            <div className="flex">
                                                <div className="text-lg text-gray-900">Василий Анатольевич Пупкин</div>
                                                <div className="text-lg text-blue-900 ml-4 cursor-pointer">+7-932-256-36-78</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="text-lg mb-2 font-bold">О мероприятии:</div>
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
                                <div className="flex justify-center items-center rounded text-blue-50 text-lg bg-blue-800 w-48 cursor-pointer px-6 py-2 mt-8">
                                    Учавствовать
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    )
}