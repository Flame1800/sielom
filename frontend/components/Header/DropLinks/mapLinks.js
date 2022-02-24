import {API} from "../../../libs/API";

const makeLink = (name, src) => ({ src, name })

const mapLinks = [
    {
        link: makeLink("common", "common"),
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
                main: makeLink("Дополнительное образование", ""),
                links: [
                    makeLink("Перечень документов для поступления", "/"),
                    makeLink("Повышение квалификации", "/"),
                    makeLink("Профессиональная переподготовка", "/"),
                    makeLink("Семинары", "/"),
                ]
            },
            {
                main: makeLink("Сервисы", ""),
                links: [
                    makeLink("Личный кабинет", "/profile/login"),
                    makeLink("Расписание", "/timetable"),
                ]
            }
        ],
    },
    {
        link: makeLink("Абитуренту", "entrant"),
        content: [
            {
                main: makeLink("Поступающим", ""),
                links: [
                    makeLink("Премная компания", "/reception-campain"),
                    makeLink("Программы обучения", "/specialties"),
                ]
            },
            {
                main: makeLink("Архив приемных кампаний", ""),
                links: [
                    makeLink("Приемная кампания 2021", "http://sielom.ru/abi/priemnaja-kampanija-2021"),
                    makeLink("Приемная кампания 2020", "http://sielom.ru/abi/priemnaja-komissija/priemnaja-kampanija-20202021-uchebnyi-god.html"),
                    makeLink("Приемная кампания 2019", "http://sielom.ru/abi/priemnaja-komissija/priemnaja-kampanija-20192020-uchebnyi-god.html"),
                    makeLink("Приемная кампания 2018", "http://sielom.ru/abi/priemnaja-komissija/priemnaja-kampanija-20182019-uchebnyi-god.html"),
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
                    makeLink("Контакты", "/"),
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
