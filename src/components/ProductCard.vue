<script setup>
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-responsive :ratio="1 / 1" class="col product-card">
    <q-card
      class="q-ma-none shadow-0 my-card cursor-pointer column"
      flat
      clickable
    >
      <q-img class="col" :src="product.imgSrc" :lazy-src="product.imgSrc" />

      <q-card-section class="card__text product-card__text-wrapper q-py-md">
        <q-item-section class="card__text">{{ product.title }}</q-item-section>
      </q-card-section>
    </q-card>
  </q-responsive>
</template>

<style scoped>
.my-card {
  max-width: 400px;
  border-radius: 8px;
  transition: 0.3s linear;
}
.product-card {
  border-radius: 8px;
  transition: 0.3s linear;
}

.product-card__text-wrapper {
  background-color: var(--background-light-accent);
  min-height: 76px;
  display: flex;
  align-items: center;
}

.card__text {
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.8rem, 1vw, 1rem);
  line-height: 15.2px;
  color: var(--color-black);
  text-transform: uppercase;
  transition: 0.3s linear;
}

.card__btn {
  font-family: Montserrat-bold, serif;
  font-size: 16px;
}

.text__content {
  min-height: 130px;
  height: 70px;
  display: flex;
  align-items: end;
  max-width: 100%;
  background-color: #0e0d0d99;
}

:deep(.q-img__container) {
  overflow: hidden;
}
@media (hover: hover) {
  .product-card:hover {
    -webkit-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
    box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
  }
  .product-card:hover .card__text {
    color: var(--q-primary);
  }
}
@media screen and (max-width: 1440px) {
  .my-card {
    max-width: 300px;
  }
}
</style>
