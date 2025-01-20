<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
const sectionTitle = "Строительно-монтажные работы";
</script>

<template>
  <UiSection class="content__wrapper" :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'">
    <q-breadcrumbs gutter="xs" class="breadcrumbs">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right"></q-icon>
      </template>
      <q-breadcrumbs-el icon="home" label="Главная" to="/"></q-breadcrumbs-el>
      <q-breadcrumbs-el label="Строительно-монтажные работы"></q-breadcrumbs-el>
    </q-breadcrumbs>
    <UiSectionTitle :title-text="sectionTitle" />

    <q-img src="Images/Gallery/1.png"> </q-img>

    <q-img src="Images/Gallery/2.png"> </q-img>

    <q-img src="Images/Gallery/3.png"> </q-img>
  </UiSection>
</template>
