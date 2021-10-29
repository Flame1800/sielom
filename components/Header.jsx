
const Header = () => {
    return (
        <header className="flex items-center justify-center w-full h-16 border-b">
            <div className="px-20 h-full w-full flex items-center max-w-screen-xl">
                <a
                    className="flex items-center"
                    href="http://sielom.ru"
                >
                    <img src="/img/logo-sielom.png" alt="Logo" className="h-10 ml-2" />
                </a>
            </div>
        </header>
    )
}

export default Header