<script setup>
import { useRouter } from "vue-router";
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import { galleryData } from "src/data/gallery";
import ProductCard from "src/components/ProductCard.vue";
const router = useRouter();
const sectionTitle = "Галерея";

const goToPhotos = (item) => {
  router.push({
    path: "/photos",
    query: { galleryId: item.id },
  });
};
</script>

<template>
  <UiSection
    class="content__wrapper"
    :padding="$q.screen.width > 768 ? '64px 40px 0 40px' : '32px 20px 0 20px'"
  >
    <BreadCrumbs :page-route="sectionTitle" />
    <UiSectionTitle tag="h1" :title-text="sectionTitle" />
    <div class="gallery">
      <ProductCard
        v-for="item in galleryData"
        :key="item.id"
        :product="item"
        @click="goToPhotos(item)"
        class="gallery-card"
      />
    </div>
    <!-- <q-img src="Images/Gallery/4.png"> </q-img>
    <q-img src="Images/Gallery/5.png"> </q-img>
    <q-img src="Images/Gallery/6.png"> </q-img> -->
  </UiSection>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 20px;
  justify-content: center;
}
</style>
