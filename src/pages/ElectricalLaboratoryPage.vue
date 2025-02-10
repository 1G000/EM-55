<script setup>
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import structureImg from "../assets/structure.png";
import { ref } from "vue";

const sectionTitle = "Электролаборатория УПНР-426";

const scale = ref(1);
const startDistance = ref(null);
const imageStyle = ref({
  transform: "scale(1)",
  transformOrigin: "0 0",
});

const getDistance = (touch1, touch2) => {
  return Math.sqrt(
    Math.pow(touch2.clientX - touch1.clientX, 2) +
      Math.pow(touch2.clientY - touch1.clientY, 2)
  );
};

const handleTouchStart = (event) => {
  if (event.touches.length === 2) {
    startDistance.value = getDistance(event.touches[0], event.touches[1]);
  }
};

const handleTouchMove = (event) => {
  if (event.touches.length === 2) {
    const newDistance = getDistance(event.touches[0], event.touches[1]);
    const newScale = (newDistance / startDistance.value) * scale.value;
    imageStyle.value.transform = `scale(${newScale})`;
  }
};

const handleTouchEnd = () => {
  scale.value = parseFloat(
    imageStyle.value.transform.replace("scale(", "").replace(")", "")
  );
  startDistance.value = null;
};
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs page-route="Электролаборатория" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <div
      class="container"
      ref="imageContainer"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <q-img :src="structureImg" :style="imageStyle" ref="image"></q-img>
    </div>
    <!-- <a class="download__link" href="./labor-protection.docx"
      ><span>Скачать инструкцию по охране труда</span
      ><q-icon color="gray" name="download"></q-icon
    ></a>
    <a class="download__link" href="./staff-list.doc"
      ><span>Скачать штатное расписание</span
      ><q-icon color="gray" name="download"></q-icon
    ></a>
    <a class="download__link" href="./resolution.rtf"
      ><span>Скачать Положение об электролаборатории </span
      ><q-icon color="gray" name="download"></q-icon
    ></a> -->
  </UiSection>
</template>
<style scoped>
.container {
  width: 100%;
  display: flex;
  padding: 60px 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.download__link {
  color: black;
  font-family: Montserrat-bold, serif;
  text-transform: uppercase;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (hover: hover) {
  .download__link:hover {
    color: var(--q-primary);
  }
}
</style>
