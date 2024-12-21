<template>
  <q-card bordered class="my-card">
    <q-card-section class="card__section">
      <div v-html="item.icon.svg"></div>
      <h6 class="text-h6">{{ item.title }}</h6>
    </q-card-section>
    <q-separator class="line" inset />
    <q-card-section class="card__text">
      {{ item.text }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.my-card {
  max-width: 600px;
  box-shadow: none;
  border: none;
  border-radius: 8px;
  background-color: var(--background-light-accent);
}

.card__section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.card__text {
  font-family: Montserrat-regular, serif;
  font-size: 16px;
  margin: 0px;
}

.q-separator {
  background-color: var(--q-primary);
}

.card__text {
  min-height: 155px;
}
</style>
