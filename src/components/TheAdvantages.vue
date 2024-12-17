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
            Выполняем все виды электромонтажных и электроизмерительных работ
          </p>
        </div>
      </div>
      <div class="advantage__item">
        <span class="advantage__ico"><ShieldIcon /></span>
        <div class="advantage__text-content">
          <h4 class="advantage__title">Доверие и надежность</h4>
          <p class="advantage__text">
            Имеем лицензии Мэрии Санкт-Петербурга и Северо-Западного управления
            Ростехнадзора
          </p>
        </div>
      </div>
      <div class="advantage__item">
        <span class="advantage__ico"><VanIcon /></span>
        <div class="advantage__text-content">
          <h4 class="advantage__title">Автономия и мобильность</h4>
          <p class="advantage__text">
            Имеем собственную электротехническую лабораторию и большой автопарк
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
  background-color: rgba(212, 171, 109, 0.102);
}

.advantages__items {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  border-radius: 8px;
  gap: 10px;
}

.advantage__item {
  display: flex;
  gap: 30px;
  padding: 30px 20px;
  max-width: 560px;
  min-width: 300px;
  flex-grow: 1;
}

.advantage__ico {
  display: flex;
  align-items: center;
  justify-content: center;
}

.advantage__title {
  font-size: clamp(1.1rem, 1.4vw, 1.2rem);
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
  font-size: clamp(0.9rem, 1.4vw, 1rem);
}

.advantage__ico {
  min-width: 70px;
}

@media (max-width: 1613px) {
  .advantage__item {
    max-width: 443px;
    padding: 30px 15px;
    gap: 20px;
  }
}
@media (max-width: 1350px) {
  .advantage__item {
    max-width: 391px;
    padding: 30px 0px;
  }
}
@media (max-width: 1260px) {
  .advantage__item:nth-child(2) {
    max-width: 324px;
  }
}
@media (max-width: 1260px) {
  .advantages__items {
    gap: 40px;
  }
  .advantage__item:nth-child(3) {
    max-width: 353px;
  }
  .advantage__item:nth-child(1) {
    max-width: 317px;
  }
}
@media screen and (max-width: 1148px) {
  .advantages__items {
    flex-direction: column;
    height: auto;
    width: 100%;
    max-width: 100%;
    align-items: start;
    max-width: 738px;
    padding: 20px;
    gap: 0;
  }

  .advantage__item,
  .advantage__item:nth-child(3),
  .advantage__item:nth-child(1),
  .advantage__item:nth-child(2) {
    max-width: 100%;
  }
}
@media (max-width: 360px) {
  .advantage__item {
    min-width: 0;
    padding: 10px 0px;
  }
}
</style>
