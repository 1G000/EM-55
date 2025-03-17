<script setup>
import UiSection from "./UiSection.vue";
</script>

<template>
  <UiSection class="promo-section" :margin="`20px`">
    <div class="promo__section-items">
      <div class="promo__section-item">
        <div class="left__side">
          <q-img
            src="/src/assets/service.png"
            class="service__img"
            style="height: 250px"
          ></q-img>
        </div>
        <div class="right__side">
          <p>
            Осуществляем все функции сервисного центра, изложенные в
            <b>СТО ПАО «Россети»</b>, и выполняем гарантийное и постгарантийное
            обслуживание всей выпускаемой продукции
          </p>
          <q-btn
            class="hide__btn"
            color="primary"
            flat
            dense
            @click="toggleExpand(index)"
          >
            <span>Подробнее</span>
          </q-btn>
        </div>
      </div>
      <div class="promo__section-item">
        <div class="left__side-partner">
          <q-img
            src="/public/Images/partners/ZETO.png"
            class="service__img"
            style="height: 250px"
            :ratio="1"
          ></q-img>
        </div>
        <div class="right__side-partner">
          <p>
            Являемся официальным дилером
            <a href="https://zeto.ru/" target="_blank"
              ><span class="bold-text">ЗАО «ЗЭТО»</span></a
            >
            и имеем эксклюзивное право по обеспечению сбыта выключателей
            нагрузки серии ВНМ-10
          </p>

          <q-btn class="hide__btn" flat dense @click="toggleExpand(index)">
            <span>Посмотреть сертификат</span>
          </q-btn>
        </div>
      </div>
    </div>
  </UiSection>
</template>

<style scoped>
.promo-section {
  display: flex;
  justify-content: center;
  border-radius: 8px;
  /* background-color: var(--background-light-accent); */
}

.promo__section-items {
  display: flex;
  align-items: stretch;
  width: 100%;
  gap: 20px;
}

.promo__section-item:first-child {
  display: flex;
  border: 1px solid var(--background-light-accent);
  background-color: var(--background-light-accent);
  border-radius: 8px;
  width: 50%;
  padding: 15px;
  gap: 30px;
}

.promo__section-item {
  display: flex;
  /* border: 2px solid rgb(7, 119, 172); */
  background-color: rgb(7, 119, 172);
  border-radius: 8px;
  width: 50%;
  padding: 15px;
  gap: 30px;
}

.left__side {
  width: 50%;
  display: flex;
  justify-content: flex-start;
}

.left__side-partner {
  width: 30%;
  display: flex;
  justify-content: flex-start;
}

.right__side {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.2rem, 1.1vw, 1.1rem);
}

.right__side-partner {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.2rem, 1.1vw, 1.1rem);
  color: white;
  padding-bottom: 0;
}

.service__img >>> .q-img__image {
  object-fit: contain !important;
}

.q-btn {
  border-radius: 8px;
  border: 1px solid var(--q-primary);
  align-self: end;
  padding: 5px 15px;
}

.hide__btn-blue {
  border: 1px solid rgb(7, 119, 172);
}

.bold-text {
  color: var(--q-primary);
  font-weight: 700;
}
.bold-text:hover {
  color: rgb(7, 119, 172);
  cursor: pointer;
}

.hide__btn-blue span {
  color: rgb(7, 119, 172);
}

.hide__btn span,
.hide__btn-blue span,
.hide__btn,
.hide__btn-blue {
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.hide__btn-blue span,
.hide__btn span {
  font-family: Montserrat-bold, serif;
  font-size: 14px;
  line-height: 1em;
}

@media (hover: hover) {
  .hide__btn-blue:hover {
    background-color: rgb(7, 119, 172);
  }
  .hide__btn-blue:hover span {
    color: white;
  }

  .hide__btn:hover {
    background-color: var(--q-primary);
  }

  .hide__btn:hover span {
    color: var(--q-secondary);
  }
}
</style>
