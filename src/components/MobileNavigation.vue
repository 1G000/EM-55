<script setup>
import MobileNavigationItem from "./MobileNavigationItem.vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

const q = useQuasar();
const props = defineProps({
  navItems: {
    type: Array,
    require: true,
    default: () => [],
  },
});
const updatedNavItems = computed(() => {
  if (q.screen.width < 768) {
    return props.navItems;
  } else if (q.screen.width < 1060) {
    return props.navItems.slice(-4);
  }
  return props.navItems.slice(-2);
});
</script>

<template>
  <div class="bg-white">
    <q-list>
      <MobileNavigationItem
        v-for="item in updatedNavItems"
        :key="item.label"
        :label="item.label"
        :second-level="item.secondLevel"
        :second-level-items="item.secondLevelItems"
      />
    </q-list>
  </div>
</template>

<style scoped></style>
