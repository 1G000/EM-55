<script setup>
import MobileNavigation from "src/components/MobileNavigation.vue";
import ToolbarContactButton from "./ToolbarContactButton.vue";
import DesktopNavigationMenu from "./DesktopNavigationMenu.vue";
import LogoSvg from "./icons/LogoSvg.vue";
import RIcon from "./icons/RIcon.vue";
import { ref } from "vue";

defineOptions({
  name: "TheHeader",
});
defineProps({
  navItems: {
    type: Array,
    require: true,
  },
});

const showMobileMenu = ref(false);
</script>

<template>
  <q-header unelevated class="header">
    <div class="container">
      <div class="left-part-of-toolbar"></div>
      <div class="first-line-left"></div>
      <div class="second-line-left"></div>
      <router-link to="/" class="logo__container">
        <LogoSvg class="header-logo" />
        <RIcon class="r-icon" />
        <h1 class="logo__text">Электромонтаж 55</h1>
      </router-link>
      <div class="first-line"></div>
      <div class="second-line"></div>
      <q-toolbar class="toolbar">
        <q-toolbar-title class="nav__title">
          Оборудование для трансформаторных подстанций
        </q-toolbar-title>
        <ToolbarContactButton />
      </q-toolbar>
    </div>
    <div class="header__navbar">
      <DesktopNavigationMenu
        v-if="$q.screen.width > 600"
        :navItems="navItems"
      />
      <q-icon
        v-if="$q.screen.width <= 1230"
        name="menu"
        size="34px"
        color="primary"
        class="burger-icon"
        @click="showMobileMenu = !showMobileMenu"
      />
    </div>
    <q-drawer
      side="right"
      :breakpoint="1215"
      v-model="showMobileMenu"
      style="position: absolute; top: 0; right: 0; background-color: white"
    >
      <div class="drawer__contacts">
        <a href="tel:+78122942013" class="links text-bold"
          >+7 (812) 294-20-13</a
        >
      </div>
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
  padding: 5px 0 0 0;
}
.left-part-of-toolbar {
  background-color: var(--q-primary);
  clip-path: polygon(0% 0%, 100% 0, 73% 100%, 0% 100%);
  width: 69px;
  height: 55px;
  margin-right: -10px;
}
.logo__container {
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
}
.r-icon {
  position: absolute;
  top: 10px;
  right: 4px;
}
.navbar__logo {
  width: 100px;
  height: auto;
}

.logo__text {
  display: none;
}
.first-line,
.second-line,
.first-line-left,
.second-line-left {
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
.second-line-left {
  width: 12px;
  background-color: var(--q-secondary);
}
.second-line-left {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
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
.header__navbar {
  display: flex;
  justify-content: center;
  align-content: center;
}
.nav__title {
  font-family: Montserrat-regular, serif;
  color: var(--color-white);
  font-size: clamp(0.8rem, 1.7vw, 1rem);
  font-weight: normal;
  margin-right: 10px;
  text-transform: none;
}

.burger-icon {
  cursor: pointer;
  background: none;
  padding: 2px 4px;
  border-radius: 8px;
  color: var(--q-accent);
  background-color: transparent;
  margin-right: 14px;
  margin-top: -4px;
}
.close-icon-wrapper {
  display: flex;
  justify-content: end;
}
.close-cross {
  cursor: pointer;
  color: var(--q-primary);
  padding: 10px 14px 18px 14px;
  display: flex;
  justify-content: end;
  width: 40px;
  height: 40px;
}
.drawer__contacts {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--q-primary);
  height: 55px;
  margin-top: 13px;
  font-size: clamp(1rem, 1.7vw, 1.3rem);
}
.links {
  color: var(--q-accent);
  font-size: 1.2rem;
  font-family: Montserrat-regular, serif;
  font-style: bold;
  line-height: 17.07px;
  text-transform: none;
  transition: 0.3s linear;
}
@media (max-width: 1244px) {
  .toolbar {
    justify-content: end;
  }
  .nav__title {
    margin-right: auto;
    max-width: 400px;
    text-wrap: balance;
  }
}
@media (max-width: 1230px) {
  .header__navbar {
    justify-content: space-between;
  }
}

@media (max-width: 600px) {
  .nav__title {
    display: none;
  }
}
@media (max-width: 370px) {
  .header-logo {
    width: 120px;
    height: auto;
  }
  .container {
    padding-top: 10px;
  }
  .r-icon {
    top: 3px;
    right: 0px;
  }
}
</style>
