<template>
  <the-slider></the-slider>
  <div class="content__wrapper">
    <TheAdvantages />
    <ProductCards />
    <ComprehensiveService />
  </div>
</template>

<script setup>
import TheSlider from "src/components/TheSlider.vue";
import TheAdvantages from "src/components/TheAdvantages.vue";
import ProductCards from "src/components/ProductCards.vue";
import ComprehensiveService from "src/components/ComprehensiveService.vue";
defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
.content__wrapper {
  display: flex;
  flex-direction: column;
  gap: 70px;
  max-width: 1920px;
  padding: 20px 20px 0 20px;
}
</style>
