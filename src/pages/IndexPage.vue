<script setup>
import TheSlider from "src/components/TheSlider.vue";
import TheAdvantages from "src/components/TheAdvantages.vue";
import ProductCards from "src/components/ProductCards.vue";
import ComplexServiceSection from "src/components/ComplexServiceSection.vue";
import ServicesSection from "src/components/ServicesSection.vue";
import ContactsSection from "src/components/ContactsSection.vue";
import FormSection from "src/components/FormSection.vue";

defineOptions({
  name: "IndexPage",
});
</script>

<template>
  <TheSlider />
  <div class="content__wrapper">
    <TheAdvantages />
    <ProductCards />
    <ComplexServiceSection />
    <ServicesSection />
    <!-- <FormSection /> -->
    <ContactsSection />
  </div>
</template>



<style scoped>
.content__wrapper {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
