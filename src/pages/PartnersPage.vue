<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import PartnerCard from "src/components/PartnerCard.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import { partners } from "src/data/partners";
const sectionTitle = "Наши партнёры";

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
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <p class="partners-page__text">
      Партнёры и заказчики «Электромонтаж 55» знают, что это динамично
      развивающееся предприятие, способное выполнять комплексные задачи. Все,
      что делает «Электромонтаж 55», отличается высоким качеством.
    </p>
    <p class="partners-page__text">
      Сегодня свои объекты «Электромонтаж 55» доверяют:
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
