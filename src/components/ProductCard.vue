<script setup>
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
const buttonText = "Подробнее";
const elHeight = computed(() => (props.type === "services" ? "100%" : "70px"));
const elWidth = computed(() => (props.type === "services" ? "180px" : "229px"));
const clipPathValue = computed(() =>
  props.type === "services"
    ? "polygon(16% 0, 41% 20%, 51% 61%,100% 93%,100% 100%,0 100%,0 100%,0 100%,0 100%,0 0)"
    : "none"
);
const ratio = computed(() => (props.type === "services" ? 1 / 1 : 4 / 3));
</script>

<template>
  <q-responsive :ratio="ratio" class="col">
    <q-card class="q-ma-none shadow-0 my-card">
      <q-img :src="product.imgSrc" :lazy-src="product.imgSrc">
        <div class="absolute-bottom text__content">
          <div class="card__text">{{ product.title }}</div>
        </div>
      </q-img>
      <q-card-actions>
        <q-btn class="card__btn" flat color="primary" label="Подробнее" />
      </q-card-actions>
    </q-card>
  </q-responsive>
</template>

<style scoped>
.my-card {
  max-width: 400px;
  border-radius: 8px;
}

.q-card__actions {
  background-color: rgba(212, 171, 109, 0.102);
}

.card__btn:hover {
  color: var(--color-black);
}

.card__text {
  max-width: v-bind(elWidth);
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.8rem, 1vw, 1rem);
  line-height: 15.2px;
  background: #0e0d0d99;
  background: linear-gradient(79.79deg, #d4ad6f 11.83%, #ffffff 105.26%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card__btn {
  font-family: Montserrat-bold, serif;
  font-size: 16px;
}

.text__content {
  /* min-height: 130px; */
  height: v-bind(elHeight);
  display: flex;
  align-items: end;
  max-width: 100%;
  background-color: #0e0d0d99;
  clip-path: v-bind(clipPathValue);
}

:deep(.q-img__container) {
  overflow: hidden;
}

@media screen and (max-width: 1440px) {
  .my-card {
    max-width: 300px;
  }
}
</style>
