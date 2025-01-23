<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <q-responsive class="partner-card">
    <q-card
      class="column partner-card__accent"
      flat
      clickable
      tag="a"
      :href="href"
      target="_blank"
    >
      <img class="col image" :src="imgSrc" />
    </q-card>
  </q-responsive>
</template>

<style scoped>
.partner-card {
  width: 350px;
  height: 200px;
  border-radius: 8px;
}

.partner-card__accent {
  border-radius: 8px;
}

.image {
  object-fit: contain;
  padding: 20px;
}

.partner-card__text {
  color: var(--color-black);
  text-transform: uppercase;
}

@media (hover: hover) {
  .partner-card:hover {
    cursor: pointer;
  }
}

@media screen and (max-width: 600px) {
  .partner-card {
    width: 220px;
    height: 120px;
  }

  .image {
    padding: 0px;
  }
}
</style>
