const makeLink = (name, src) => ({ src, name })

const mapLinks = [
    {
        link: makeLink("Абитуренту", "entrant"),
        content: [
            {
                main: makeLink("Основная страница", "/"),
                links: [
                    makeLink("Программы обучения", "/specialties"),
                    makeLink("Приемная кампания", "/specialties"),
                    makeLink("Приемная комиссия", "/specialties"),
                    makeLink("Архив приемных кампаний", "/specialties"),
                ]
            }
        ],
    },
    {
        link: makeLink("Сутденту", "student"),
        content: [
            {
                main: makeLink("Рассписание занятий", "/"),
                links: [
                    makeLink("Очная форма обучения", "/"),
                    makeLink("Заочная форма обучения", "/"),
                    makeLink("Очно-заочная форма обучения", "/"),
                ]
            },
            {
                main: makeLink("УЧЕБНЫЙ ПРОЦЕСС", "/student"),
                links: [
                    makeLink("Табели успеваемости", "/"),
                    makeLink("Табели посещяемости", "/"),
                    makeLink("Дистанционные занятия", "/"),
                    makeLink("Промежуточная аттестация", "/"),
                    makeLink("График приема академических задолженностей", "/"),
                ]
            },
            {
                main: makeLink("Студенческая жизнь", "/"),
                links: [
                    makeLink("Студенческий совет", "/"),
                    makeLink("Проекты", "/"),
                    makeLink("Лига волонтеров", "/"),
                    makeLink("Медиацентр", "/"),
                ]
            },
        ],
    },
    {
        link: makeLink("Выпускнику", "graduate"),
        content: [
            {
                main: makeLink("Основная страница", "/graduate"),
                links: [
                    makeLink("Курсовые работы", "/"),
                    makeLink("Практика", "/"),
                    makeLink("Выпускные квалифиционные работы", "/"),
                    makeLink("Итоговая государственная аттестация", "/"),
                    makeLink("Трудоустройство", "/"),
                    makeLink("Сотрудничество с Тюмгу", "/"),
                ]
            }
        ],
    },
    {
        link: makeLink("Институт", "employer"),
        content: [
            {
                main: makeLink("Основные сведения", "/"),
                links: [
                    makeLink("Сведения об образовательной организации", "/sveden"),
                    makeLink("Об институте", "/"),
                    makeLink("Контакты", "/"),
                    makeLink("Работодателю", "/"),
                ]
            }
        ],
    },
    {
        link: makeLink("Медиа", "media"),
        content: [
            {
                main: makeLink("", "/"),
                links: [
                    makeLink("Новости", "/news"),
                    makeLink("Календарь мероприятий", "/events"),
                    makeLink("Обьявления", "/"),
                    makeLink("Регламенты", "/rules"),
                ]
            },
        ]
    },
    {
        link: makeLink("ДПО", "parent"),
        content: [
            {
                main: makeLink("Дополнительное образование", "/"),
                links: [
                    makeLink("Перечень документов для поступления", "/"),
                    makeLink("Повышение квалификации", "/"),
                    makeLink("Профессиональная переподготовка", "/"),
                    makeLink("Семинары", "/"),
                ]
            }
        ],
    },
];

export default mapLinks
