<script setup>
defineOptions({
  name: "MainLayout",
});

import TheHeader from "src/components/TheHeader.vue";
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

<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader :navItems="navItems" />
    <main class="main">
      <router-view />
    </main>
  </q-layout>
</template>

<style scoped>
.main {
  padding-top: 75px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
}
</style>
