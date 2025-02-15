<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import structureImg from "../assets/structure.jpg";
import { ref } from "vue";

const sectionTitle = "Электролаборатория УПНР-426";
const services = [
  {
    title: "Испытание электрооборудования (напряжением до 10 кВ) повышенным напряжением",
    subtitles: [
      "Электродвигатели переменного тока",
      "Силовые трансформаторы, масляные реакторы",
      "Измерительные трансформаторы тока",
      "Измерительные трансформаторы напряжения",
      "Масляные выключатели",
      "Элегазовые выключатели",
      "Вакуумные выключатели",
      "Выключатели нагрузки",
      "Разъединители, отделители и короткозамыкатели",
      "Комплектные распределительные устройства внутренней и наружной установки (КРУ и КРУН)",
      "Комплектные токопроводы (шинопроводы)",
      "Сборные и соединительные шины",
      "Сухие токоограничивающие реакторы",
      "Конденсаторы",
      "Вентильные разрядники и ограничители перенапряжений",
      "Предохранители, предохранители-разъединители напряжением выше 1кВ",
      "Проходные изоляторы",
      "Подвесные и опорные изоляторы",
    ],
  },
  {
    title: "Испытание кабельных линий (напряжением 10 кВ) повышенным напряжением",
    subtitles: [
      "Кабели с бумажной изоляцией",
      "Кабели с пластмассовой изоляцией",
      "Кабели с резиновой изоляцией",
      "Кабели с изоляцией из шитого полиэтилена",
    ],
  },
  {
    title: "Измерение сопротивления изоляции электрооборудования (напряжением до 10кВ)",
    subtitles: [
      "Электродвигатели переменного тока",
      "Силовые трансформаторы, масляные реакторы",
      "Измерительные трансформаторы тока",
      "Измерительные трансформаторы напряжения",
      "Масляные выключатели",
      "Элегазовые выключатели",
      "Вакуумные выключатели",
      "Выключатели нагрузки",
      "Разъединители, отделители и короткозамыкатели",
      "Комплектные распределительные устройства внутренней и наружной установки (КРУ и КРУН)",
      "Сборные и соединительные шины",
      "Сухие токоограничивающие реакторы Конденсаторы",
      "Вентильные разрядники и ограничители перенапряжений Проходные изоляторы",
      "Подвесные и опорные изоляторы",
      "Электрические аппараты до 1 кВ (в том числе автоматические выключатели на номинальный ток 400 А и более)",
    ],
  },
  {
    title:
      "Измерение сопротивления изоляции электропроводок и кабельных линий (напряжением до 10кВ)",
    subtitles: [
      "Вторичные цепи и электропроводки",
      "Силовые кабельные линии (напряжением до 10кВ),",
    ],
  },
  {
    title:
      "Измерение сопротивления постоянному току электрооборудования (напряжением до 10 кВ)",
    subtitles: [
      "Электродвигатели переменного тока",
      "Силовые трансформаторы, масляные реакторы",
      "Измерительные трансформаторы тока",
      "Измерительные трансформаторы напряжения",
      "Масляные выключатели",
      "Элегазовые выключатели",
      "Вакуумные выключатели",
      "Выключатели нагрузки",
      "Разъединители, отделители и короткозамыкатели",
      "Комплектные распределительные устройства внутренней и наружной установки (КРУ и КРУН)",
      "Предохранители, предохранители-разъединители напряжением выше 1кВ",
    ],
  },
  {
    title: "Измерение сопротивления заземляющих устройств",
  },
  {
    title: "Измерение напряжения прикосновения (в электроустановках до 1000 В)",
  },
  {
    title:
      "Проверка наличия цепи между заземленными установками и элемен­тами заземленной установки",
  },
  {
    title: "Проверка цепи фаза-нуль в электроустановках до 1000 В с системой TN",
  },
  {
    title: "Проверка действия расцепителей автоматических выключателей",
  },
  ,
  {
    title: "Проверка релейной аппаратуры (в электроустановках напряжением 10 кВ)",
  },
  ,
  {
    title: "Проверка работы устройств защитного отключения (УЗО)",
  },
  ,
  {
    title:
      "Испытание повышенным напряжением вторичных цепей схем защиты, управления, сигнализации и измерения",
  },
  {
    title: "Измерение потерь холостого хода силовых трансформаторов",
  },
  {
    title: "Измерение коэффициента трансформации трансформаторов",
  },
];

const scale = ref(1);
const startDistance = ref(null);
const imageStyle = ref({
  transform: "scale(1)",
  transformOrigin: "0 0",
  maxWidth: "1000px",
});

const getDistance = (touch1, touch2) => {
  return Math.sqrt(
    Math.pow(touch2.clientX - touch1.clientX, 2) +
      Math.pow(touch2.clientY - touch1.clientY, 2),
  );
};

const handleTouchStart = (event) => {
  if (event.touches.length === 2) {
    startDistance.value = getDistance(event.touches[0], event.touches[1]);
  }
};

const handleTouchMove = (event) => {
  if (event.touches.length === 2) {
    const newDistance = getDistance(event.touches[0], event.touches[1]);
    const newScale = (newDistance / startDistance.value) * scale.value;
    imageStyle.value.transform = `scale(${newScale})`;
  }
};

const handleTouchEnd = () => {
  scale.value = parseFloat(
    imageStyle.value.transform.replace("scale(", "").replace(")", ""),
  );
  startDistance.value = null;
};
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs page-route="Электролаборатория" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <div>
      <p class="text">
        Весь персонал электролаборатории имеет необходимую профессиональную подготовку,
        допущен к проведению измерений и испытаний в действующих электроустановках, а
        также прошёл медицинское освидетельствование.
      </p>

      <p class="text">
        Все работы выполняются персоналом электролаборатории на её оборудовании, с
        использованием инструкций заводов-изготовителей по утверждённым руководством
        предприятия и согласованным программам и методикам выполнения измерений и с
        соблюдением требований ПТЭЭП, ПУЭ, Правил по охране труда при эксплуатации
        электроустановок, РД 34,45-51.300-97, ГОСТ Р 50571.16-99.
      </p>
      <p class="text">
        По итогам проведения необходимых испытаний, электролаборатория оформляет и
        представляет в установленном порядке протоколы испытаний и заключения о
        соответствии объектов испытаний требованиям нормативных документов.
      </p>
    </div>
    <h2 class="second__title">
      Наша электролаборатория выполненяет следующие виды работ в электроустановках
      напряжением до и выше 1000 В:
    </h2>

    <div class="list">
      <template v-for="(service, index) in services.filter((s) => s)" :key="index">
        <q-expansion-item
          v-if="service.subtitles && service.subtitles.length > 0"
          :label="service.title"
        >
          <q-card>
            <q-card-section>
              <div v-for="(detail, detailIndex) in service.subtitles" :key="detailIndex">
                <q-icon name="mdi-lightning-bolt" size="sm" color="primary" />
                {{ detail }}
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <div v-else class="service-item">
          {{ service.title }}
        </div>
      </template>
    </div>
    <h2 class="second__title">Стуктура электролаборатории:</h2>
    <div
      class="container"
      ref="imageContainer"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <q-img :src="structureImg" :style="imageStyle" ref="image"></q-img>
    </div>
  </UiSection>
</template>
<style scoped>
.container {
  width: 100%;
  display: flex;
  padding: 60px 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.q-expansion-item,
.service-item {
  border: 1px solid var(--q-accent);
  border-radius: 8px;
  transition: 0.3s linear;
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.8rem, 1.1vw, 0.9rem);
  color: var(--color-black);
  text-transform: uppercase;
  padding: 10px;
  min-height: 70px;
}
.text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  line-height: 30px;
  text-align: justify;
  margin-bottom: 20px;
}
.service-item {
  display: flex;
  align-items: center;
  padding: 18px 26px;
}

.q-card__section--vert {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1rem, 1.1vw, 1.2rem);
  text-transform: none;
  color: black;
}
.q-card__section--vert > *:nth-child(even) {
  font-family: Montserrat-bold, serif;
}
.second__title {
  align-self: flex-start;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.3rem, 2.3vw, 1.7rem);
  line-height: 1em;
}

@media (hover: hover) {
  .q-expansion-item:hover,
  .service-item:hover {
    cursor: pointer;
    color: var(--q-primary);
    -webkit-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2) !important;
    -moz-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2) !important;
    box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2) !important;
  }
}
</style>
