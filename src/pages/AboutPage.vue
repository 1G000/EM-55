<script setup>
import UiSection from "../components/UiSection.vue";
import UiInnerPageTitle from "src/components/UiInnerPageTitle.vue";

const sectionTitle = "О компании";
const data = {
  generalInfo: [
    {
      id: 0,
      text: "ООО «Электромонтаж 55» одно из старейших предприятий России, имеющие лицензии и сертификаты на изготовление электротехнического оборудования от низкого до среднего класса напряжения. Электротехническое оборудование входит в перечень рекомендованного и одобренного к применению <span style='font-weight: bold; text-decoration: underline;'>«Научно-техническим советом ПАО «РОССЕТИ ЛЕНЭНЕРГО»</span>, а <span style='font-weight: bold; text-decoration: underline;'>типовые проекты имеют согласования филиала ПАО «Россети Ленэнерго» «Кабельная сеть».</span>",
    },
    {
      id: 1,
      text: "Наша продукция наиболее полно помогает заказчикам решать задачи безопасности, функциональности и надёжности работы в сфере распределения и поставки электроэнергии.",
    },
    {
      id: 2,
      text: "ООО «Электромонтаж 55» обладает полностью укомплектованным штатом сотрудников с материально технической базой для выполнения всего комплекса электромонтажных и наладочных работ.",
    },
    {
      id: 3,
      text: "ООО «Электромонтаж 55» выполняет полный комплекс работ от проектирования, до ввода готового объекта в эксплуатацию. Заказчик экономит   время, ресурсы и получает гарантированную длительную и бесперебойную работу объекта или закупленного оборудования в будущем.",
    },
    {
      id: 4,
      text: "ООО «Электромонтаж 55» выполняет «под ключ» полный комплекс работ от строительства сетей до благоустройства территории.",
    },
  ],
  quoteFirst:
    "«Мы все делаем основательно.  Шагаем уверенно, но так, чтобы штаны не порвать…»",
  quoteSecond: "«Мы понимаем всю ответственность и работаем качественно»",
  managerWords: [
    {
      id: 0,
      text: "ООО «Электромонтаж 55» с 2015 года вошло в группу компаний «ГРАНИТ»",
    },
    {
      id: 1,
      text: "<span style='font-weight: bold; font-style: italic;'>«30 лет назад, когда наша организация начинала свою деятельность, мы пробовали себя в различных направлениях. Подумав, остановились на энергетике. Это то, что всегда будет востребовано. Людям нужен свет.  Лампочки должны гореть, чайники кипеть, а телевизоры показывать. Мы работаем для населения, точно также, как врачи или полиция и понимаем какая ответственность ложится на нас,  а потому делаем всё качественно и на совесть»</span>",
    },
    {
      id: 2,
      text: "<span style='font-weight: bold; font-style: italic;'>С&nbsp;уважением, Евгений&nbsp;Селин, Руководитель&nbsp;группы компаний&nbsp;«ГРАНИТ», Генеральный&nbsp;директор «Электромонтаж&nbsp;55»</span>",
    },
    {
      id: 3,
      text: "Сегодня на энергетическом рынке Санкт-Петербурга и Ленинградской области представлены десятки предприятий, доставляющих электрическую энергию потребителю. ООО «Электромонтаж 55» успешно работает в этой сфере уже много лет. За эти годы «Электромонтаж 55» приобрёл уникальный опыт, собрал высококвалифицированный коллектив сотрудников, закупил автотранспорт и технику, организовал своё проектно-конструкторское бюро.  Все это позволяет выполнять заказы любой сложности качественно и в срок.",
    },
  ],
};
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '64px 20px 0 20px'"
  >
    <UiInnerPageTitle :title-text="sectionTitle" />
    <q-item-section class="content__top">
      <p
        v-for="paragragh in data.generalInfo"
        :key="paragragh.id"
        v-html="paragragh.text"
        class="content__top-text"
      ></p>
    </q-item-section>

    <q-item-section class="content__bottom">
      <q-item class="content__bottom-left q-pl-none">
        <picture class="picture__container"
          ><img
            src="Images/Contacts/selin.jpg"
            alt="картинка"
            class="picture"
          />
        </picture>
        <div class="content____quote-wrapper-back">
          <blockquote class="content__quote-wrapper">
            <p class="content__quote-text">{{ data.quoteFirst }}</p>
            <q-icon
              class="mdi mdi-format-quote-close content__quote-icon"
              size="32px"
              color="primary"
            ></q-icon>
          </blockquote>

          <blockquote class="content__quote-wrapper">
            <q-icon
              class="mdi mdi-format-quote-open content__quote-icon"
              size="32px"
              color="primary"
            ></q-icon>
            <p class="content__quote-text">{{ data.quoteSecond }}</p>
          </blockquote>
        </div>
      </q-item>

      <q-item class="content__bottom-right">
        <p
          v-for="text in data.managerWords"
          :key="text.id"
          v-html="text.text"
          :class="text.id === 0 || text.id === 2 ? 'q-mb-lg' : ''"
          class="content__bottom-text"
        ></p>
      </q-item>
    </q-item-section>
  </UiSection>
</template>

<style scoped>
.content__wrapper {
  gap: 50px;
}
.content__top {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.content__top-text,
.content__bottom-text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  line-height: 30px;
}
.content__bottom-text {
  text-align: justify;
}
.content__bottom-text:nth-child(3) {
  max-width: 445px;
  align-self: flex-end;
  text-align: start;
}
.content__bottom {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 64px;
  flex-wrap: nowrap;
  margin-left: 0px;
}
.content__bottom-left,
.content__bottom-right {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.content__bottom-left {
  align-items: center;
  gap: 30px;
}

.content__bottom-right {
  width: 70%;
  gap: 30px;
}
.content__quote-wrapper {
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-size: clamp(0.9rem, 1.1vw, 1rem);
  font-family: Montserrat-regular, serif;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 362px;
}
.content____quote-wrapper-back {
  background-color: var(--background-light-accent);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.content__quote-icon {
  width: 24px;
  height: 24px;
}
.content__quote-text {
  font-style: italic;
  font-weight: bold;
}
.picture__container {
  margin: 0 auto;
  max-width: 100%;
}
.picture {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 1240px) {
  .content__bottom {
    gap: 20px;
  }
  .content__bottom-right {
    gap: 24px;
    padding: 0;
  }
}

@media (max-width: 970px) {
  .content__bottom {
    flex-wrap: wrap;
    gap: 60px;
  }
  .content__bottom-left {
    flex-direction: row;
    width: 100%;
  }
  .content__bottom-right {
    width: 100%;
  }
  .picture__container {
    width: 500px;
  }
  .content__quote-wrapper {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
@media (max-width: 768px) {
  .content__bottom-left {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-right: 0px;
  }
  .content__quote-wrapper {
    width: 100%;
  }

  .picture__container {
    width: 300px;
  }
  img {
    width: 300px;
  }
}
</style>
