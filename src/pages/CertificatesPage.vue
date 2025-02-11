<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import PartnerCard from "src/components/CertificateCard.vue";
const sectionTitle = "Сертификаты";

const certsDobr = [
  {
    title: "Протокол исследования Камеры сборные одностороннего обслуживания",
    href: "/Certificates/1/ПИ_№21085_ВНИ_22_от_07_09_2022_Камеры_сборные_одностороннего_обслуживания (1).pdf",
  },
  {
    title: "Декларация Камеры сборные одностороннего обслуживания",
    href: "/Certificates/1/Декларация КСО.pdf",
  },
  {
    title: "Добровольный сертификат Камеры сборные одностороннего обслуживания",
    href: "/Certificates/1/Добровольный сертификат КСО.pdf",
  },
];

const certsSootv = [
  {
    title: "Сертификат соответствия БКРТП",
    href: "/Certificates/2/БКРТП сертификат.pdf",
  },
  {
    title: "Сертификат соответствия БКТП",
    href: "/Certificates/2/БКТП сертификат.pdf",
  },
  {
    title: "Сертификат соответствия КСО",
    href: "/Certificates/2/КСО сертификат.pdf",
  },
  {
    title: "Сертификат соответствия КТП",
    href: "/Certificates/2/КТП сертификат.pdf",
  },

  {
    title: "Сертификат соответствия ШСН, ШБП, ШБПЗС, ЩГП",
    href: "/Certificates/2/ШСН,ШБП,ШБПЗС,ЩГП.pdf",
  },
];

const certsSRO = [
  {
    title:
      "Строительство, реконструкция, капитальный ремонт, снос объектов капитального строительства",
    href: "/Certificates/3-SRO/1.pdf",
  },
  {
    title: "Подготовка проектной документации",
    href: "/Certificates/3-SRO/2.pdf",
  },
  {
    title: "Инженерные изыскания",
    href: "/Certificates/3-SRO/3.pdf",
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
    <h2 class="second__title">Добровольная сертификация</h2>
    <article class="partner-cards">
      <PartnerCard
        v-for="(cert, index) in certsDobr"
        :key="index"
        :title="cert.title"
        :imgSrc="cert.imgSrc"
        :href="cert.href"
      />
    </article>
    <h2 class="second__title">Сертификаты соответствия</h2>
    <article class="partner-cards">
      <PartnerCard
        v-for="(cert, index) in certsSootv"
        :key="index"
        :title="cert.title"
        :imgSrc="cert.imgSrc"
        :href="cert.href"
      />
    </article>
    <h2 class="second__title">СРО</h2>
    <article class="partner-cards">
      <PartnerCard
        v-for="(cert, index) in certsSRO"
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
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.second__title {
  align-self: flex-start;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1.3rem, 2.3vw, 1.7rem);
  line-height: 1em;
}
</style>
