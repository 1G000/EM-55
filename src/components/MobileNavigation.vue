<script setup>
import MobileNavigationItem from "./MobileNavigationItem.vue";
defineProps({
  navItems: {
    type: Array,
    require: true,
  },
});
</script>

<template>
  <div class="bg-white">
    <q-list>
      <q-list-item>
        <MobileNavigationItem
          v-for="item in navItems"
          :key="item.label"
          :label="item.label"
          :second-level="item.secondLevel"
          :second-level-items="item.secondLevelItems"
        />
      </q-list-item>
    </q-list>
  </div>
</template>

<style scoped>
</style>