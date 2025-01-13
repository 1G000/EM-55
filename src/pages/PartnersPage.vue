<script setup>
import UiSection from "../components/UiSection.vue";
import UiInnerPageTitle from "src/components/UiInnerPageTitle.vue";
import PartnerCard from "src/components/PartnerCard.vue";

const sectionTitle = "Наши партнёры";
const partners = [
  { title: "ПАО 'Россети Ленэнерго'", imgSrc: "./Images/partners/rsle.png" },
  {
    title: "филиал ПАО 'Россети Ленэнерго' 'Кабельная сеть'",
    imgSrc: "./Images/partners/cabset.png",
  },
  {
    title: "филиал ПАО 'Россети Ленэнерго' 'Северные электрические сети'",
    imgSrc: "./Images/partners/ses.jpg",
  },
  { title: "филиал ПАО 'Россети Ленэнерго' 'ЭСКЛ'", imgSrc: "" },
  { title: "Легенда", imgSrc: "" },
  { title: "КВС", imgSrc: "" },
  { title: "ЛСР. Недвижимость Северо-Запад", imgSrc: "" },
  { title: "ЯРД", imgSrc: "" },
  { title: "ПИК 'Россети Ленэнерго'", imgSrc: "" },
  { title: "Электромонтаж-110", imgSrc: "" },
  { title: "Селена Монтаж", imgSrc: "" },
  { title: "Развитие территории", imgSrc: "" },
  { title: "МИН", imgSrc: "" },
  { title: "ЭР-БИ-АЙ-ВОСТОК", imgSrc: "" },
  { title: "Горный университет", imgSrc: "" },
  { title: "Гостиница 'Спутник'", imgSrc: "" },
  { title: "СЛЭП", imgSrc: "" },
  { title: "ПЭМ", imgSrc: "" },
  { title: "СМК Энергия", imgSrc: "" },
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
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '64px 20px 0 20px'"
  >
    <UiInnerPageTitle :title-text="sectionTitle" />
    <p>
      Партнёры и заказчики «Электромонтаж-55» знают, что это динамично
      развивающееся предприятие, способное выполнять комплексные задачи. Все,
      что делает «Электромонтаж-55», отличается высоким качеством. Сегодня свои
      объекты «Электромантож-55» доверяют:
    </p>
    <PartnerCard
      v-for="(partner, index) in partners"
      :key="index"
      :title="partner.title"
      :imgSrc="partner.imgSrc"
    />
  </UiSection>
</template>
