const makeLink = (name, src) => ({ src, name })

const mapLinks = [
    {
        link: makeLink("Абитуренту", "entrant"),
        content: [
            {
                main: makeLink("", "/"),
                links: [
                    makeLink("Программы обучения", "/specialties"),
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
                    makeLink("Очная фома обучения", "/"),
                    makeLink("Заочная фома обучения", "/"),
                    makeLink("Очно-заочная фома обучения", "/"),
                ]
            },
            {
                main: makeLink("УЧЕБНЫЙ ПРОЦЕСС", "/"),
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
                main: makeLink("Колонка", "/"),
                links: [
                    makeLink("Ссылка", "/"),
                ]
            }
        ],
    },
    {
        link: makeLink("Родителю", "parent"),
        content: [
            {
                main: makeLink("Колонка", "/"),
                links: [
                    makeLink("Ссылка", "/"),
                ]
            }
        ],
    },
    {
        link: makeLink("Работодателю", "employer"),
        content: [
            {
                main: makeLink("Колонка", "/"),
                links: [
                    makeLink("Ссылка", "/"),
                ]
            }
        ],
    },
    {
        link: makeLink("Медиа", "media"),
        content: [
            {
                main: makeLink(null, "/"),
                links: [
                    makeLink("Новости", "/news"),
                    makeLink("Календарь мероприятий", "/events"),
                    makeLink("Полезное", "/"),
                ]
            },
        ]
    }
];

export default mapLinks
