<script setup>
import { ref } from "vue";
defineProps({
  label: {
    type: String,
    require: true,
  },
  secondLevel: {
    type: Array,
    require: true,
  },
});

const expanded = ref(false);
</script>

<template>
  <q-expansion-item
    v-model="expanded"
    class="q-py-sm"
    style="
      border-bottom: 1px solid #e9e9e9;
      padding-top: 12px;
      padding-bottom: 14px;
    "
  >
    <q-expansion-item
      v-for="item in menu"
      :key="item.title"
      :label="item.title"
      class="text-accent text-weight-bold"
    >
      <q-card class="text-accent text-weight-regular">
        <q-item
          v-for="el in item.items"
          :key="el.title"
          :to="formRoute(el.path, item.path)"
          @click="closeMenu"
          class="toolbar-link"
        >
          {{ el.title }}
        </q-item>
      </q-card>
    </q-expansion-item>
  </q-expansion-item>
</template>
