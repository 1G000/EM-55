<script setup>
import UiSection from "../components/UiSection.vue";
import UiInnerPageTitle from "src/components/UiInnerPageTitle.vue";
import PartnerCard from "src/components/PartnerCard.vue";

const sectionTitle = "Наши партнёры";
const partners = [
  {
    title: "ПАО «Россети Ленэнерго»",
    imgSrc: "./Images/partners/rsle.png",
    href: "https://rosseti-lenenergo.ru/",
  },
  {
    title: "Филиал ПАО «Россети Ленэнерго» «Кабельная сеть»",
    imgSrc: "./Images/partners/cabset.png",
    href: "https://rosseti-lenenergo.ru/",
  },
  {
    title: "Филиал ПАО «Россети Ленэнерго» «Северные электрические сети»",
    imgSrc: "./Images/partners/ses.jpg",
    href: "https://rosseti-lenenergo.ru/",
  },
  {
    title: "Филиал ПАО «Россети Ленэнерго» «ЭСКЛ»",
    imgSrc: "",
    href: "https://rosseti-lenenergo.ru/",
  },
  { title: "Легенда", imgSrc: "", href: "" },
  { title: "КВС", imgSrc: "", href: "" },
  { title: "«ЛСР. Недвижимость - Северо-Запад»", imgSrc: "", href: "" },
  { title: "ЯРД", imgSrc: "", href: "" },
  { title: "ПИК «Россети Ленэнерго»", imgSrc: "", href: "" },
  { title: "Электромонтаж-110", imgSrc: "", href: "" },
  { title: "ПИК «Россети Ленэнерго»", imgSrc: "", href: "" },
  { title: "«СЕЛЕНА МОНТАЖ", imgSrc: "", href: "" },
  { title: "Развитие территории", imgSrc: "", href: "" },
  { title: "МИН", imgSrc: "", href: "" },
  { title: "ЭР-БИ-АЙ-ВОСТОК", imgSrc: "", href: "" },
  { title: "Горный университет", imgSrc: "", href: "" },
  { title: "Гостиница «Спутник»", imgSrc: "", href: "" },
  { title: "СЛЭП", imgSrc: "", href: "" },
  { title: "ПЭМ", imgSrc: "", href: "" },
  { title: "СМК «Энергия»", imgSrc: "", href: "" },
];

// 5. "Легенда" застройщик,
// 6. "КВС" Застройщик,
// 7. "ЛСР, Недвижимость Северо-Запад" Застройщик,
// 8. "ЯРД" застройщик,
// 9. "ПИК" Застройщик,
// 10. "Электромонтаж-110" -электромонтажная компания,
// 11. "Селена Монтаж" - электромонтажная компания,
// 12. "Развитие территории" - электромонтажная компания,
// 13. "МИН" - электромонтажная компания,
// 14. "ЭР-БИ-АЙ-ВОСТОК" застройщик,
// 15. "Горный" - университет
// 16. "Охта СПА" - курорт,
// 17. "Гостиница "Спутник" - гостиница,
// 18. "СЛЭП" - электромонтажная компания,
// 19. "ПЭМ" - электромонтажная компания,
// 20. "СМК Энергия" - электромонтажная компания.
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <UiInnerPageTitle :title-text="sectionTitle" />
    <p class="partners-page__text">
      Партнёры и заказчики «Электромонтаж 55» знают, что это динамично
      развивающееся предприятие, способное выполнять комплексные задачи. Все,
      что делает «Электромонтаж 55», отличается высоким качеством. Сегодня свои
      объекты «Электромантож 55» доверяют:
    </p>
    <article class="partner-cards">
      <PartnerCard
        v-for="(partner, index) in partners"
        :key="index"
        :title="partner.title"
        :imgSrc="partner.imgSrc"
        :href="partner.href"
      />
    </article>
  </UiSection>
</template>
<style scoped>
.partner-cards {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 32px;
  justify-content: center;
}
.partners-page__text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  line-height: 30px;
}
</style>
