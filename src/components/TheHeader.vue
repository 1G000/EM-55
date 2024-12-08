<script setup>
defineOptions({
  name: "TheHeader",
});
defineProps({
  navItems: {
    type: Array,
    require: true,
  },
});
import MobileNavigation from "src/components/MobileNavigation.vue";
import ToolbarContactButton from "./ToolbarContactButton.vue";
import LogoIcon from "./LogoIcon.vue";
import DesktopNavigationMenu from "./DesktopNavigationMenu.vue";
import { ref } from "vue";

const showMobileMenu = ref(false);
</script>

<template>
  <q-header unelevated class="header">
    <div class="container">
      <a href="/" class="logo__container">
        <!-- <LogoIcon /> -->
        <img src="../assets/logo.png" class="navbar__logo" />
        <h1 class="logo__text">Электромонтаж 55</h1>
      </a>
      <div class="first-line"></div>
      <div class="second-line"></div>
      <q-toolbar class="toolbar">
        <q-toolbar-title
          v-if="$q.screen.width > 1450 || $q.screen.width < 1215"
          class="nav__title"
        >
          Оборудование для<br />
          трансформаторных подстанций
        </q-toolbar-title>
        <DesktopNavigationMenu
          v-if="$q.screen.width > 1215"
          :navItems="navItems"
        />
        <ToolbarContactButton />
        <!-- Кнопка бургера -->
        <q-icon
          v-if="$q.screen.width <= 1215"
          name="menu"
          size="34px"
          color="primary"
          class="burger-icon"
          @click="showMobileMenu = !showMobileMenu"
        />
      </q-toolbar>
      <q-drawer
        side="right"
        :breakpoint="1215"
        v-model="showMobileMenu"
        style="position: absolute; top: 0; right: 0; background-color: white"
      >
        <div class="close-icon-wrapper">
          <q-icon
            name="close"
            size="32px"
            class="close-cross"
            @click="showMobileMenu = false"
          />
        </div>
        <!-- Выплывающее меню -->
        <transition>
          <MobileNavigation :navItems="navItems" />
        </transition>
      </q-drawer>
    </div>
  </q-header>
</template>

<style scoped>
.header {
  background-color: rgb(255, 255, 255);
}
.container {
  display: flex;
  align-items: center;
  max-width: 1920px;
  margin: 0 auto;
  padding: 10px 0;
}
.logo__container {
  /* width: 200px; */
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -7px;
  text-decoration: none;
}

.navbar__logo {
  width: 90px;
  height: 45px;
}

.logo__text {
  font-size: 8px;
  color: var(--q-primary);
  font-weight: 600;
  line-height: 0;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin-right: 11px;
  margin-top: 3px;
}
.first-line,
.second-line {
  width: 12px;
  height: 55px;
  flex-shrink: 0;
  background-color: var(--q-accent);
  transform: skew(-17deg, 0deg);
}
.second-line {
  width: 14px;
  background-color: var(--q-secondary);
}
.first-line {
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
}
.toolbar {
  display: flex;
  justify-content: space-between;
  background-color: var(--q-primary);
  clip-path: polygon(17px 0, 100% 0, 100% 100%, 0 100%);
  height: 55px;
  padding-left: 2px;
  padding-right: 0;
  margin-left: -10px;
}

.q-toolbar__title {
  flex: none;
  padding-left: 24px;
  text-transform: uppercase;
  font-weight: 600;
  user-select: none;
}

.nav__title {
  color: white;
  font-size: 10px;
}

.burger-icon {
  cursor: pointer;
  background: none;
  padding: 2px 4px;
  border-radius: 8px;
  color: var(--q-accent);
  background-color: var(--q-accent);
  margin-right: 14px;
}
.close-icon-wrapper {
  display: flex;
  justify-content: end;
}
.close-cross {
  cursor: pointer;
  color: var(--q-primary);
  padding: 18px 14px;
  display: flex;
  justify-content: end;
  width: 40px;
  height: 40px;
}
@media (max-width: 1215px) {
  .toolbar {
    justify-content: end;
  }
}
@media (max-width: 1215px) {
  .nav__title {
    margin-right: auto;
  }
}
@media (max-width: 556px) {
  .nav__title {
    display: none;
  }
}
</style>
