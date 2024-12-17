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
  max-width: 550px;
  box-shadow: none;
  border: none;
  border-radius: 8px;
  background-color: rgba(212, 171, 109, 0.102);
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
  background-color: #86002a;
}

.card__text {
  min-height: 155px;
}

@media screen and (max-width: 1741px) {
  .my-card {
    max-width: 500px;
  }
}
@media screen and (max-width: 1600px) {
  .my-card {
    max-width: 430px;
  }
}

@media screen and (max-width: 970px) {
  .my-card {
    max-width: 330px;
  }
}

@media screen and (max-width: 740px) {
  .my-card {
    max-width: 300px;
  }
}

@media screen and (max-width: 430px) {
  .my-card {
    max-width: 100%;
  }
}
</style>
