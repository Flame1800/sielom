import { API } from "../../helpers/API";

const makeLink = (name, src) => ({ src, name });

const mapLinks = [
  {
    link: makeLink("Институт", "institut"),
    content: [
      {
        main: makeLink("", "/"),
        links: [
          makeLink("Сведения об образовательной организации", "/sveden"),
          makeLink("WordSkills", "/worldskills_russia"),
          makeLink(
            "Образовательные стандарты",
            "/site/obrazovatelьnye-standarty"
          ),
          makeLink("Контакты", "/site/contacts"),
          makeLink("Медицинская деятельность", "/medical"),
          makeLink("Региональный ресурсный центр соревнований ИКаР", "/ikar"),
          makeLink("Старый сайт", "https://old.sielom.ru"),
        ],
      },
      {
        main: makeLink("Медиа", ""),
        links: [
          makeLink("Новости и мероприятия", "/news"),
          makeLink("Объявления", "/ads"),
        ],
      },
      {
        main: makeLink("", "/"),
        links: [
          makeLink(
            "Перечень документов для поступления",
            "/reception-campain/info?postId=9"
          ),
          makeLink(
            "Повышение квалификации",
            "https://old.sielom.ru/dopobr/povyshenie-kvalifikacii"
          ),
          makeLink(
            "Профессиональная переподготовка",
            "https://old.sielom.ru/dopobr/professionalnaja-perepodgotovka"
          ),
          makeLink("Семинары", "https://old.sielom.ru/dopobr/seminary"),
          makeLink("СОНКО", "/site/sonko"),
          makeLink("Справка 1С", "/site/help"),
        ],
      },
      {
        main: makeLink("Сервисы", ""),
        links: [
          makeLink("Расписание", `/schedule`),
          makeLink("Онлайн оплата", `/payment`),
        ],
      },
      {
        main: makeLink("", ""),
        links: [
          makeLink("Пыть-Яхский межотраслевой колледж", "/pytyach-college"),
          makeLink("Лагерь JoyCamp", `/site/joy-camp`),
          makeLink("Первичная аккредитация", `/site/pervichnaya-akkreditaciya`),
        ],
      },
    ],
  },
  {
    link: makeLink("Абитуриенту", "entrant"),
    content: [
      {
        main: makeLink("Поступающим", ""),
        links: [
          makeLink("Приёмная кампания", "/reception-campain/2023/info"),
          makeLink("Специальности", "/specialties"),
          makeLink(
            "Архив приёмных кампаний",
            "/site/archive-reception-campain"
          ),
        ],
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

export default mapLinks;
