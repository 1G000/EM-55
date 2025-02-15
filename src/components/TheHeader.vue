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
          <div class="header__telegram">
            <svg
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.02668 17.8491C8.3116 17.8491 8.43317 17.5943 8.18654 16.9516L6.08398 10.4204L22.2688 1.35754"
                fill="#D4AC67"
              />
              <path
                d="M9.02734 17.8491C9.5791 17.8491 9.82279 17.611 10.1309 17.3284L13.0735 14.6276L9.4029 12.5383"
                fill="#BE9145"
              />
              <path
                d="M9.40215 12.5388L18.2964 18.7412C19.3115 19.2698 20.0438 18.996 20.2967 17.8519L23.9172 1.74863C24.2878 0.345979 23.3507 -0.290422 22.3796 0.125686L1.12049 7.86301C-0.330623 8.41244 -0.321979 9.17661 0.856018 9.51703L6.31159 11.1243L18.9418 3.60332C19.5381 3.26204 20.0854 3.44535 19.6363 3.82171"
                fill="#E2C490"
              />
            </svg>
          </div>
          <ToolbarContactButton />
        </div>
      </q-toolbar>
    </div>
    <div class="header__navbar shadow-1">
      <DesktopNavigationMenu v-if="$q.screen.width > 767" :navItems="navItems" />
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
.header__telegram {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--q-accent);
  border-radius: 8px;
  padding: 9px 17px 9px 13px;
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
@media (max-width: 390px) {
  .tel-wrapper {
    gap: 10px;
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
