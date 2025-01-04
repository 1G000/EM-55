<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import VacancyCard from "src/components/VacancyCard.vue";

const sectionTitle = "Вакансии";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '64px 20px 0 20px'"
  >
    <UiSectionTitle :title-text="sectionTitle" />
    <VacancyCard />
  </UiSection>
</template>
