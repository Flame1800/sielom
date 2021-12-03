import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-center w-full h-28 border-b border-black">
            <div className="h-full w-full flex items-center max-w-screen-xl">
                <Link href="/">
                <a
                    className="flex w-1/6 items-center h-full border-black"
                >
                    <img src="/img/logo-sielom.png" alt="Logo" className="h-8 ml-2" />
                </a>
                </Link>
                <div className="w-4/6 h-full p-5">
                    <Link href="/events">
                        <a className="text-gray-700 mr-4">Календарь мероприятий</a>
                    </Link>
                    <Link href="/rules">
                        <a className="text-gray-700">Учебные материалы</a>
                    </Link>
                </div>
                <a
                    href='tel:(3462) 550-528'
                   className="w-1/6 h-full flex justify-center border-black flex items-center font-bold text-blue-900"
                >
                    (3462) 550-528
                </a>
            </div>
        </header>
    )
}

export default Header