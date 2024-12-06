<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
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
const secondLevelItemsCopy = reactive(props.secondLevelItems);

const closeAllExpansions = () => {
  expanded.value = false;
  secondLevelItemsCopy.forEach((item) => {
    item.expandedSecondLevel = false;
  });
};
</script>

<template>
  <q-expansion-item
    class="navigation-list"
    @click.stop
    v-model="expanded"
    :label="label"
    active-class="navigation-list-active"
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
        @click="closeAllExpansions"
        class="cursor-pointer"
      >
        {{ item.title }}
      </q-card-section>

      <q-expansion-item
        v-else
        :label="item.title"
        v-model="item.expandedSecondLevel"
        expand-icon-class="text-black"
      >
        <q-card
          v-for="(thirdLevelItem, index) in item.thirdLevelItems"
          :key="thirdLevelItem.title"
          class="q-pl-lg bg-white"
        >
          <q-card-section
            @click="closeAllExpansions(index)"
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
