<script setup>
defineOptions({
  name: "ToolbarContactButton",
});
</script>

<template>
  <q-btn-dropdown
    class="q-mr-md contact-button"
    color="accent"
    unelevated
    text-color="primary"
    transition-show="fade"
    icon="phone"
    square
    :label="$q.screen.width <= 1215 ? '' : '+7 (812) 294–20–13'"
    dropdown-icon="keyboard_arrow_down"
  >
    <q-list separator class="bg-primary text-white q-pt-md contact-list">
      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-avatar icon="mdi-email-fast" size="xl" text-color="secondary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Приемная:</q-item-label>
          <q-item-label
            ><a href="tel:+78122942013" class="links">+7 (812) 294-20-13</a
            ><a href="mailto:referent@em-55.com" class="links"
              >referent@em-55.com</a
            ></q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section avatar>
          <q-avatar icon="mdi-point-of-sale" size="xl" text-color="secondary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Отдел продаж:</q-item-label>
          <q-item-label
            ><a href="tel:+78122942303" class="links">+7 (812) 294-23-03</a>
            <a href="mailto:sale1@em-55.com" class="links"
              >sale1@em-55.com</a
            ></q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section avatar>
          <q-avatar icon="mdi-map-marker" size="xl" text-color="secondary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Адрес:</q-item-label>
          <q-item-label
            ><a
              href="https://www.google.com/maps/dir//%D0%BF%D1%80.+%D0%A2%D0%BE%D1%80%D0%B5%D0%B7%D0%B0,+44+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+2+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3+194223/@60.00784,30.3468141,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4696338614187a55:0x65807e5c291f3d9c!2m2!1d30.3468141!2d60.00784?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D"
              class="links"
              ><p class="q-mb-none">194223, пр. Тореза,</p>
              <p class="q-mb-none">д.44, к.2, лит.А, п.12н</p></a
            ></q-item-label
          >
        </q-item-section>
      </q-item>

      <q-item-section class="q-mt-sm">
        <q-btn
          class="q-py-sm text-bold contact-btn"
          size="md"
          color="accent"
          text-color="primary"
          label="Контакты"
        />
      </q-item-section>
    </q-list>
  </q-btn-dropdown>
</template>

<style scoped>
.contact-button {
  border-radius: 8px;
  font-size: clamp(16px, 1vw, 20px);
  padding-top: 5px;
}
.contact-list {
  font-size: clamp(16px, 1vw, 20px);
}
.links {
  display: block;
  text-decoration: none;
  color: white;
  transition: 0.3s linear;
}
.links:hover {
  color: var(--q-secondary);
}
.contact-btn {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  font-size: clamp(16px, 1vw, 20px) !important;
}
</style>


