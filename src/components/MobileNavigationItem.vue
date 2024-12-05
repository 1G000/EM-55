<script setup>
import { ref } from "vue";
defineProps({
  label: {
    type: String,
    require: true,
  },
  secondLevel: {
    type: Boolean,
    require: true,
  },
  secondLevelItems: {
    type: Array,
    require: true,
  },
});

const expanded = ref(false);
const expandedSecond = ref(false);
</script>

<template>
  <q-expansion-item
    class="navigation-list"
    v-model="expanded"
    :label="label"
    :hide-expand-icon="label === 'Вакансии'"
    expand-icon-class="text-black"
  >
    <q-card
      v-for="item in secondLevelItems"
      :key="item.title"
      class="q-pl-lg bg-white subtext-hover"
    >
      <q-card-section
        v-if="!item.thirdLevel"
        :to="kkk"
        @click="expanded = false"
      >
        {{ item.title }}
      </q-card-section>
      <q-expansion-item
        v-else
        v-model="expandedSecond"
        :label="item.title"
        expand-icon-class="text-black"
      >
        <q-card class="q-pl-lg bg-white">
          <q-card-section
            v-for="thirdLevelItem in item.thirdLevelItems"
            :key="thirdLevelItem.title"
            :to="kkk"
            @click="expandedSecond = false"
            class="subtext-hover cursor-pointer"
          >
            {{ thirdLevelItem.title }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
  </q-expansion-item>
</template>

<style scoped>
.navigation-list {
  font-size: clamp(16px, 1vw, 20px);
  color: black;
}
.navigation-list:hover {
  color: var(--q-secondary);
}
.subtext-hover {
  color: #333;
}
.subtext-hover:hover {
  color: var(--q-secondary);
}
.submenu-item:hover {
  color: var(--q-secondary);
}
</style>
