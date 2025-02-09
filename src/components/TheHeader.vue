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
      </router-link>
      <div class="first-line"></div>
      <div class="second-line"></div>
      <q-toolbar class="toolbar">
        <q-toolbar-title class="nav__title" v-if="$q.screen.width > 767">
          Оборудование для трансформаторных подстанций
        </q-toolbar-title>

        <div class="tel-wrapper">
          <q-toolbar-title class="tel-toolbar" v-if="$q.screen.width > 560"
            ><a href="tel:+78122942013" class="links-tel">+7 (812) 294–20–13</a
            ><a href="tel:+78122942303" class="links-tel"
              >+7 (812) 294–23–03</a
            ></q-toolbar-title
          >
          <svg
            width="64"
            height="39"
            viewBox="0 0 64 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="63"
              height="37"
              rx="7.5"
              stroke="#E5C696"
            />
            <path
              d="M27.0267 26.849C26.3116 26.849 26.4332 26.5942 26.1865 25.9515L24.084 19.4203L40.2688 10.3574"
              fill="#CCA971"
            />
            <path
              d="M27.0273 26.8479C27.5791 26.8479 27.8228 26.6097 28.1309 26.3271L31.0735 23.6263L27.4029 21.5371"
              fill="#D1B180"
            />
            <path
              d="M27.4022 21.5388L36.2964 27.7412C37.3115 28.2698 38.0438 27.996 38.2967 26.8519L41.9172 10.7486C42.2878 9.34598 41.3507 8.70958 40.3796 9.12569L19.1205 16.863C17.6694 17.4124 17.678 18.1766 18.856 18.517L24.3116 20.1243L36.9418 12.6033C37.5381 12.262 38.0854 12.4454 37.6363 12.8217"
              fill="#E5C696"
            />
          </svg>
          <ToolbarContactButton />
        </div>
      </q-toolbar>
    </div>
    <div class="header__navbar shadow-1">
      <DesktopNavigationMenu
        v-if="$q.screen.width > 767"
        :navItems="navItems"
      />
      <div class="nav__title-mobile" v-if="$q.screen.width < 767">
        Оборудование для трансформаторных подстанций
      </div>
      <q-icon
        v-if="$q.screen.width <= 1230"
        name="menu"
        size="34px"
        color="primary"
        class="burger-icon"
        @click="showMobileMenu = !showMobileMenu"
      />
    </div>
    <!-- Выплывающее меню -->
    <q-drawer
      side="right"
      :breakpoint="1240"
      v-model="showMobileMenu"
      style="position: absolute; top: 0; right: 0; background-color: white"
    >
      <div class="drawer__contacts">
        <a href="tel:+78122942013" class="links">+7 (812) 294-20-13</a>
      </div>
      <div class="close-icon-wrapper">
        <q-icon
          name="close"
          size="34px"
          class="close-cross"
          @click="showMobileMenu = false"
        />
      </div>
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
  padding: 5px 0px 0 0px;
}
.left-part-of-toolbar {
  background-color: var(--q-primary);
  clip-path: polygon(0% 0%, 100% 0, 73% 100%, 0% 100%);
  width: 54px;
  height: 55px;
  margin-right: -10px;
  flex-grow: 0;
  flex-shrink: 0;
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
.icon {
  align-self: center;
  transition: 0.3s linear;
}
.navbar__logo {
  width: 100px;
  height: auto;
}
.first-line,
.second-line,
.first-line-left,
.second-line-left {
  width: 8px;
  height: 55px;
  flex-shrink: 0;
  background-color: var(--q-accent);
  transform: skew(-17deg, 0deg);
}

.second-line,
.second-line-left {
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
  padding-right: 24px;
  margin-left: -9px;
}

.q-toolbar__title {
  flex: none;
  padding-left: 24px;
  text-transform: uppercase;
  font-weight: 600;
  user-select: none;
}
.tel-wrapper {
  display: flex;
  gap: 18px;
  padding: 0;
}
.tel-toolbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding-left: 0;
}
.links-tel {
  color: var(--color-white);
  font-size: 0.9rem;
  font-family: Montserrat-regular, serif;
  font-style: normal;
  line-height: normal;
  transition: 0.3s linear;
  font-weight: 500;
  padding: 0;
}

.header__navbar {
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  -webkit-box-shadow: 0px 3px 6px -2px rgba(26, 28, 30, 0.2);
  -moz-box-shadow: 0px 3px 6px -2px rgba(26, 28, 30, 0.2);
  box-shadow: 0px 3px 6px -2px rgba(26, 28, 30, 0.2);
}
.nav__title {
  font-family: Montserrat-regular, serif;
  color: var(--color-white);
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-weight: normal;
  text-transform: none;
  text-wrap: balance;
  line-height: normal;
}
.nav__title-mobile {
  color: var(--color-black);
  font-family: Montserrat-regular, serif;
  font-size: 0.8rem;
  font-weight: normal;
  text-transform: none;
  align-items: center;
  text-wrap: balance;
  max-width: 270px;
}

.burger-icon {
  cursor: pointer;
  background: none;
  padding: 2px 4px;
  border-radius: 8px;
  color: var(--q-accent);
  background-color: transparent;
  margin-top: -4px;
}
.close-icon-wrapper {
  display: flex;
  justify-content: end;
}
.close-cross {
  cursor: pointer;
  color: var(--q-primary);
  padding: 5px 18px 15px 14px;
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
    max-width: 310px;
    text-wrap: balance;
  }
}
@media (max-width: 1230px) {
  .header__navbar {
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 70px;
    gap: 30px;
  }
  .toolbar {
    padding-right: 16px;
  }
}
@media (max-width: 885px) {
  .nav__title {
    max-width: 276px;
  }
}
@media (max-width: 850px) {
  .nav__title {
    display: none;
  }
}
@media (max-width: 767px) {
  .left-part-of-toolbar {
    width: 30px;
  }
  .header__navbar {
    padding-left: 16px;
    padding-bottom: 5px;
  }
}

@media (max-width: 430px) {
  .burger-icon {
    margin-top: 0;
  }
}
@media (max-width: 458px) {
  .toolbar {
    padding-right: 16px;
  }
}
@media (hover: hover) {
  .links-tel:hover {
    color: var(--q-accent);
  }
}
@media (hover: hover) {
  .icon:hover {
    color: var(--q-accent);
    cursor: pointer;
  }
}
</style>
