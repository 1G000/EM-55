<template>
  <h2 class="heading__two">Услуги</h2>
  <div class="q-pa-md row items-center q-gutter-md container_services">
    <q-card
      v-for="(service, index) in services"
      :key="index"
      class="my-card col-md-4 col-sm-6 col-xs-12"
    >
      <q-img :src="service.imgSrc" :lazy-src="service.imgSrc">
        <div
          class="absolute-bottom text-white bg-dark-80 text-shadow-1 text__content"
        >
          <div class="text-h6">{{ service.title }}</div>
        </div>
      </q-img>
      <q-card-actions>
        <q-btn class="card__btn" flat label="Подробнее" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
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
.container_services {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding-left: 0px;
  padding-right: 0px;
}

.my-card {
  width: 100%;
  max-width: 400px;
  box-shadow: none;
  border-radius: 8px;
}

.q-card__actions {
  border-bottom: 1px solid rgb(128, 128, 128, 0.3) !important;
  border-left: 1px solid rgb(128, 128, 128, 0.3) !important;
  border-right: 1px solid rgb(128, 128, 128, 0.3) !important;
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

@media screen and (max-width: 968px) {
  .container {
    justify-content: center;
    align-self: center;
  }
}

@media screen and (max-width: 430px) {
  .my-card {
    max-width: 320px;
  }
}
</style>
