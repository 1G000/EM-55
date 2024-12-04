<script setup>
defineOptions({
  name: "ToolbarContactButton",
});
</script>

<template>
  <q-btn-dropdown
    class="q-mr-md contact-button"
    style="width: 245px; font-size: 16px"
    color="secondary"
    text-color="primary"
    size="md"
    transition-show="slide-down"
    icon="phone"
    square
    dropdown-icon="keyboard_arrow_down"
    :label="$q.screen.width > 500 ? '8 (812) 294–20–13' : ''"
  >
    <q-list class="bg-primary text-white">
      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-avatar icon="mdi-email-fast" size="xl" text-color="secondary" />
        </q-item-section>
        <q-item-section>
          <q-item-label><b>Секретарь</b><br />referent@em-55.com</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section avatar>
          <q-avatar icon="mdi-map-marker" size="xl" text-color="secondary" />
        </q-item-section>
        <q-item-section>
          <q-item-label
            ><b>Адрес:</b> <br />194223, пр. Тореза,<br />д.44, к.2, лит.А,
            п.12Н</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section avatar>
          <q-avatar icon="mdi-point-of-sale" size="xl" text-color="secondary" />
        </q-item-section>
        <q-item-section>
          <q-item-label
            ><b>Отдел продаж:</b> <br />(812) 294-20-13<br />sale1@em-55.com</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item-section class="q-mt-sm">
        <q-btn
          class="q-py-sm text-bold"
          size="md"
          color="secondary"
          text-color="primary "
          label="Контакты"
        />
      </q-item-section>
    </q-list>
  </q-btn-dropdown>
</template>

<style scoped>
.contact-button {
  border-radius: 4px;
}
@media (max-width: 1230px) {
  .contact-button {
    margin-left: auto;
    margin-right: 0;
  }
}
@media (max-width: 500px) {
  .contact-button {
    width: 85px !important;
  }
}
</style>


