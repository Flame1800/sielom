import Link from "next/link";

const upLinks = [
  {
    src: "/",
    name: "Об институте",
  },
  {
    src: "/",
    name: "Персонал",
  },
  {
    src: "/",
    name: "WordSkills",
  },
  {
    src: "/events",
    name: "Календарь мероприятий",
  },
  {
    src: "/rules",
    name: "Учебные материалы",
  },
];

const mainLinks = [
  {
    src: "/",
    name: "Абитуренту",
  },
  {
    src: "/",
    name: "Студенту",
  },
  {
    src: "/",
    name: "Выпускнику",
  },
  {
    src: "/",
    name: "Родителю",
  },
  {
    src: "/",
    name: "Работодателю",
  },
  {
    src: "/",
    name: "Образование",
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-28 border-b bg-opacity-50 fixed bg-white backdrop-blur">
      <div className="h-full w-full flex items-center max-w-screen-xl">
        <Link href="/">
          <a className="flex w-1/6 items-center h-full border-black">
            <img src="/img/logo-sielom.png" alt="Logo" />
          </a>
        </Link>
        <div className="flex mt-6 flex-col w-full ml-10">
          <div className="pb-3 mb-1 border-b w-full">
            {upLinks.map((link) => (
              <Link key={link.src} href={link.src}>
                <a className="text-gray-500 text-md mr-4 text-xs">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="mt-2 mb-5">
            {mainLinks.map((link) => (
              <Link key={link.src} href={link.src}>
                <a className="text-md mr-10 text-md">{link.name}</a>
              </Link>
            ))}
          </div>
        </div>

        <a
          href="tel:(3462) 550-528"
          className="w-1/6 h-full flex justify-center border-black flex items-center font-bold"
        >
          (3462) 550-528
        </a>
      </div>
    </header>
  );
};

export default Header;
