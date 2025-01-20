<template>
  <div class="container">
    <q-breadcrumbs gutter="xs" class="breadcrumbs">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right"></q-icon>
      </template>
      <q-breadcrumbs-el icon="home" label="Главная" to="/"></q-breadcrumbs-el>
      <q-breadcrumbs-el label="Контакты"></q-breadcrumbs-el>
    </q-breadcrumbs>
    <ContactsSection />
    <h2 class="page__title">Контактные данные специалистов</h2>
    <section class="contact__section">
      <ContactItem v-for="contact in contactsData?.contacts || []" :key="contact.title" :title="contact.title"
        :employees="contact.employees" class="contact__item" />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ContactItem from "src/components/ContactItem.vue";
import ContactsSection from "src/components/ContactsSection.vue";

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
  padding: 0 40px 20px 40px;
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

@media screen and (max-width: 500px) {
  .page__title {
    font-size: 14px;
  }

  .container {
    padding: 0 0px 20px 0px;
  }
}
</style>
