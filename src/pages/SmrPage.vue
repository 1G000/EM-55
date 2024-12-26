<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
const sectionTitle = "Строительно-монтажные работы";
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '64px 20px 0 20px'"
  >
    <UiSectionTitle :title-text="sectionTitle" />
    <div class="col-6">
      <q-img src="Images/Gallery/1.png"> </q-img>
    </div>
    <div class="col-6">
      <q-img src="/Images/Gallery/2.png"> </q-img>
    </div>
    <div class="col-6">
      <q-img src="/Images/Gallery/2.png"> </q-img>
    </div>
  </UiSection>
</template>
