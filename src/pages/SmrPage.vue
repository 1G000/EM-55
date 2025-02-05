<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
const sectionTitle = "Строительно-монтажные работы";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />

    <q-img src="Images/Gallery/1.png"> </q-img>

    <q-img src="Images/Gallery/2.png"> </q-img>

    <q-img src="Images/Gallery/3.png"> </q-img>
  </UiSection>
</template>
