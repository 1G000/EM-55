<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <div class="logo__container">
        <img src="../assets/logo.png" class="navbar__logo" />
      </div>
      <div class="firstline"></div>
      <div class="secondline"></div>
      <q-toolbar class="toolbar">
        <q-toolbar-title class="nav__title">
          Оборудование для<br />
          трансформаторных подстанций
        </q-toolbar-title>

        <div class="navigation">
          <div v-for="(item, index) in navItems" :key="index">
            <template v-if="item.secondLevel">
              <q-btn-dropdown :label="item.label">
                <q-list>
                  <q-item
                    class="dropdown"
                    v-for="(subitem, subIndex) in item.secondLevelItems"
                    :key="subIndex"
                  >
                    <q-btn class="dropdown__item">{{ subitem }}</q-btn>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </template>
            <template v-else>
              <q-btn :label="item.label" />
            </template>
          </div>
        </div>

        <div class="nav__phone">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7291 12.2598L14.1891 11.9698C13.8904 11.9347 13.5877 11.9678 13.3036 12.0665C13.0196 12.1652 12.7616 12.327 12.5491 12.5398L10.7091 14.3798C7.87046 12.9357 5.56313 10.6284 4.11906 7.78977L5.96906 5.93977C6.39906 5.50977 6.60906 4.90977 6.53906 4.29977L6.24906 1.77977C6.19258 1.29186 5.95853 0.841791 5.59153 0.515361C5.22452 0.188932 4.75023 0.00896555 4.25906 0.0097683H2.52906C1.39906 0.0097683 0.459064 0.949768 0.529064 2.07977C1.05906 10.6198 7.88906 17.4398 16.4191 17.9698C17.5491 18.0398 18.4891 17.0998 18.4891 15.9698V14.2398C18.4991 13.2298 17.7391 12.3798 16.7291 12.2598Z"
              fill="#810225"
            /></svg
          ><a>8 (812) 294–20–13</a>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: "MainLayout",
});

import { ref, onMounted } from "vue";
const navItems = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("./navitems.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    navItems.value = (await response.json()).navItems;
  } catch (error) {
    console.error("Error fetching navItems:", error);
    navItems.value = [];
  }
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  max-width: 1440px;
  margin: 0 auto;
}

.logo__container {
  width: 200px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: right;
}

.firstline {
  width: 12px;
  height: 50px;
  background-color: #e5c696;
  transform: skew(-17deg, 0deg);
}

.secondline {
  width: 27px;
  height: 50px;
  background-color: #dba572;
  transform: skew(-17deg, 0deg);
}

.toolbar {
  display: flex;
  justify-content: space-between;
  background-color: #830024;
  clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%);
  margin-left: -10px;
  height: 50px;
  padding-left: 30px;
  padding-right: 0px;
}

.navbar__logo {
  width: 130px;
  height: 70px;
}

.q-toolbar__title {
  flex: none;
  width: 240px;
  text-transform: uppercase;
}

.nav__title {
  color: white;
  font-size: 12px;
}

.navigation {
  display: flex;
}

button {
  font-size: 12px;
  width: 100%;
}

button:hover {
  color: #e5c696;
}

button::before {
  box-shadow: none;
}

.nav__phone {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #dba572;
  height: 100%;
  width: 190px;
  color: #830024;
}

.dropdown {
  background-color: rgb(131, 0, 36);
  color: white;
  padding: 10px auto;
}

.q-item {
  padding: 0;
  border-radius: 0;
}
</style>
