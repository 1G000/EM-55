const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          title:
            "ЭЛЕКТРОМОНТАЖ 55 | Производство электрооборудования для подстанций",
          metaTags: [
            {
              name: "description",
              content:
                "Производство электрооборудования для подстанций. Электромонтажные работы в Санкт-Петербурге и Ленинградской области. Ремонт кабельных линий. Восстановление благоустройства.",
            },
            {
              name: "keywords",
              content:
                "электромонтаж, электромонтажные работы, оборудование для подстанций, ремонт кабельной линии, восстановление благоустройста, ремонт кабеля, ввод в эксплуатацию подстанций, строительство подстанций, проектирование", // Добавлены ключевые слова
            },
            {
              property: "og:title",
              content: "ЭЛЕКТРОМОНТАЖ 55",
            },
            {
              property: "og:description",
              content:
                "Производство электрооборудования для трансформаторных подстанций.",
            },
            {
              property: "og:image",
              content: "https://em-55.ru/assets/logo-white.94e19ee4.png",
            },
            {
              property: "og:url",
              content: "https://em-55.ru/",
            },
            {
              property: "og:type",
              content: "website",
            },

            {
              name: "robots",
              content: "index, follow",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/contacts",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/ContactsPage.vue"),
        meta: {
          title:
            "Контакты | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования",
          metaTags: [
            {
              name: "description",
              content:
                "Контакты компании ЭЛЕКТРОМОНТАЖ 55 в Санкт-Петербурге. Телефон, адрес, email, форма обратной связи. Производство электрооборудования для подстанций",
            },
            {
              name: "keywords",
              content:
                "контакты, телефон, адрес, email, электромонтажные работы, Санкт-Петербург, СПБ, оборудование для трансформаторных подстанций",
            },
            {
              property: "og:title",
              content:
                "Контакты | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования",
            },
            {
              property: "og:description",
              content:
                "Контакты компании ЭЛЕКТРОМОНТАЖ 55 в Санкт-Петербурге. Телефон, адрес, email, форма обратной связи. Производство электрооборудования для подстанций",
            },
            {
              property: "og:image",
              content: "https://em-55.ru/assets/logo-white.94e19ee4.png",
            },
            {
              property: "og:url",
              content: "https://em-55.ru/contacts",
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              name: "robots",
              content: "index, follow",
            },
            {
              name: "geo.placename",
              content: "Санкт-Петербург",
            },
            {
              name: "geo.region",
              content: "RU-SPE",
            },
            {
              name: "geo.position",
              content: "59.937500;30.308611",
            },
            {
              name: "ICBM",
              content: "59.937500, 30.308611",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/AboutPage.vue"),
        meta: {
          title:
            "О компании | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования в Санкт-Петербурге",
          metaTags: [
            {
              name: "description",
              content:
                "Информация о компании ЭЛЕКТРОМОНТАЖ 55. Производство и поставка электрооборудования для подстанций в Санкт-Петербурге и по России.  История, миссия, команда, контакты.", // Оптимизированное описание
            },
            {
              name: "keywords",
              content:
                "ЭЛЕКТРОМОНТАЖ 55, о компании, производство электрооборудования, подстанции, Санкт-Петербург, контакты, история компании, производитель", // Более полные keywords
            },
            {
              property: "og:title",
              content:
                "О компании | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования в Санкт-Петербурге",
            },
            {
              property: "og:description",
              content:
                "Информация о компании ЭЛЕКТРОМОНТАЖ 55. Производство и поставка электрооборудования для подстанций в Санкт-Петербурге и по России.  История, миссия, команда, контакты.",
            },
            {
              property: "og:image",
              content: "https://em-55.ru/assets/logo-white.94e19ee4.png",
            },
            {
              property: "og:url",
              content: "https://em-55.ru/about",
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              name: "robots",
              content: "index, follow",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/history",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/HistoryPage.vue"),
        meta: {
          title:
            "История компании | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования в Санкт-Петербурге",
          metaTags: [
            {
              name: "description",
              content:
                "История развития компании ЭЛЕКТРОМОНТАЖ 55, производителя электрооборудования для подстанций в Санкт-Петербурге. От основания до сегодняшних достижений.",
            },
            {
              name: "keywords",
              content:
                "история компании, ЭЛЕКТРОМОНТАЖ 55, электрооборудование, подстанции, Санкт-Петербург, развитие компании, этапы развития, достижения",
            },
            {
              property: "og:title",
              content:
                "История компании | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования в Санкт-Петербурге",
            },
            {
              property: "og:description",
              content:
                "История развития компании ЭЛЕКТРОМОНТАЖ 55, производителя электрооборудования для подстанций в Санкт-Петербурге. От основания до сегодняшних достижений.",
            },
            {
              property: "og:image",
              content: "https://em-55.ru/assets/logo-white.94e19ee4.png",
            },
            {
              property: "og:url",
              content: "https://em-55.ru/history",
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              name: "robots",
              content: "index, follow",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/smr",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SmrPage.vue") }],
  },
  {
    path: "/gallery",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GalleryPage.vue") }],
  },
  {
    path: "/payment-information",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/PaymentInformationPage.vue"),
        meta: {
          title:
            "Реквизиты | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования",
          metaTags: [
            {
              name: "description",
              content:
                "Официальные реквизиты компании ЭЛЕКТРОМОНТАЖ 55: ИНН, КПП, юридический адрес, банковские реквизиты для оплаты счетов.",
            },
            {
              name: "keywords",
              content:
                "реквизиты, ИНН, КПП, юридический адрес, банковские реквизиты, ЭЛЕКТРОМОНТАЖ 55, Санкт-Петербург",
            },
            {
              property: "og:title",
              content:
                "Реквизиты | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования",
            },
            {
              property: "og:description",
              content:
                "Официальные реквизиты компании ЭЛЕКТРОМОНТАЖ 55: ИНН, КПП, юридический адрес, банковские реквизиты для оплаты счетов.",
            },
            {
              property: "og:url",
              content: "https://em-55.ru/payment-information",
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              name: "robots",
              content: "noindex, nofollow",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/vacancies",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/VacanciesPage.vue"),
        meta: {
          title:
            "Вакансии | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования в Санкт-Петербурге",
          metaTags: [
            {
              name: "description",
              content:
                "Актуальные вакансии компании ЭЛЕКТРОМОНТАЖ 55 в Санкт-Петербурге.  Работа в сфере производства электрооборудования для подстанций.  Присоединяйтесь к нашей команде!",
            },
            {
              name: "keywords",
              content:
                "вакансии, работа, ЭЛЕКТРОМОНТАЖ 55, электрооборудование, производство, Санкт-Петербург, работа в СПБ, карьера",
            },
            {
              property: "og:title",
              content:
                "Вакансии | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования в Санкт-Петербурге",
            },
            {
              property: "og:description",
              content:
                "Актуальные вакансии компании ЭЛЕКТРОМОНТАЖ 55 в Санкт-Петербурге. Работа в сфере производства электрооборудования для подстанций. Работа электромонтажником. Присоединяйтесь к нашей команде!",
            },
            {
              property: "og:image",
              content: "https://em-55.ru/assets/logo-white.94e19ee4.png",
            },
            {
              property: "og:url",
              content: "https://em-55.ru/vacancies",
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              name: "robots",
              content: "index, follow",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/privacy",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/PrivacyPage.vue") }],
  },
  {
    path: "/partners",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/PartnersPage.vue"),
        meta: {
          title:
            "Наши партнеры | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования в Санкт-Петербурге",
          metaTags: [
            {
              name: "description",
              content:
                "Список партнеров компании ЭЛЕКТРОМОНТАЖ 55. Производители комплектующих, поставщики материалов, строительные организации, проектные организации и другие наши деловые партнеры.",
            },
            {
              name: "keywords",
              content:
                "партнеры, поставщики, производители, ЭЛЕКТРОМОНТАЖ 55, электрооборудование, Санкт-Петербург, сотрудничество, деловые связи",
            },
            {
              property: "og:title",
              content:
                "Наши партнеры | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования в Санкт-Петербурге",
            },
            {
              property: "og:description",
              content:
                "Список партнеров компании ЭЛЕКТРОМОНТАЖ 55. Производители комплектующих, поставщики материалов, строительные организации, проектные организации и другие наши деловые партнеры.",
            },
            {
              property: "og:image",
              content: "https://em-55.ru/assets/logo-white.94e19ee4.png",
            },
            {
              property: "og:url",
              content: "https://em-55.ru/partners",
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              name: "robots",
              content: "index, follow",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/students",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/StudentsPage.vue"),
        meta: {
          title:
            "Работа для студентов и выпускников | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования",
          metaTags: [
            {
              name: "description",
              content:
                "Стажировки, практика и вакансии для студентов и выпускников технических вузов в компании ЭЛЕКТРОМОНТАЖ 55 в Санкт-Петербурге. Производство электрооборудования для подстанций. Начни карьеру с нами!",
            },
            {
              name: "keywords",
              content:
                "работа для студентов, работа для выпускников, стажировка, практика, ЭЛЕКТРОМОНТАЖ 55, электрооборудование, производство, Санкт-Петербург, карьера, техническое образование",
            },
            {
              property: "og:title",
              content:
                "Работа для студентов и выпускников | ЭЛЕКТРОМОНТАЖ 55 - Производство электрооборудования",
            },
            {
              property: "og:description",
              content:
                "Стажировки, практика и вакансии для студентов и выпускников технических вузов в компании ЭЛЕКТРОМОНТАЖ 55 в Санкт-Петербурге. Производство электрооборудования для подстанций. Начни карьеру с нами!",
            },
            {
              property: "og:image",
              content: "https://em-55.ru/assets/logo-white.94e19ee4.png",
            },
            {
              property: "og:url",
              content: "https://em-55.ru/students",
            },
            {
              property: "og:type",
              content: "website",
            },
            {
              name: "robots",
              content: "index, follow",
            },
            {
              name: "geo.placename",
              content: "Санкт-Петербург",
            },
            {
              name: "geo.region",
              content: "RU-SPE",
            },
            {
              name: "geo.position",
              content: "59.937500;30.308611",
            },
            {
              name: "ICBM",
              content: "59.937500, 30.308611",
            },
          ],
        },
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
