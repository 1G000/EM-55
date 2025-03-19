<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";

import BreadCrumbs from "src/components/BreadCrumbs.vue";

const sectionTitle = "Результаты поиска";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
  </UiSection>
</template>
<style scoped></style>
