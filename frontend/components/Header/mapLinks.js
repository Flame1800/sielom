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
                    makeLink("Лагерь с дневным пребыванием детей", "http://sielom.ru/pages/organizaciya-lagerya.html"),
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
                    makeLink("Приёмная компания", "/reception-campain"),
                    makeLink("Программы обучения", "/specialties"),
                ]
            },
            {
                main: makeLink("Архив приёмных кампаний", ""),
                links: [
                    makeLink("Приёмная кампания 2021", "http://sielom.ru/abi/priemnaja-kampanija-2021"),
                    makeLink("Приёмная кампания 2020", "http://sielom.ru/abi/priemnaja-komissija/priemnaja-kampanija-20202021-uchebnyi-god.html"),
                    makeLink("Приёмная кампания 2019", "http://sielom.ru/abi/priemnaja-komissija/priemnaja-kampanija-20192020-uchebnyi-god.html"),
                    makeLink("Приёмная кампания 2018", "http://sielom.ru/abi/priemnaja-komissija/priemnaja-kampanija-20182019-uchebnyi-god.html"),
                ]
            }
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
        link: makeLink("Институт", "employer"),
        content: [
            {
                main: makeLink("", ""),
                links: [
                    makeLink("Контакты", "http://sielom.ru/pages/contacts.html"),
                ]
            },
            {
                main: makeLink("Медиа", ""),
                links: [
                    makeLink("Новости", "/news"),
                    makeLink("Календарь мероприятий", "/events"),
                ]
            },
        ],
    },
];

export default mapLinks
