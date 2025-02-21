<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import PartnerCard from "src/components/PartnerCard.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import { customers, dilers, suppliers } from "src/data/partners";
const sectionTitle = "Наши партнёры";
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
    <h2 class="second__title">«Электромонтаж 55» является дилером:</h2>
    <article class="partner-cards">
      <PartnerCard
        v-for="(diler, index) in dilers"
        :key="index"
        :title="diler.title"
        :imgSrc="diler.imgSrc"
        :href="diler.href"
        :sertHref="diler.sertHref"
      />
    </article>
    <h2 class="second__title">Нашими заказчиками являются:</h2>
    <article class="partner-cards">
      <PartnerCard
        v-for="(costumer, index) in customers"
        :key="index"
        :title="costumer.title"
        :imgSrc="costumer.imgSrc"
        :href="costumer.href"
      />
    </article>
    <h2 class="second__title">Наши поставщики:</h2>
    <article class="partner-cards">
      <PartnerCard
        v-for="(supplier, index) in suppliers"
        :key="index"
        :title="supplier.title"
        :imgSrc="supplier.imgSrc"
        :href="supplier.href"
      />
    </article>
  </UiSection>
</template>
<style scoped>
.partner-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 20px;
  justify-content: center;
}

.partners-page__text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  line-height: 30px;
}
.second__title {
  align-self: flex-start;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.3rem, 2.3vw, 1.7rem);
  line-height: 1em;
}

@media (max-width: 560px) {
  .partner-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    justify-items: center;
  }
}
</style>
