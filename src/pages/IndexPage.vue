<template>
  <the-slider></the-slider>
  <div class="content__wrapper">
    <TheAdvantages />
    <ProductCards />
    <ComplexServiceSection />
    <ServicesSection />
  </div>
</template>

<script setup>
import TheSlider from "src/components/TheSlider.vue";
import TheAdvantages from "src/components/TheAdvantages.vue";
import ProductCards from "src/components/ProductCards.vue";
import ComplexServiceSection from "src/components/ComplexServiceSection.vue";
import ServicesSection from "src/components/ServicesSection.vue";
import ContactsSection from "src/components/ContactsSection.vue";

defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
.content__wrapper {
  display: flex;
  flex-direction: column;
  gap: 90px;
  max-width: 1920px;
  padding: 20px 20px 0 20px;
}
</style>
