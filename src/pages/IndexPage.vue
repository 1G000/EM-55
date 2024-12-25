<script setup>
import TheSlider from "src/components/TheSlider.vue";
import TheAdvantages from "src/components/TheAdvantages.vue";
import ProductCards from "src/components/ProductCards.vue";
import ComplexServiceSection from "src/components/ComplexServiceSection.vue";
import ServicesSection from "src/components/ServicesSection.vue";
import ContactsSection from "src/components/ContactsSection.vue";
import FormSection from "src/components/FormSection.vue";
import { ref, inject, onMounted } from "vue";

const scrollToRef = inject("scrollToRef");

const product = ref(null);
const service = ref(null);
const form = ref(null);

onMounted(() => {
  const scrollToAnchor = (section) => {
    const heightOfHeader = 100;
    if (section === "product" && product.value)
      window.scrollTo({
        top: product.value.$el.offsetTop - heightOfHeader,
        behavior: "smooth",
      });
    if (section === "service" && service.value)
      window.scrollTo({
        top: service.value.$el.offsetTop - heightOfHeader,
        behavior: "smooth",
      });
    if (section === "form" && form.value) console.log("ttt");

    window.scrollTo({
      top: form.value.$el.offsetTop - heightOfHeader,
      behavior: "smooth",
    });
  };
  scrollToRef.value = scrollToAnchor;
});

defineOptions({
  name: "IndexPage",
});
</script>

<template>
  <TheSlider :scrollToAnchor="scrollToRef" />
  <div class="content__wrapper">
    <TheAdvantages />
    <ProductCards ref="product" />
    <ComplexServiceSection />
    <ServicesSection ref="service" />
    <FormSection id="form" ref="form" />
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
