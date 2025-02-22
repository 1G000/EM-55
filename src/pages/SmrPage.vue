<script setup>
import { ref, onMounted } from "vue";
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import { shallowRef } from "vue";

import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapMarker,
} from "vue-yandex-maps";

const sectionTitle = "Строительно-монтажные работы";
const map = shallowRef(null);

const markers = [
  {
    coordinates: [30.28961, 59.942786],
    title: "Что-то 1",
  },
  {
    coordinates: [30.3351, 59.9343],
    title: "Что-то 2",
  },
];
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <yandex-map
      v-model="map"
      :settings="{
        location: {
          center: [30.3351, 59.9343],
          zoom: 12,
        },
      }"
      width="100%"
      height="500px"
    >
      <yandex-map-default-scheme-layer />
      <yandex-map-default-features-layer />
      <yandex-map-default-marker
        v-for="marker in markers"
        :key="marker.title"
        :settings="marker"
      />
      <!-- <yandex-map-marker v-for="marker in markers" :key="marker.title" :settings="marker"> -->
      <!-- <div class="marker"></div> -->
      <!-- </yandex-map-marker> -->
    </yandex-map>
    <q-img src="Images/Gallery/1.png"> </q-img>

    <q-img src="Images/Gallery/2.png"> </q-img>

    <q-img src="Images/Gallery/3.png"> </q-img>
  </UiSection>
</template>

<style scoped>
.marker {
  position: relative;
  width: 20px;
  height: 20px;
  background: #ff0000;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #fff;
  font-weight: bold;
  line-height: 20px;
}
</style>
