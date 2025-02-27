export const sliderData = [
  {
    videoSrc: "/public/Images/Slider/video.mp4", // Путь к видео
    imgSrc: "./src/assets/images/hero-jpg-3.jpg", // Оставьте для совместимости
    imgSmallSrc: "./Images/Slider/slide-31.png", // Оставьте для совместимости
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
];
