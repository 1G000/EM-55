<template>
  <div class="container">
    <div class="contact__section">
      <ContactItem
        v-for="contact in contactsData?.contacts || []"
        :key="contact.title"
        :title="contact.title"
        :employees="contact.employees"
        class="contact__item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ContactItem from "src/components/ContactItem.vue";

const contactsData = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/public/contactsItems.json");
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
  gap: 40px;
}

.contact__section {
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  align-items: center;
}
</style>
