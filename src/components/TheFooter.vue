<script setup></script>

<template>
  <footer class="footer">
    <q-avatar square class="footer__logo">
      <img width="217px" height="103px" src="../assets/logo-white.png" />
    </q-avatar>

    <q-list dense padding class="flex text-white footer__content-top">
      <q-item clickable v-ripple to="/about">
        <q-item-section class="footer__content-top-item">
          О компании
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/history">
        <q-item-section class="footer__content-top-item">
          История
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section class="footer__content-top-item">
          Продукция
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section class="footer__content-top-item">
          Услуги
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section class="footer__content-top-item">
          Деятельность
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section class="footer__content-top-item">
          Вакансии
        </q-item-section>
      </q-item>
    </q-list>

    <div class="flex text-white footer__content-bottom">
      <q-item-section class="footer__company-name" align="center"
        >(с) Общество с ограниченной ответственностью «ЭЛЕКТРОМОНТАЖ
        55»</q-item-section
      >
      <q-item-section class="footer__privacy" align="center"
        >Политика конфиденциальности</q-item-section
      >
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--q-primary);
  gap: 20px;
  padding: 20px 40px 40px 40px;
  max-width: 1920px;
  justify-content: end;
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: auto auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
.footer__logo {
  width: 217px;
  height: 103px;
  grid-row: span 2;
}

.footer__content {
  align-items: center;
}
.footer__content-top {
  font-family: Montserrat-regular, serif;
  justify-content: space-around;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 500;
  line-height: 17.07px;
}
.footer__content-bottom {
  font-family: Montserrat-regular, serif;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  align-items: flex-start;
  margin-left: 100px;
  gap: 80px;
}

.footer__content-bottom .q-item__section {
  color: var(--footer-bottom-text-color);
  font-size: 0.9rem;
  width: 550px;
}

.footer__privacy {
  text-align: start;
  cursor: pointer;
  text-decoration: underline;
  transition: 0.3s linear;
}
.footer__content-top-item {
  color: white;
  transition: 0.3s linear;
}
@media (hover: hover) {
  .footer__privacy:hover {
    color: var(--q-accent);
  }
  .footer__content-top-item:hover {
    color: var(--q-accent);
  }
}

@media (max-width: 1340px) {
  .footer {
    grid-template-columns: 1fr 4fr;
  }
}
@media (max-width: 1000px) {
  .footer {
    grid-template-columns: 1fr 1fr;
  }
  .footer__content-bottom {
    grid-column: span 2;
    gap: 0;
    align-items: center;
  }
  .footer__content-bottom,
  .footer__content-top {
    flex-direction: column;
    margin-left: 0px;
  }
  .footer__content-bottom .q-item__section {
    width: auto;
  }
}
@media (max-width: 500px) {
  .footer {
    padding: 20px 20px 40px 20px;
    gap: 0;
  }
}
@media (max-width: 400px) {
  .footer__logo {
    width: 132px;
    height: auto;
  }
  .footer__content-bottom .q-item__section {
    width: 250px;
  }
}
/* @media (max-width: 360px) {
  .footer__logo {
    width: 140px;
    height: auto;
  }
} */
</style>
