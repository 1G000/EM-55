<script setup>
import { ref, onMounted } from "vue";
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import { shallowRef } from "vue";
import ComplexServiceSection from "src/components/ComplexServiceSection.vue";

import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapMarker,
  YandexMapHint,
  YandexMapControls,
  YandexMapZoomControl,
} from "vue-yandex-maps";

const sectionTitle = "Строительно-монтажные работы";
const map = shallowRef(null);

const markers = [
  {
    coordinates: [30.296384, 59.913753],
    properties: {
      hint: "<b>Рижский пр. д. 4-6 - Монтаж БКТП</b>",
    },
  },
  {
    coordinates: [30.283592, 59.927924],
    properties: {
      hint: "<b>Набережная реки Мойки, 122 - Монтаж БКТП</b>",
    },
  },
  {
    coordinates: [30.335137, 59.92272],
    properties: {
      hint: "<b>Звенигородская улица, 1 - Монтаж БКТП</b>",
    },
  },
  {
    coordinates: [30.356086, 59.937215],
    properties: {
      hint: "<b>Ковенский переулок, 5 - Монтаж БКТП</b>",
    },
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
          showScaleInCopyrights: true,
        },
      }"
      width="100%"
      height="500px"
    >
      <yandex-map-default-scheme-layer />
      <yandex-map-default-features-layer />
      <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control />
      </yandex-map-controls>
      <yandex-map-marker v-for="marker in markers" :key="marker.title" :settings="marker">
        <div class="marker"></div>
      </yandex-map-marker>
      <yandex-map-hint hint-property="hint">
        <template #default="{ content }">
          <div class="hint-window" v-html="content" />
        </template>
      </yandex-map-hint>
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
  background: var(--q-primary);
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #fff;
  font-weight: bold;
  line-height: 20px;
}
.hint-window {
  position: absolute;
  transform: translate(7px, -100%);
  padding: 4px 20px;
  background: var(--q-primary);
  color: var(--color-white);
  border: 1px solid var(--q-primary);
  white-space: nowrap;
  border-radius: 4px;
}
</style>
