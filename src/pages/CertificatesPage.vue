<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import PartnerCard from "src/components/CertificateCard.vue";
const sectionTitle = "Сертификаты и декларации";

// const certsDobr = [
//   {
//     title: "Протокол исследования Камеры сборные одностороннего обслуживания",
//     href: "/Certificates/1/ПИ_№21085_ВНИ_22_от_07_09_2022_Камеры_сборные_одностороннего_обслуживания.pdf",
//   },
//   {
//     title: "Декларация Камеры сборные одностороннего обслуживания",
//     href: "/Certificates/1/Декларация КСО.pdf",
//   },
//   {
//     title: "Добровольный сертификат Камеры сборные одностороннего обслуживания",
//     href: "/Certificates/1/Добровольный сертификат КСО.pdf",
//   },
// ];

const declarationConformity = [
  {
    title: "Протокол исследования Камеры сборные одностороннего обслуживания",
    href: "/Certificates/1/ПИ_№21085_ВНИ_22_от_07_09_2022_Камеры_сборные_одностороннего_обслуживания.pdf",
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
  {
    title: "Сертификат соответствия КЛ, РЛ",
    href: "/Certificates/2/Сертификат КЛ, РЛ.pdf",
  },
  {
    title: "Сертификат соответствия НКУ до 1000А",
    href: "/Certificates/2/Сертификат НКУ до 1000А.pdf",
  },
  {
    title: "Сертификат соответствия НКУ до 4000А",
    href: "/Certificates/2/Сертификат НКУ до 4000А.pdf",
  },
];

const certsSRO = [
  {
    title: "Выписка СРО СМР",
    href: "/Certificates/3-SRO/Выписка СРО СМР.pdf",
  },
  {
    title: "Выписка СРО ПИР",
    href: "/Certificates/3-SRO/Выписка СРО ПИР.pdf",
  },
  {
    title: "Выписка СРО изыскательские работы",
    href: "/Certificates/3-SRO/Выписка СРО изыскательские работы.pdf",
  },
  {
    title: "Сертификат соответствия УКРМ",
    href: "/Certificates/3-SRO/Сертификат соответствия УКРМ.pdf",
  },
  {
    title: "Декларация о соответствии БКРТП",
    href: "/Certificates/3-SRO/Декларация о соответствии БКРТП.pdf",
  },
  {
    title: "Декларация о соответствии БКТП",
    href: "/Certificates/3-SRO/Декларация о соответствии БКТП.pdf",
  },
  {
    title: "Декларация о соответствии КСО",
    href: "/Certificates/3-SRO/Декларация о соответствии КСО.pdf",
  },
  {
    title: "Декларация о соответствии КТП",
    href: "/Certificates/3-SRO/Декларация о соответствии КТП.pdf",
  },
  {
    title: "Сертификат соответствия КЛ, РЛ",
    href: "/Certificates/2/Сертификат КЛ, РЛ.pdf",
  },
  {
    title: "Сертификат соответствия НКУ до 1000А",
    href: "/Certificates/2/Сертификат НКУ до 1000А.pdf",
  },
  {
    title: "Сертификат соответствия НКУ до 4000А",
    href: "/Certificates/2/Сертификат НКУ до 4000А.pdf",
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
    <!-- <h2 class="second__title">Декларации о соответствии</h2>
    <article class="partner-cards">
      <PartnerCard
        v-for="(cert, index) in declarationConformity"
        :key="index"
        :title="cert.title"
        :imgSrc="cert.imgSrc"
        :href="cert.href"
      />
    </article> -->
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
