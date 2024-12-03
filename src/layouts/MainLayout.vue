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
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
</style>
