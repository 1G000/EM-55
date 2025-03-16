<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-responsive :ratio="1 / 1" class="col service-card">
    <q-card class="q-ma-none my-card cursor-pointer column" flat clickable>
      <q-img class="col" :src="service.imgSrc" :lazy-src="service.imgSrc" />
      <q-card-section class="card__text service-card__text-wrapper q-py-md">
        <q-item-section class="card__text">{{ service.title }}</q-item-section>
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
.service-card {
  border-radius: 8px;
  transition: 0.3s linear;
  /* box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2); */
}
.card__text {
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.8rem, 1vw, 1rem);
  line-height: 15.2px;
  color: var(--color-black);
  text-transform: uppercase;
  transition: 0.3s linear;
}
.service-card__text-wrapper {
  background-color: var(--background-light-accent);
  min-height: 76px;
  display: flex;
  align-items: center;
}

:deep(.q-img__container) {
  overflow: hidden;
}
@media (hover: hover) {
  .service-card:hover {
    -webkit-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
    box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
  }
  .service-card:hover .card__text {
    color: var(--q-primary);
  }
}
@media screen and (max-width: 1440px) {
  .my-card {
    max-width: 300px;
  }
}
</style>
