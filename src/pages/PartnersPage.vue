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
    href: "https://rosseti-lenenergo.ru/about/filials/kabel/",
  },
  {
    title: "Филиал ПАО «Россети Ленэнерго» «Северные электрические сети»",
    imgSrc: "./Images/partners/ses.jpg",
    href: "https://rosseti-lenenergo.ru/about/filials/severnye/",
  },
  {
    title: "Филиал ПАО «Россети Ленэнерго» «ЭСКЛ»",
    imgSrc: "./Images/partners/rsle.png",
    href: "https://rosseti-lenenergo.ru/about/filials/OAO_Energoservisnaya_kompaniya_Lenenergo/",
  },
  { title: "Легенда", imgSrc: "./Images/partners/legenda.png", href: "https://legenda-dom.ru/" },
  { title: "КВС", imgSrc: "./Images/partners/kvs.svg", href: "https://kvsspb.ru/" },
  {
    title: "«ЛСР. Недвижимость - Северо-Запад»",
    imgSrc: "./Images/partners/lsr.png",
    href: "https://www.lsr.ru/spb/",
  },
  { title: "ЯРД", imgSrc: "./Images/partners/yard.png", href: "https://yard.ru/" },
  { title: "ПИК", imgSrc: "./Images/partners/pik.png", href: "https://www.pik.ru/" },
  {
    title: "Электромонтаж-110",
    imgSrc: "./Images/partners/em110.png",
    href: "https://em-110.ru/",
  },
  { title: "СЕЛЕНА МОНТАЖ", imgSrc: "./Images/partners/selena.svg", href: "https://380-220.com/" },
  { title: "Развитие территории", imgSrc: "", href: "" },
  { title: "МИН", imgSrc: "", href: "" },
  { title: "ЭР-БИ-АЙ-ВОСТОК", imgSrc: "", href: "" },
  {
    title: "Горный университет",
    imgSrc: "./Images/partners/gorniy.png",
    href: "https://spmi.ru/",
  },
  {
    title: "Гостиница «Спутник»",
    imgSrc: "./Images/partners/sputnik.png",
    href: "https://sputnik-hotel.ru/",
  },
  { title: "СЛЭП", imgSrc: "", href: "" },
  { title: "ПЭМ", imgSrc: "./Images/partners/pem.png", href: "http://pem-spb.ru/" },
  { title: "СМК «Энергия»", imgSrc: "./Images/partners/smk.png", href: "https://smk-e.ru/" },
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
  <UiSection class="content__wrapper" :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'">
    <UiInnerPageTitle :title-text="sectionTitle" />
    <p class="partners-page__text">
      Партнёры и заказчики «Электромонтаж 55» знают, что это динамично
      развивающееся предприятие, способное выполнять комплексные задачи. Все,
      что делает «Электромонтаж 55», отличается высоким качеством. </p>
    <p class="partners-page__text">Сегодня свои
      объекты «Электромонтаж 55» доверяют:</p>

    <article class="partner-cards">
      <PartnerCard v-for="(partner, index) in partners" :key="index" :title="partner.title" :imgSrc="partner.imgSrc"
        :href="partner.href" />
    </article>

  </UiSection>
</template>
<style scoped>
.partner-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}

.partners-page__text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  line-height: 30px;
}
</style>
