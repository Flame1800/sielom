import {API} from "../../libs/API";

const makeLink = (name, src) => ({ src, name })

const mapLinks = [
    {
        link: makeLink("Общее", "common"),
        content: [
            {
                main: makeLink("", "/"),
                links: [
                    makeLink("Сведения об образовательной организации", "/sveden"),
                    makeLink("WordSkills", "/worldskills_russia"),
                    makeLink("Персонал", "/employees"),
                    makeLink("Контакты", "/site/contacts"),
                    makeLink("Старый сайт", "https://old.sielom.ru"),
                ]
            },
            {
                main: makeLink("Медиа", ""),
                links: [
                    makeLink("Новости", "/news"),
                    makeLink("Календарь мероприятий", "/events"),
                ]
            },
            {
                main: makeLink("", "/"),
                links: [
                    makeLink("Перечень документов для поступления", "/reception-campain/info?postId=9"),
                    makeLink("Повышение квалификации", "https://old.sielom.ru/dopobr/povyshenie-kvalifikacii"),
                    makeLink("Профессиональная переподготовка", "https://old.sielom.ru/dopobr/professionalnaja-perepodgotovka"),
                    makeLink("Семинары", "https://old.sielom.ru/dopobr/seminary"),
                    makeLink("СОНКО", "/site/sonko"),
                    makeLink("Справка 1С", "/site/help"),
                ]
            },
            {
                main: makeLink("Сервисы", ""),
                links: [
                    makeLink("Личный кабинет", "/profile/login"),
                    makeLink("Расписание", `${API.url}/timetable`),
                ]
            },
            {
                main: makeLink("", ""),
                links: [
                    makeLink("Лагерь JoyCamp", `/site/joy-camp`),
                    makeLink("Первичная аккредитация", `/site/pervichnaya-akkreditaciya`),
                ]
            }
        ],
    },
    {
        link: makeLink("Абитуриенту", "entrant"),
        content: [
            {
                main: makeLink("Поступающим", ""),
                links: [
                    makeLink("Приёмная кампания", "/reception-campain/info"),
                    makeLink("Специальности", "/specialties"),
                    makeLink("Архив приёмных кампаний", "https://old.sielom.ru/abi/priemnaja-kampanija-2021"),
                ]
            },
        ],
    },
    {
        link: makeLink("Студенту", "/student"),
        content: [],
    },
    {
        link: makeLink("Выпускнику", "/graduate"),
        content: [],
    },
    {
        link: makeLink("Курсы", "/courses"),
        content: [],
    },
];

export default mapLinks
