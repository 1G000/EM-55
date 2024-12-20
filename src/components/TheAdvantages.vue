<script setup>
import WorkerIcon from "./icons/WorkerIcon.vue";
import ShieldIcon from "./icons/ShieldIcon.vue";
import VanIcon from "./icons/VanIcon.vue";
</script>

<template>
  <section class="advantages__section">
    <div class="advantages__items">
      <div class="advantage__item">
        <span class="advantage__ico"><WorkerIcon /></span>
        <div class="advantage__text-content">
          <h4 class="advantage__title">Гарантия и качество</h4>
          <p class="advantage__text">
            Все виды электромонтажных и электроизмерительных работ
          </p>
        </div>
      </div>
      <div class="advantage__item">
        <span class="advantage__ico"><ShieldIcon /></span>
        <div class="advantage__text-content">
          <h4 class="advantage__title">Доверие и надежность</h4>
          <p class="advantage__text">
            Лицензии Северо-Западного управления Ростехнадзора и Мэрии СПб
          </p>
        </div>
      </div>
      <div class="advantage__item">
        <span class="advantage__ico"><VanIcon /></span>
        <div class="advantage__text-content">
          <h4 class="advantage__title">Автономия и мобильность</h4>
          <p class="advantage__text">
            Собственная электротехническая лаборатория и большой автопарк
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages__section {
  display: flex;
  justify-content: center;
  max-width: 1920px;
  border-radius: 8px;
  height: 135px;
  background-color: rgba(212, 171, 109, 0.102);
}

.advantages__items {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  border-radius: 8px;
  gap: 20px;
  padding: 15px;
}

.advantage__item {
  display: flex;
  gap: 30px;
  max-width: 555px;
  min-width: 300px;
  flex-grow: 1;
}

.advantage__ico {
  display: flex;
  align-items: center;
  justify-content: center;
}

.advantage__title {
  font-size: clamp(1rem, 1vw, 1.1rem);
  font-family: Montserrat-bold, serif;
  line-height: 20px;
}

.advantage__text-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.advantage__text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(0.9rem, 1vw, 1rem);
  padding-bottom: 0;
}

.advantage__ico {
  min-width: 70px;
}
@media (max-width: 1725px) {
  .advantage__item {
    max-width: 506px;
  }
}

@media (max-width: 1284px) {
  .advantage__item {
    max-width: 336px;
  }
  .advantage__item:nth-child(1) {
    max-width: 310px;
  }
  .advantages__items {
    justify-content: space-between;
    padding: 15px 25px;
  }
  .advantage__item {
    gap: 10px;
  }
}

@media screen and (max-width: 1110px) {
  .advantages__section {
    height: 205px;
  }
  /* .advantages__items {
    flex-direction: column;
    height: auto;
    width: 100%;
    max-width: 100%;
    align-items: start;
    max-width: 607px;
    padding: 20px;
    gap: 10;
  } */
  .advantages__items {
    align-items: start;
  }
  .advantage__item,
  .advantage__item:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 207px;
    min-width: 0;
  }
  .advantage__item:nth-child(3) {
    min-width: 200px;
    max-width: 247px;
  }
  .advantage__item:nth-child(1) .advantage__text-content {
    max-width: 223px;
  }
  .advantage__text-content {
    text-align: center;
  }
  .advantage__ico {
    height: 50px;
  }
}
@media (max-width: 830px) {
  .advantages__items {
    padding: 15px 10px;
  }
}
@media screen and (max-width: 767px) {
  .advantages__section {
    height: auto;
  }
  .advantages__items {
    flex-direction: column;
    height: auto;
    width: 100%;
    max-width: 100%;
    align-items: start;
    max-width: 607px;
    padding: 20px;
    gap: 10;
  }
  .advantage__item,
  .advantage__item:nth-child(1) {
    flex-direction: row;
    align-items: center;
    max-width: 100%;
  }
  .advantage__item:nth-child(3),
  .advantage__item:nth-child(1) .advantage__text-content {
    max-width: 100%;
  }
  .advantage__text-content {
    text-align: start;
  }
}
@media (max-width: 500px) {
  .advantages__items {
    gap: 30px;
  }
}
</style>
