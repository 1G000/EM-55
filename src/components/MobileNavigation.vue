<script setup>
import { ref } from "vue";
defineProps({
  menu: {
    type: Array,
    require: true,
  },
});

const expanded = ref(false);
</script>

<template>
  <div class="text-accent text-weight-bold" style="max-width: 100%">
    <q-list>
      <header-toolbar-mobile-menu-item
        label="Услуги"
        :menuKeys="[6, 8]"
        section="services"
      />
      <header-toolbar-mobile-menu-item label="Информация" section="info" />
      <q-list class="text-accent text-weight-bold q-pt-md">
        <q-item clickable to="/schedule" @click="closeMenu">
          Расписание полетов
        </q-item>
      </q-list>
    </q-list>
  </div>
</template>
