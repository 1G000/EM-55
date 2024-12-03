<script setup>
defineOptions({
  name: "ToolbarContactButton",
});
</script>

<template>
  <q-btn-dropdown
    class="q-mr-md"
    style="width: 210px"
    color="secondary"
    size="md"
    icon="phone"
    dropdown-icon="keyboard_arrow_down"
    label="8 (812) 294–20–13"
  >
    <q-list class="bg-secondary">
      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-avatar icon="phone" color="primary" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Телефон</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section avatar>
          <q-avatar
            icon="mdi-clock-outline"
            color="primary"
            text-color="white"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>Часы работы</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>


