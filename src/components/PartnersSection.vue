<script setup>
import UiSection from "./UiSection.vue";
import UiSectionTitle from "./UiSectionTitle.vue";
import PartnersLogoItem from "./PartnerLogoItem.vue";
import { customers } from "src/data/partners";

const sectionTitle = "Нашими заказчиками являются:";
const slicedPartners = customers.slice(0, 4); // Ограничиваем до 4 картинок
</script>

<template>
  <UiSection :margin="`0 20px -64px 20px`" id="partners">
    <UiSectionTitle :title-text="sectionTitle" />
    <div class="container">
      <div class="partners__container">
        <PartnersLogoItem
          v-for="(customer, index) in slicedPartners"
          :key="index"
          :imgSrc="customer.imgSrc"
          :href="customer.href"
        />
        <div class="text-card">
          <p>И МНОГИЕ ДРУГИЕ</p>
          <RouterLink to="/partners" class="link">
            <span>
              Подробнее
              <q-icon name="arrow_forward" class="icon" />
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </UiSection>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.partners__container {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.partners__container > * {
  flex: 1;
  min-width: 0;
}

.partners__container img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.text-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  height: 100%;
  flex-shrink: 0;
  font-family: Montserrat-bold, serif;
  font-size: 1.1rem;
}

.link,
link:visited {
  color: black;
}

@media (hover: hover) {
  .link:hover {
    cursor: pointer;
    color: var(--q-primary);
  }
}

@media screen and (max-width: 768px) {
  .partners__container {
    gap: 10px;
  }

  .text-card {
    padding: 10px;
  }
}

@media screen and (max-width: 1100px) {
  .partners__container {
    flex-wrap: wrap;
  }

  .text-card {
    flex: 1 1 100%;
    order: 1;
    padding: 0 20px;
  }

  .partners__container > * {
    flex: 1 1 calc(50% - 10px);
  }
}

@media screen and (max-width: 480px) {
  .container {
    padding: 0 10px;
  }

  .partners__container {
    gap: 5px;
  }

  .text-card {
    padding: 5px;
    font-size: 14px;
  }
}
</style>
