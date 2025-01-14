<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-responsive :ratio="1 / 1" class="col">
    <q-card class="q-ma-none shadow-0 my-card cursor-pointer" clickable>
      <q-img :src="service.imgSrc" :lazy-src="service.imgSrc">
        <div class="absolute-bottom text__content">
          <div class="card__text">{{ service.title }}</div>
        </div>
      </q-img>
    </q-card>
  </q-responsive>
</template>

<style scoped>
.my-card {
  max-width: 400px;
  border-radius: 8px;
}

.card__text {
  max-width: 180px;
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.8rem, 1vw, 1rem);
  line-height: 15.2px;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text__content {
  min-height: 130px;
  height: 100%;
  display: flex;
  align-items: end;
  max-width: 100%;
  background-color: #0e0d0d99;
  clip-path: polygon(
    16% 0,
    41% 20%,
    51% 61%,
    100% 93%,
    100% 100%,
    0 100%,
    0 100%,
    0 100%,
    0 100%,
    0 0
  );
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
