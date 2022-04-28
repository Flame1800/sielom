import {API, siteUrl} from "../../libs/API";

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
                    makeLink("Старый сайт", "http://sielom.ru/"),
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
                main: makeLink("Дополнительное образование", "http://sielom.ru/dopobr"),
                links: [
                    makeLink("Перечень документов для поступления", "http://sielom.ru/dopobr/perechen-dokumentov-dlja-postuplenija"),
                    makeLink("Повышение квалификации", "http://sielom.ru/dopobr/povyshenie-kvalifikacii"),
                    makeLink("Профессиональная переподготовка", "http://sielom.ru/dopobr/professionalnaja-perepodgotovka"),
                    makeLink("Семинары", "http://sielom.ru/dopobr/seminary"),
                ]
            },
            {
                main: makeLink("Сервисы", ""),
                links: [
                    makeLink("Личный кабинет", "/profile/login"),
                    makeLink("Расписание", "/timetable"),
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
                    makeLink("Архив приёмных кампаний", "http://sielom.ru/abi/priemnaja-kampanija-2021"),
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
        link: makeLink("Курсы", "/site/courses"),
        content: [],
    },
];

export default mapLinks
