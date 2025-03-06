<script setup>
import { ref, onMounted, computed } from "vue";
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import { shallowRef } from "vue";
import ComplexServiceSection from "src/components/ComplexServiceSection.vue";
import { useQuasar } from "quasar";

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
const q = useQuasar();
const sectionTitle = "Строительно-монтажные работы";
const map = shallowRef(null);
const markers = [
  {
    coordinates: [30.296384, 59.913753],
    properties: {
      src: "Images/Gallery/1.png",
      address: "Рижский пр. д. 4-6",
      title: "Монтаж БКТП",
    },
  },
  {
    coordinates: [30.283592, 59.927924],
    properties: {
      src: "Images/Gallery/1.png",
      address: "Звенигородская ул., 1",
      title: "Монтаж БКТП",
    },
  },
  {
    coordinates: [30.335137, 59.92272],
    properties: {
      src: "Images/Gallery/3.png",
      address: "Звенигородская ул., 1",
      title: "Монтаж БКТП",
    },
  },
  {
    coordinates: [30.356086, 59.937215],
    properties: {
      src: "Images/Gallery/2.png",
      address: "Звенигородская ул., 1",
      title: "Монтаж БКТП",
    },
  },
];

const openMarker = ref(null);
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
      @click.stop="openMarker = null"
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
      <!-- <yandex-map-marker
        v-for="marker in markers"
        :key="marker.title"
        :settings="marker"
      >
        <div class="marker"></div>
      </yandex-map-marker>
      <yandex-map-hint hint-property="hint">
        <template #default="{ content }">
          <div class="hint-window" v-html="content" />
        </template>
      </yandex-map-hint> -->
      <yandex-map-marker
        v-for="(marker, index) in markers"
        :key="index"
        :settings="{
          coordinates: marker.coordinates,
          onClick: () => (openMarker = index),
          zIndex: openMarker === index ? 1 : 0,
        }"
      >
        <div class="marker">
          <div v-if="openMarker === index" class="popup">
            <a href="/gallery" class="image-container"
              ><img class="map-popup-img" :src="marker.properties.src" /><span
                class="hover-text"
                >В галерею</span
              ></a
            >
            <b>{{ marker.properties.address }}</b>
            <router-link class="map-popup-title" to="/gallery">{{
              marker.properties.title
            }}</router-link>
          </div>
        </div>
      </yandex-map-marker>
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
  cursor: pointer;
}
.popup {
  position: absolute;
  top: calc(-900%);
  left: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transform: translate(15px, -10%);
  padding: 8px;
  background: var(--color-white);
  color: var(--color-black);
  -webkit-box-shadow: 0px 0px 15px 3px rgba(9, 9, 9, 0.2);
  -moz-box-shadow: 0px 0px 15px 3px rgba(9, 9, 9, 0.2);
  box-shadow: 0px 0px 15px 3px rgba(9, 9, 9, 0.2);
  white-space: nowrap;
  border-radius: 4px;
  font-size: 12px;
}
.map-popup-img {
  width: 100%;
  min-width: 140px;
  border-radius: 2px;
}
.map-popup-title {
  color: var(--color-black);
  transition: 0.3s linear;
}
.image-container {
  position: relative;
  display: inline-block;
}

.hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

@media (hover: hover) {
  .map-popup-title:hover {
    color: var(--q-primary);
  }
  .image-container:hover .hover-text {
    opacity: 1;
  }
}
</style>
