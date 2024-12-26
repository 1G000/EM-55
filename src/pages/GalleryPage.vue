<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
const sectionTitle = "Галерея";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '64px 20px 0 20px'"
  >
    <UiSectionTitle :title-text="sectionTitle" />

    <q-img src="Images/Gallery/4.png"> </q-img>

    <q-img src="Images/Gallery/5.png"> </q-img>

    <q-img src="Images/Gallery/6.png"> </q-img>
  </UiSection>
</template>
