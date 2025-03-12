<template>
  <q-select
    v-model="modelValue"
    :options="options"
    :label="label"
    outlined
    map-options
    emit-value
    class="select"
  />
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = ref(props.modelValue);

watch(modelValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<style scoped>
.select {
  min-width: 300px;
  width: auto;
  border-radius: 8px;
  border: 2px solid var(--q-primary);
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  font-family: Montserrat-regular, serif;
}
</style>
