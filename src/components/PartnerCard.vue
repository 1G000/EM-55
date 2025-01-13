<template>
  <q-card class="my-card">
    <q-img :src="imgSrc">
      <div class="absolute-bottom text-subtitle2 text-center">
        {{ title }}
      </div>
    </q-img>
  </q-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.my-card {
  max-width: 300px;
  margin: 10px;
}
</style>
