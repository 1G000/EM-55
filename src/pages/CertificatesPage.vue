<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import PartnerCard from "src/components/CertificateCard.vue";
const sectionTitle = "Сертификаты";

const certsDobr = [
  {
    title: "Камеры сборные одностороннего обслуживания",
    imgSrc: "src/assets/Certificates/1.png",
    href: "../assets/Certificates/1.pdf",
  },
  {
    title: "Декларация КСО",
    imgSrc: "src/assets/Certificates/2.png",
    href: "../assets/Certificates/1.pdf",
  },
  {
    title: "Добровольный сертификат КСО",
    imgSrc: "src/assets/Certificates/3.png",
    href: "../assets/Certificates/1.pdf",
  },
];

const certsSootv = [
  {
    title: "БКРТП сертификат",
    imgSrc: "src/assets/Certificates/4.png",
    href: "../assets/Certificates/1.pdf",
  },
  {
    title: "Декларация КСО",
    imgSrc: "src/assets/Certificates/2.png",
    href: "../assets/Certificates/1.pdf",
  },
  {
    title: "Добровольный сертификат КСО",
    imgSrc: "src/assets/Certificates/3.png",
    href: "../assets/Certificates/1.pdf",
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
    <h2>Добровольная сертификация</h2>
    <article class="partner-cards">
      <PartnerCard
        v-for="(cert, index) in certsDobr"
        :key="index"
        :title="cert.title"
        :imgSrc="cert.imgSrc"
        :href="cert.href"
      />
    </article>
    <h2>Сертификаты соответствия</h2>
    <article class="partner-cards">
      <PartnerCard
        v-for="(cert, index) in certsSootv"
        :key="index"
        :title="cert.title"
        :imgSrc="cert.imgSrc"
        :href="cert.href"
      />
    </article>
  </UiSection>
</template>
<style scoped>
.partner-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}

.partners-page__text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  line-height: 30px;
}
.partner-card :deep(img) {
  width: 100%;
  height: 500px;
  object-fit: contain;
  padding: 0;
}
.partner-card {
  height: auto;
  height: 500px;
  width: 300px;
}
</style>
