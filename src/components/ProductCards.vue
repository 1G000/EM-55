<template>
  <h2 class="heading__two">Продукция</h2>
  <div class="q-pa-md row items-center q-gutter-md container">
    <ProductCard
      v-for="(product, index) in production"
      :key="index"
      :product="product"
      :type="typeOfSection"
    />
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import { ref } from "vue";

const typeOfSection = ref("production");

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

<style scoped>
@media (max-width: 1200px) {
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 60px;
    padding: 0 150px;
  }
}
@media (max-width: 1100px) {
  .container {
    padding: 0 80px;
  }
}
@media (max-width: 1000px) {
  .container {
    padding: 0 40px;
  }
}
@media (max-width: 768px) {
  .container {
    padding: 0;
  }
}
@media (max-width: 376px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
