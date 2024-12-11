<template>
  <h2 class="heading__two">Продукция</h2>
  <div class="q-pa-md row items-center q-gutter-md container">
    <q-card
      v-for="(product, index) in production"
      :key="index"
      class="my-card col-md-4 col-sm-6 col-xs-12"
    >
      <q-img :src="product.imgSrc" :lazy-src="product.imgSrc">
        <div class="absolute-bottom text-white bg-dark-80 text-shadow-1">
          <div class="text-h6">{{ product.title }}</div>
        </div>
      </q-img>
      <q-card-actions>
        <q-btn class="card__btn" flat label="Подробнее" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
const production = [
  {
    title: "БКТП/БРТП в бетонной оболочке",
    imgSrc: "/public/Images/Production/product-1.jpg",
  },
  {
    title: "КТПН в металлической оболочке",
    imgSrc: "/public/Images/Production/product-2.jpg",
  },
  {
    title: "КТП внутренней установки",
    imgSrc: "/public/Images/Production/product-3.jpg",
  },
  {
    title: "Низковольтные комплектные устройства",
    imgSrc: "/public/Images/Production/product-4.jpg",
  },
];
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  padding: 20px 0px;
}

.my-card {
  width: 100%;
  max-width: 400px;
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

@media screen and (max-width: 1440px) {
  .my-card {
    max-width: 300px;
  }
}

@media screen and (max-width: 968px) {
  .container {
    justify-content: center;
  }
}
</style>
