<script setup>
import UiSection from "../components/UiSection.vue";
import UiSectionTitle from "src/components/UiSectionTitle.vue";
import BreadCrumbs from "src/components/BreadCrumbs.vue";
import PartnerCard from "src/components/CertificateCard.vue";
const sectionTitle = "Инструкции и руководства по эксплуатации";

const instructions = [
  {
    title: "Руководство по эксплуатации на БКТП",
    href: "/Instructions/РЭ на БКТП.pdf",
  },
  {
    title: "Руководство по эксплуатации на КЛ, РЛ",
    href: "/Instructions/РЭ на КЛ, РЛ.pdf",
  },
  {
    title: "Руководство по эксплуатации на КСО",
    href: "/Instructions/РЭ на КСО.pdf",
  },
  {
    title: "Руководство по эксплуатации на НКУ до 1000 А",
    href: "/Instructions/РЭ на НКУ до 1000 А.pdf",
  },
  {
    title: "Руководство по эксплуатации на НКУ до 4000 А",
    href: "/Instructions/РЭ на НКУ до 4000 А.pdf",
  },
  {
    title: "Руководство по эксплуатации на УКРМ",
    href: "/Instructions/РЭ на УКРМ.pdf",
  },
  {
    title: "Руководство по эксплуатации на ШСН, ШБП, ЩРЭ, ЩК",
    href: "/Instructions/РЭ на ШСН, ШБП, ЩРЭ, ЩК.pdf",
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
        v-for="(cert, index) in instructions"
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
