<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import PartnerCard from "src/components/CertificateCard.vue";
const sectionTitle = "Опросные листы";

const oprosSheets = [
  {
    title: "Блок 6(10)кВ из 6-ти камер серии Прогресс-ЭМ55 с АВР",
    href: "/Opros/Приложение_ОЛ блок из 6-ти камер Прогресс-ЭМ55.pdf",
  },
  {
    title: "РУ-6(10)кВ на базе ячеек серии КСО-285",
    href: "/Opros/Приложение_ОЛ_КСО-285.pdf",
  },
  {
    title: "РУ-6(10)кВ на базе ячеек серии КСО-386",
    href: "/Opros/Приложение_ОЛ_КСО-386.pdf",
  },
  {
    title: "РУ-6(10)кВ на базе ячеек серии Прогресс-ЭМ55",
    href: "/Opros/Приложение_ОЛ_Прогресс-ЭМ55.pdf",
  },
  {
    title:
      "УВРУ на один трансформатор с одной отходящей линией мощностью более 400кВА",
    href: "/Opros/Приложение_ОЛ_УВРУ1 тр_ схема 1 более 400 кВА.pdf",
  },
  {
    title:
      "УВРУ на один трансформатор с одной отходящей линией мощностью до 400кВА",
    href: "/Opros/Приложение_ОЛ_УВРУ1 тр_ схема до 400 кВА.pdf",
  },
  {
    title:
      "УВРУ на два трансформатора с одной отходящей линией мощностью более 400кВА",
    href: "/Opros/Приложение_ОЛ_УВРУ2 тр_ схема 1 более 400 кВА.pdf",
  },
  {
    title:
      "УВРУ на два трансформатора с двумя отходящими линиями мощностью более 400кВА",
    href: "/Opros/Приложение_ОЛ_УВРУ2 тр_ схема 2 более 400 кВА.pdf",
  },
  {
    title:
      "УВРУ на два трансформатора с отходящими линиями мощностью до 400кВА",
    href: "/Opros/Приложение_ОЛ_УВРУ2 тр_ схема до 400 кВА.pdf",
  },
  {
    title: "КТП киоскового типа",
    href: "/Opros/II_Опросный_лист_на_КТП_киоскового_типа.pdf",
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
    <article class="partner-cards">
      <PartnerCard
        v-for="(cert, index) in oprosSheets"
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
