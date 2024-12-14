<template>
  <h2 class="heading__two">Услуги</h2>
  <div class="q-pa-md row items-center q-gutter-md container">
    <ProductCard
      v-for="(service, index) in services"
      :key="index"
      :product="service"
    />
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";

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

<style scoped>
@media screen and (max-width: 968px) {
  .container {
    justify-content: center;
    align-self: center;
  }
}
</style>
