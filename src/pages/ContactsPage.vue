<template>
  <div class="container">
    <ContactsSection />
    <h2 class="page__title">Контактные данные специалистов</h2>
    <section class="contact__section">
      <ContactItem
        v-for="contact in contactsData?.contacts || []"
        :key="contact.title"
        :title="contact.title"
        :employees="contact.employees"
        class="contact__item"
      />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ContactItem from "src/components/ContactItem.vue";
import ContactsSection from "src/components/ContactsSection.vue";
import ProductCards from "src/components/ProductCards.vue";

const contactsData = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("./contactsItems.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Fixed syntax error here
    }
    contactsData.value = await response.json(); // Access top-level key 'contacts'
  } catch (error) {
    console.error("Error fetching contactsData:", error);
    contactsData.value = [];
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
  width: 100%;
  padding: 20px 20px;
  gap: 40px;
}

.page__title {
  width: 100%;
  text-align: center;
  font-family: Montserrat-bold, serif;
  text-transform: uppercase;
  font-size: 18px;
  color: black;
  background-color: #d4ab6d1a;
}
</style>
