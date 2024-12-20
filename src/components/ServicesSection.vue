<template>
  <h2 class="heading__two">Услуги</h2>
  <div class="q-pa-md row items-center q-gutter-md container">
    <ProductCard
      v-for="(service, index) in services"
      :key="index"
      :product="service"
      :type="typeOfSection"
    />
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import { ref } from "vue";

const typeOfSection = ref("services");

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
  @media (max-width: 1200px) {
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 150px;
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
}
</style>
