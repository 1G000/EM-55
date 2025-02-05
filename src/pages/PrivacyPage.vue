<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import PrivacyContent from "src/components/PrivacyContent.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
const sectionTitle = "Политика в отношении обработки персональных данных";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs page-route="Политика конфиденциальности" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <PrivacyContent />
  </UiSection>
</template>
