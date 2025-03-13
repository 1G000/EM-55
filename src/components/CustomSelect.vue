<template>
  <q-select
    v-model="modelValue"
    :options="options"
    :label="label"
    label-color="grey"
    outlined
    map-options
    dense
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
  max-width: 300px;
  width: auto;
  border-radius: 4px;
  border: 1px solid var(--color-black);
  font-size: 0.8rem;
  font-family: Montserrat-regular, serif;
}
</style>
