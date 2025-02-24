<script setup>
import { galleryData } from "src/data/gallery";
import { useRoute } from "vue-router";
import { ref } from "vue";
import UiSection from "src/components/UiSection.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";

const route = useRoute();
const selectedGallery = ref(null);
const galleryId = route.query.galleryId;
if (galleryId) {
  selectedGallery.value = galleryData.find(
    (item) => item.id === parseInt(galleryId)
  );
}

const visible = ref(false);
const currentSlide = ref(0);
const sectionTitle = `Коллекция ${galleryId}`;

const openLightbox = (index) => {
  currentSlide.value = index;
  visible.value = true;
};

const hideLightbox = () => {
  visible.value = false;
};
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="selectedGallery.title" />
    <div v-if="selectedGallery" class="photos">
      <div class="photo-grid">
        <div v-for="(photo, index) in selectedGallery.photos" :key="index">
          <img
            :src="photo"
            :alt="`Фото ${index + 1}`"
            @click="openLightbox(index)"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Карточка не выбрана.</p>
    </div>

    <q-dialog v-model="visible" full-width>
      <q-card class="full-height">
        <q-carousel
          v-model="currentSlide"
          animated
          infinite
          arrows
          control-color="primary"
          height="100%"
          class="full-height-carousel"
        >
          <q-carousel-slide
            v-for="(photo, index) in selectedGallery.photos"
            :key="index"
            :name="index"
            class="carousel-slide"
          >
            <img :src="photo" class="carousel-image" />
          </q-carousel-slide>
        </q-carousel>

        <q-btn
          label="Закрыть"
          color="primary"
          class="close-btn"
          @click="hideLightbox"
        />
      </q-card>
    </q-dialog>
  </UiSection>
</template>

<style scoped>
.photos {
  margin-top: 20px;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
}

.photo-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.photo-grid div {
  overflow: hidden;
  position: relative;
  height: 200px;
}

.full-height-carousel {
  max-height: 90vh;
}

.carousel-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.95);
}

.carousel-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 8px;
  padding: 8px;
}

@media (hover: hover) {
  .photo-grid div:hover img {
    transform: scale(1.1);
  }
}
</style>
