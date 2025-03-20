<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import UiSection from "src/components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import { galleryData } from "src/data/gallery";
import ProductCard from "src/components/ProductCard.vue";
import CustomSelect from "src/components/CustomSelect.vue";

const router = useRouter();
const sectionTitle = "Галерея";

const selectedYear = ref("Все");
const selectedCategory = ref("Все");

const getUniqueYears = () => {
  const years = new Set(galleryData.map((item) => item.year));
  return ["Все", ...years];
};

const getUniqueCategories = () => {
  const categories = new Set(galleryData.map((item) => item.category));
  return ["Все", ...categories];
};

const filteredGalleryData = () => {
  return galleryData.filter((item) => {
    const matchesYear =
      selectedYear.value === "Все" || item.year === selectedYear.value;
    const matchesCategory =
      selectedCategory.value === "Все" ||
      item.category === selectedCategory.value;
    return matchesYear && matchesCategory;
  });
};

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

    <div class="filters">
      <CustomSelect
        v-model="selectedYear"
        :options="getUniqueYears()"
        label="Выберите год:"
      />

      <CustomSelect
        v-model="selectedCategory"
        :options="getUniqueCategories()"
        label="Выберите категорию:"
      />
    </div>

    <div class="gallery">
      <ProductCard
        v-for="item in filteredGalleryData()"
        :key="item.id"
        :product="item"
        @click="goToPhotos(item)"
        class="gallery-card"
      />
    </div>
  </UiSection>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-content: center;
}
.gallery-card :deep(.q-img__container) {
  max-width: 100%;
}
.gallery-card :deep(.q-img__image) {
  object-fit: cover !important;
}
.gallery-card :deep(.q-img) {
  margin-top: 0;
  margin-bottom: 0;
}
.filters {
  display: flex;
  gap: 40px;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  font-family: Montserrat-regular, serif;
  line-height: 30px;
  margin-bottom: 24px;
  text-align: justify;
  user-select: none;
}
@media (max-width: 1280px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 650px) {
  .gallery {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 865px) {
  .filters {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .year-filter {
    flex-direction: column;
  }
}
</style>
