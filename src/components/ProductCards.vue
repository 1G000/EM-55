<script setup>
import ProductCard from "./ProductCard.vue";
import UiSection from "./UiSection.vue";
import UiSectionTitle from "./UiSectionTitle.vue";
import { ref } from "vue";

const typeOfSection = ref("production");
const sectionTitle = "Продукция";
const production = [
  {
    title: "БКТП/БРТП в бетонной оболочке",
    imgSrc: "./Images/Production/product-1.webp",
  },

  {
    title: "КТП внутренней установки",
    imgSrc: "./Images/Production/product-3.webp",
  },
  {
    title: "КТПН в металлической оболочке",
    imgSrc: "./Images/Production/product-2.webp",
  },
  {
    title: "Низковольтные комплектные устройства",
    imgSrc: "./Images/Production/product-4.webp",
  },
];
</script>

<template>
  <UiSection :margin="`0 20px`">
    <UiSectionTitle :title-text="sectionTitle" />
    <div class="card__container">
      <ProductCard
        v-for="(product, index) in production"
        :key="index"
        :product="product"
        :type="typeOfSection"
      />
    </div>
  </UiSection>
</template>



<style scoped>
.card__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 42px;
}
@media (max-width: 1200px) {
  .card__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 60px;
  }
}
@media (max-width: 1100px) {
  .card__container {
    padding: 0 80px 42px;
  }
}
@media (max-width: 1000px) {
  .card__container {
    padding: 0 40px 42px;
  }
}
@media (max-width: 768px) {
  .card__container {
    padding: 0 0 42px;
  }
}
@media (max-width: 460px) {
  .card__container {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 80px;
  }
}
</style>
