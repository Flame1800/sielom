const makeLink = (name, src) => ({ src, name });

const mapLinks = [
  {
    link: makeLink("Институт", ""),
    content: [
      {
        main: makeLink("", "/"),
        links: [
          makeLink("Сведения об образовательной организации", "/sveden"),
          makeLink(
            "Перечень документов для поступления",
            "/reception-campain/info?postId=9"
          ),
          makeLink("Медицинская деятельность", "/medical"),
          makeLink("Старый сайт", "https://old.sielom.ru"),
          makeLink("Контакты", "/site/contacts"),
        ],
      },
      {
        main: makeLink("Дополнительное образование", ""),
        links: [

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
        ],
      },
      {
        main: makeLink("Чемпионатное движние", ""),
        links: [
          makeLink("WordSkills", "/worldskills_russia"),
          makeLink("Региональный ресурсный центр соревнований ИКаР", "/ikar"),
        ],
      },
      {
        main: makeLink("", ""),
        links: [
          makeLink("МИССИЯ СИЭУиП", `/mission`),
          makeLink("Лагерь JoyCamp", `/site/joy-camp`),
          makeLink("Первичная аккредитация", `/site/pervichnaya-akkreditaciya`),
          makeLink("Справка 1С", "/site/help"),
        ],
      }
    ],
  },
  {
    link: makeLink("Абитуриенту", "entrant"),
    content: [
      {
        main: makeLink("Поступающим", ""),
        links: [
          makeLink("Приёмная кампания", "/reception-campain/2024/info"),
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
  {
    link: makeLink("Пыть-Яхский колледж", "/pytach-college"),
    content: [],
  },
];

export default mapLinks;
