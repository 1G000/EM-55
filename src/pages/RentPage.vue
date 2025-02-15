<script setup>
import { ref, computed } from "vue";
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import CarCard from "src/components/CarCard.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import JoinTeam from "src/components/JoinTeam.vue";
import EquipmentRentFormDialog from "src/components/EquipmentRentFormDialog.vue";
import gazImg from "../assets/specialCars/gaz66.jpg";
import kamazImg from "../assets/specialCars/kamaz.jpg";
import catImg from "../assets/specialCars/cat428.jpg";
import bitelliImg from "../assets/specialCars/bitelli621.jpg";
import dynapacImg from "../assets/specialCars/DynapacCC800.jpg";

const sectionTitle = "Аренда спецтехники";

const specialCars = [
  {
    id: 1,
    title: "Кабелепрокладочная машина на базе ГАЗ-66 с лебедкой",
    imgSrc: gazImg,
    price: [
      "3500,00 р. в час в т.ч. НДС 20%",
      "28000,00 р. в смену (1+7 часов) в т.ч. НДС 20%",
    ],
    description:
      "ГАЗ-66 с лебедкой. Трос 200 метров погонных. Комплект домкратов для кабеля, ролики раскаточные и угловые.",
  },
  {
    id: 2,
    title: "КМУ на базе КАМАЗ с установкой FASSI 110",
    imgSrc: kamazImg,
    description: "",
    price: [
      "3000,00 р. в час в т.ч. НДС 20%",
      "24000,00 р. в смену (1+7 часов) в т.ч. НДС 20%",
    ],
    characteristics: [
      "Грузовой момент: 10,60 тм.",
      "Максимальная грузоподъёмность: 5185 кг на вылете 2,00м",
      "Максимальный гидравлический вылет 6,10м - грузоподъёмность: 1730кг",
      "Максимальный вылет с 3 механическими секциями телескопирования составляет 12,40м, при этом грузоподъёмность равна 500 кг.",
    ],
  },
  {
    id: 3,
    title: "Экскаватор погрузчик CAT-428",
    imgSrc: catImg,
    price: [
      "3500,00 р. в час в т.ч. НДС 20%",
      "28000,00 р. в смену (1+7 часов) в т.ч. НДС 20%",
    ],
    characteristics: [
      "Мощность — полезная: 64 кВт",
      "Эксплуатационная масса — номинальная: 8275 кг",
      "Эксплуатационная масса — максимальная: 11000 кг",
    ],
  },
  {
    id: 4,
    title: "Асфальтоукладчик тротуарный Bitelli BB621C",
    imgSrc: bitelliImg,
    price: [
      "4000,00 р. в час в т.ч. НДС 20%",
      "32000,00 р. в смену (1+7 часов) в т.ч. НДС 20%",
    ],
    characteristics: [
      "длина: 3800 мм",
      "ширина: 1400 мм",
      "высота: 1970 мм",
      "рабочая скорость: 20 м/мин",
      "мощность: 26,4 кВт",
      "двигатель: HATZ 2M 41L",

      "транспортная скорость: 3,5 км/ч",
      "эксплуатационная масса (с плитой): 4000 кг",
      "ширина укладки: 3,0 м",
      "длина бункера: 1300 мм",
      "ширина бункера: 2800 мм",
    ],
  },
  {
    id: 5,
    title: "Тандемный асфальтовый каток Dynapac CC800",
    imgSrc: dynapacImg,
    price: [
      "3000,00 р. в час в т.ч. НДС 20%",
      "24000,00 р. в смену (1+7 часов) в т.ч. НДС 20%",
    ],
    characteristics: [
      "Максимальная рабочая масса: 1665 кг",
      "Рабочая масса (включая ROPS):	1575 кг",
      "Масса переднего модуля:	740 кг",
      "Масса заднего модуля:	835 кг",
      "Диапазон скорости:	0-6",
      "Вертикальная осцилляция	±6°",
      "Двигатель	Perkins 403D-11",
      "Тип: Дизельный с водяным охлаждением",
      "Номинальная мощность, SAE J1995:	17 кВт (23,5 л.с.) @ 2 600 об./мин",
      "Ёмкость топливного бака:	23 л",
      "ширина бункера: 2800 мм",
    ],
  },
  {
    id: 6,
    title: "Автокран 16 тонн. На базе, а/м МАЗ",
    price: [
      "3000,00 р. в час в т.ч. НДС 20%",
      "24000,00 р. в смену (1+7 часов) в т.ч. НДС 20%",
    ],
  },
  {
    id: 7,
    title: "Самосвал 16 тонн. На базе, а/м КАМАЗ",
    price: [
      "3000,00 р. в час в т.ч. НДС 20%",
      "24000,00 р. в смену (1+7 часов) в т.ч. НДС 20%",
    ],
  },
  {
    id: 8,
    title: "Газель NEXT грузопассажирская,7 мест. 1,5 тонны",
    price: [
      "2000,00 р. в час в т.ч. НДС 20%",
      "16000,00 р. в смену (1+7 часов) в т.ч. НДС 20%",
    ],
  },
];
const rentDialog = ref(false);
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <div class="text__content">
      <p>
        Компания «Электромонтаж 55» предлагает взять в аренду специальную строительную
        технику из своего автопарка.
      </p>
      <p>
        Заполните форму на сайте или отправьте нам заполненный бланк заявки на электронную
        почту.
      </p>
    </div>
    <div class="rent__button-wrapper">
      <q-btn
        unelevated
        style="width: 350px"
        class="rent__button"
        color="primary"
        @click="rentDialog = true"
      >
        Заполнить форму
      </q-btn>
      <a class="download__link rent__button" href="./rent.docx"
        ><span>Скачать бланк заявки</span><q-icon color="gray" name="download"></q-icon
      ></a>
    </div>

    <JoinTeam
      title="Контакт для связи"
      name="Николай Николаевич"
      jobTitle="Главный механик"
      phoneNumber="+7-981-990-97-37"
      phone="+79819909737"
      mail="rent@em-55.com"
    />
    <article class="partner-cards">
      <CarCard
        v-for="(car, index) in specialCars"
        :key="index"
        :title="car.title"
        :imgSrc="car.imgSrc"
        :href="car.href"
        :description="car.description"
        :price="car.price"
        :characteristics="car.characteristics"
      />
    </article>
    <EquipmentRentFormDialog v-model="rentDialog" />
  </UiSection>
</template>

<style scoped>
.partner-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}
.text__content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.1rem, 2.3vw, 1.2rem);
  line-height: 1.5em;
  padding: 40px 0;
  border-radius: 8px;
}
.partners-page__text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  line-height: 30px;
}
.download__link {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--q-primary);
  justify-content: center;
}
.rent__button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding-bottom: 40px;
}
.rent__button {
  color: var(--color-white);
  width: 350px;
  height: 60px;
  text-transform: none;
  border-radius: 8px;
  font-family: Montserrat-bold, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 21.6px;
  transition: 0.3s linear;
}
@media (max-width: 700px) {
  .rent__button-wrapper {
    flex-direction: column;
    gap: 40px;
    padding: 0 20px 40px;
  }
}
@media (max-width: 390px) {
  .rent__button {
    max-width: 100%;
  }
}

@media (hover: hover) {
  .rent__button:hover {
    color: var(--q-accent) !important;
  }
  .download__link:hover {
    color: var(--q-primary);
  }
}
</style>
