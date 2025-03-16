<script setup>
import ProductCard from "./ProductCard.vue";
import UiSection from "./UiSection.vue";
import UiSectionTitle from "./UiSectionTitle.vue";

const sectionTitle = "Продукция";
const production = [
  {
    title: "БКТП/БРТП в бетонной оболочке",
    imgSrc: "./Images/Production/product-1.png",
    href: "",
  },

  {
    title: "КТП внутренней установки",
    imgSrc: "./Images/Production/product-3.png",
    href: "",
  },
  {
    title: "КТПН в металлической оболочке",
    imgSrc: "./Images/Production/product-2.png",
    href: "",
  },
  {
    title: "Низковольтные комплектные устройства",
    imgSrc: "./Images/Production/product-4.png",
    href: "",
  },
];
</script>

<template>
  <UiSection :margin="`0 20px`" id="production">
    <UiSectionTitle :title-text="sectionTitle" />
    <div class="card__container">
      <ProductCard
        v-for="(product, index) in production"
        :key="index"
        :product="product"
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
    padding: 0 0 0px;
  }
}
@media (max-width: 543px) {
  .card__container {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 42px;
  }
}
</style>
