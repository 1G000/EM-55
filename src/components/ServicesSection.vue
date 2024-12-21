<script setup>
import ProductCard from "./ProductCard.vue";
import UiSection from "./UiSection.vue";
import UiSectionTitle from "./UiSectionTitle.vue";

import { ref } from "vue";

const typeOfSection = ref("services");
const sectionTitle = "Услуги";
const services = [
  {
    title: "Ремонт кабельных линий напряжением 0,4/6/10 кВт",
    imgSrc: "./Images/Services/1.webp",
  },
  {
    title:
      "Поиск места повреждения на кабельных линиях напряжением 0,4/6/10 кВт",
    imgSrc: "./Images/Services/2.webp",
  },
  {
    title: "Электромонтажные работы любой сложности",
    imgSrc: "./Images/Services/3.webp",
  },
  {
    title: "Восстановление нарушенного благоустройства",
    imgSrc: "./Images/Services/4.webp",
  },
];
</script>
<template>
  <UiSection :margin="`0 20px`">
    <UiSectionTitle :title-text="sectionTitle" />
    <div class="service-card__container">
      <ProductCard
        v-for="(service, index) in services"
        :key="index"
        :product="service"
        :type="typeOfSection"
      />
    </div>
  </UiSection>
</template>



<style scoped>
.service-card__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 56px;
}

@media (max-width: 1200px) {
  .service-card__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 80px;
    padding: 0 150px;
  }
}
@media (max-width: 1100px) {
  .service-card__container {
    padding: 0 80px;
  }
}
@media (max-width: 1000px) {
  .service-card__container {
    padding: 0 40px;
  }
}
@media (max-width: 768px) {
  .service-card__container {
    padding: 0;
  }
}
@media (max-width: 460px) {
  .service-card__container {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 100px;
  }
}
</style>
