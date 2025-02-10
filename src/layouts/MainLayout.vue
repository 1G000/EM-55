<script setup>
defineOptions({
  name: "MainLayout",
});

import TheHeader from "src/components/TheHeader.vue";
import TheFooter from "src/components/TheFooter.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";
const showScrollButton = ref(false);

// Функция для прокрутки наверх
const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

// Функция для отслеживания прокрутки
const handleScroll = () => {
  if (process.client) {
    showScrollButton.value = window.scrollY > window.innerHeight;
  }
};

//слушатель события прокрутки при монтировании компонента
onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
});

// Удаляем слушатель события прокрутки перед уничтожением компонента
onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});

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

<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader :navItems="navItems" />
    <main class="main">
      <router-view />
    </main>
    <TheFooter />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        color="primary"
        icon="arrow_upward"
        @click="scrollToTop"
        v-if="showScrollButton"
      />
    </q-page-sticky>
  </q-layout>
</template>

<style scoped>
.main {
  padding-top: calc(75px + 36px);
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
}
</style>
