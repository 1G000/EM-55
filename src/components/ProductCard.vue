<template>
  <q-card class="my-card col-md-4 col-sm-6 col-xs-12">
    <q-img :src="product.imgSrc" :lazy-src="product.imgSrc">
      <div
        class="absolute-bottom text-white bg-dark-80 text-shadow-1 text__content"
      >
        <div class="text-h6">{{ product.title }}</div>
      </div>
    </q-img>
    <q-card-actions>
      <q-btn class="card__btn" flat label="Подробнее" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.my-card {
  max-width: 400px;
  box-shadow: none;
  border-radius: 8px;
}

.q-card__actions {
  background-color: rgba(212, 171, 109, 0.102);
}

.card__btn:hover {
  color: #86002a;
}

.text-h6 {
  font-family: Montserrat-bold, serif;
  font-size: 18px;
}

.card__btn {
  font-family: Montserrat-bold, serif;
  font-size: 16px;
}

.text__content {
  min-height: 130px;
  display: flex;
  align-items: center;
}

::v-deep .q-img__container {
  overflow: hidden;
}

@media screen and (max-width: 1440px) {
  .my-card {
    max-width: 300px;
  }
}
</style>
