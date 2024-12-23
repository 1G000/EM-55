<script setup></script>

<template>
  <footer class="footer">
    <q-avatar square class="footer__logo">
      <img width="217px" height="103px" src="../assets/logo-white.png" />
    </q-avatar>

    <div class="footer__content">
      <q-list dense padding class="flex text-white footer__content-top">
        <q-item clickable v-ripple>
          <q-item-section> О компании </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section> Продукция </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section> Услуги </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Деятельность </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section> Вакансии </q-item-section>
        </q-item>
      </q-list>

      <div class="flex text-white footer__content-bottom">
        <q-item-section align="center"
          >(с) Общество с ограниченной ответственностью «ЭЛЕКТРОМОНТАЖ
          55»</q-item-section
        >
        <q-item-section align="center"
          >Политика конфиденциальности</q-item-section
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--q-primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px 80px 40px 80px;
  justify-content: space-between;
  margin-top: 100px;
}
.footer__logo {
  width: 217px;
  height: 103px;
}

.footer__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.footer__content-bottom {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: Montserrat-regular, serif;
  font-size: 16px;
}

.footer__content-bottom .q-item__section {
  color: #b4b4b4;
}

.footer__content-top {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  gap: 80px;
  font-family: Montserrat-regular, serif;
  font-size: 16px;
}

@media (max-width: 1330px) {
  .footer__content-top {
    gap: 10px;
  }
}

@media (max-width: 1060px) {
  .footer__content-top,
  .footer__content-bottom {
    font-size: 14px;
  }
  .footer {
    padding: 20px 20px 40px 20px;
  }
}

@media (max-width: 1060px) {
  .footer__content-top,
  .footer__content-bottom {
    flex-direction: column;
  }
  .footer__content {
    flex-direction: row;
    gap: 10px;
  }
  .footer__content-bottom {
    align-items: center;
    gap: 40px;
  }
  .footer__logo {
    transform: scale(0.8);
  }
}

@media (max-width: 645px) {
  .footer__content-bottom-hidden {
    display: flex;
  }
}
</style>
