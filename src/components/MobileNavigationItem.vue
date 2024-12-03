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
    expand-icon-class="text-white"
  >
    <q-card
      v-for="item in secondLevelItems"
      :key="item.title"
      class="q-pl-md bg-primary text-secondary"
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
        expand-icon-class="text-white"
        dense
      >
        <q-card class="q-pl-md bg-primary text-white">
          <q-card-section
            v-for="thirdLevelItem in item.thirdLevelItems"
            :key="thirdLevelItem.title"
            :to="kkk"
            @click="expandedSecond = false"
          >
            {{ thirdLevelItem.title }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
  </q-expansion-item>
</template>

<style scoped>
</style>
