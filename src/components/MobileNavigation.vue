<script setup>
import MobileNavigationItem from "./MobileNavigationItem.vue";
import MobileNavigation from "src/components/MobileNavigation.vue";
defineProps({
  menu: {
    type: Array,
    require: true,
  },
});
</script>

<template>
  <div class="navigation-back">
    <q-list>
      <q-list-item>
        <MobileNavigationItem
          v-for="item in menu"
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
.navigation-back {
  background-color: #830024;
}
</style>