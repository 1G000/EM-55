<script setup></script>

<template>
  <footer class="footer">
    <q-avatar square class="footer__logo">
      <img width="217px" height="103px" src="../assets/logo-white.png" />
    </q-avatar>

    <div class="footer__content">
      <q-list dense padding class="flex text-white">
        <q-item clickable v-ripple>
          <q-item-section> О компании </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section> Сопровождение </q-item-section>
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

  padding: 20px;
  padding-bottom: 62px;
  justify-content: space-between;
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
}
.footer__content-bottom {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
@media (max-width: 1200px) {
}
</style>
