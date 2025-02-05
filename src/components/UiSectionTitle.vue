<script setup>
defineProps({
  titleText: {
    type: String,
  },
  tag: {
    type: String,
    default: "h2",
    validator: (value) => ["h1", "h2"].includes(value),
  },
});
</script>

<template>
  <component :is="tag" class="section__title">
    {{ titleText }}
  </component>
</template>

<style scoped>
.section__title {
  align-self: flex-start;
  font-family: Montserrat-bold, serif;
  font-size: clamp(1.8rem, 2.3vw, 2.5rem);
  line-height: 1em;
}
</style>
