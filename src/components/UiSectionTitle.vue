<script setup>
defineProps({
  titleText: {
    type: String,
  },
});
</script>

<template>
  <h2 class="section__title">
    {{ titleText }}
  </h2>
</template>


<style scoped>
.section__title {
  align-self: flex-start;
  font-family: Montserrat-bold, serif;
  font-size: clamp(1.8rem, 2.3vw, 2.5rem);
  line-height: 1em;
}
</style>