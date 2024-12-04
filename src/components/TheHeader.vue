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
import DesktopNavigationMenu from "./DesktopNavigationMenu.vue";
import { ref } from "vue";

const showMobileMenu = ref(false);
</script>

<template>
  <q-header elevated class="header">
    <div class="container">
      <div class="logo__container">
        <img src="../assets/logo.png" class="navbar__logo" />
      </div>
      <div class="first-line"></div>
      <div class="second-line"></div>
      <q-toolbar class="toolbar">
        <q-toolbar-title v-if="$q.screen.width > 1540" class="nav__title">
          Оборудование для<br />
          трансформаторных подстанций
        </q-toolbar-title>
        <DesktopNavigationMenu
          v-if="$q.screen.width > 1230"
          :navItems="navItems"
        />
        <ToolbarContactButton />
        <!-- Кнопка бургера -->
        <q-icon
          v-if="$q.screen.width < 1230"
          name="menu"
          size="32px"
          class="burger-icon"
          @click="showMobileMenu = !showMobileMenu"
        />
      </q-toolbar>
      <q-drawer
        side="right"
        :breakpoint="1200"
        v-model="showMobileMenu"
        style="
          position: absolute;
          top: 0;
          right: 0;
          background-color: #830024;
          color: white;
        "
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
  padding: 10px;
}
.logo__container {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.first-line,
.second-line {
  width: 12px;
  height: 55px;
  flex-shrink: 0;
  background-color: #e5c696;
  transform: skew(-17deg, 0deg);
}
.second-line {
  width: 14px;
  background-color: var(--q-secondary);
}

.toolbar {
  display: flex;
  justify-content: space-between;
  background-color: #830024;
  clip-path: polygon(17px 0, 100% 0, 100% 100%, 0 100%);
  height: 55px;
  padding-left: 2px;
  padding-right: 0;
  margin-left: -10px;
}

.navbar__logo {
  width: 130px;
  height: 70px;
}

.q-toolbar__title {
  flex: none;
  padding-left: 24px;
  text-transform: uppercase;
}

.nav__title {
  color: white;
  font-size: 10px;
}

.burger-icon {
  cursor: pointer;
  background: none;
  padding: 10px;
  color: #dba572;
}
.close-icon-wrapper {
  display: flex;
  justify-content: end;
}
.close-cross {
  cursor: pointer;
  color: #dba572;
  padding: 30px 16px;
  display: flex;
  justify-content: end;
  width: 32px;
  height: 32px;
}
</style>
