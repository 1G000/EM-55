<script setup>
import UiSection from "./UiSection.vue";
import UiSectionTitle from "./UiSectionTitle.vue";
import PartnersLogoItem from "./PartnerLogoItem.vue"
import { partners } from "src/data/partners";
const sectionTitle = "Сегодня нам доверяют свои объекты:";
const shufflePartners = partners.sort(() => Math.random() - 0.5);



</script>


<template>
  <UiSection :margin="`0 20px -64px 20px`" id="partners">
    <UiSectionTitle :title-text="sectionTitle" />
    <div class="container">
      <div class="partners__container">
        <PartnersLogoItem v-for="(partner, index) in shufflePartners" :key="index" :imgSrc="partner.imgSrc"
          :href="partner.href" />
      </div>
    </div>
  </UiSection>
</template>

<style scoped>
.container {
  overflow-x: hidden;
}

.partners__container {
  display: flex;
  white-space: nowrap;
  animation: marquee 50s linear infinite;
}


.partners__container:hover {
  animation-play-state: paused;
}


@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

@media screen and (max-width: 600px) {
  .partners__container {
    animation: marquee 50s linear infinite;
  }

}
</style>
