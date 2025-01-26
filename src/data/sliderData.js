import heroImage from "../assets/hero-jpg-1.jpg";

export const sliderData = [
  {
    imgSrc: heroImage,
    // imgSmallSrc: "./Images/Slider/slide-mobile.jpg",
    title: "ЭЛЕКТРОМОНТАЖ&nbsp;55",
    textcontent:
      "На&nbsp;протяжении 30&nbsp;лет мы изготавливаем электротехническое оборудование и&nbsp;выполняем все&nbsp;виды электромонтажных работ",
    buttons: [
      {
        btnTitle: "Написать нам",
        style: "btn__left",
        to: { path: "/", hash: "#form" },
      },
      {
        btnTitle: "О компании",
        style: "btn__right",
        to: { path: "/about" },
      },
    ],
  },
  {
    imgSrc: "./src/assets/images/hero-jpg-2.jpg",
    imgSmallSrc: "./Images/Slider/slide-21.png",
    title: "ЭЛЕКТРОМОНТАЖ&nbsp;55",
    subtitle: "Выполняем все&nbsp;виды электромонтажных работ",
    textcontent:
      "Ремонт кабельных линий напряжением 0,4кВ - 10кВ, поиск места повреждения&nbsp;КЛ, все&nbsp;виды испытаний, восстановление нарушенного благоустройства ",
    buttons: [
      {
        btnTitle: "Услуги",
        style: "btn__left",
        to: { path: "/", hash: "#service" },
      },
      {
        btnTitle: "О компании",
        style: "btn__right",
        to: { path: "/about" },
      },
    ],
  },
  {
    imgSrc: "./src/assets/images/hero-jpg-3.jpg",
    imgSmallSrc: "./Images/Slider/slide-31.png",
    title: "ЭЛЕКТРОМОНТАЖ&nbsp;55",
    subtitle: "Производим электрооборудование напряжением 0,4кВ - 10кВ",
    textcontent:
      "Изготавливаем БКТП, КТПН, КСО, УВР, ГРЩ&nbsp;под&nbsp;Ваши нужды ",
    buttons: [
      {
        btnTitle: "Продукция",
        style: "btn__left",
        to: { path: "/", hash: "#production" },
      },
      {
        btnTitle: "О компании",
        style: "btn__right",
        to: { path: "/about" },
      },
    ],
  },
];
