<script setup>
import { computed } from "vue";

const props = defineProps({
  background: {
    type: String,
  },
  padding: {
    type: String,
  },
  margin: {
    type: String,
  },
});
const sectionBackground = computed(() =>
  props.background ? props.background : "none"
);
const sectionPadding = computed(() => (props.padding ? props.padding : "0"));
const sectionMargin = computed(() => (props.margin ? props.margin : "0"));
</script>

<template>
  <section class="section">
    <slot />
  </section>
</template>


<style scoped>
.section {
  padding: v-bind(sectionPadding);
  margin: v-bind(sectionMargin);
  background: v-bind(sectionBackground);
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>