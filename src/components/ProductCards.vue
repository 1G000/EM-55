<template>
  <h2 class="heading__two">Продукция</h2>
  <div class="q-pa-md row items-center q-gutter-md container">
    <ProductCard
      v-for="(product, index) in production"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";

const production = [
  {
    title: "БКТП/БРТП в бетонной оболочке",
    imgSrc: "./Images/Production/product-1.webp",
  },
  {
    title: "КТПН в металлической оболочке",
    imgSrc: "./Images/Production/product-2.webp",
  },
  {
    title: "КТП внутренней установки",
    imgSrc: "./Images/Production/product-3.webp",
  },
  {
    title: "Низковольтные комплектные устройства",
    imgSrc: "./Images/Production/product-4.webp",
  },
];
</script>

<style scoped>
@media screen and (max-width: 1440px) {
  .my-card {
    max-width: 300px;
  }
}

@media screen and (max-width: 968px) {
  .container {
    justify-content: center;
    align-self: center;
  }
}

@media screen and (max-width: 430px) {
  .my-card {
    max-width: 320px;
  }
}
</style>
