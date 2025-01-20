<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import PrivacyContent from "src/components/PrivacyContent.vue";
const sectionTitle = "Политика в отношении обработки персональных данных";
</script>

<template>
  <UiSection class="content__wrapper" :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'">
    <q-breadcrumbs gutter="xs" class="breadcrumbs">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right"></q-icon>
      </template>
      <q-breadcrumbs-el icon="home" label="Главная" to="/"></q-breadcrumbs-el>
      <q-breadcrumbs-el label="Политика"></q-breadcrumbs-el>
    </q-breadcrumbs>
    <UiSectionTitle :title-text="sectionTitle" />
    <PrivacyContent />
  </UiSection>
</template>
