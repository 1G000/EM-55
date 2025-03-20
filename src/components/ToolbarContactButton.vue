<script setup>
// import { ref } from "vue";

const call = (phoneNumber) => {
  window.location.href = `tel:${phoneNumber}`;
};
// const button = ref(null);
</script>

<template>
  <!-- <div> -->
  <q-btn-dropdown
    id="button"
    class="contact-button text-bold contact-hover"
    color="transparent"
    unelevated
    text-color="accent"
    icon="phone"
    square
    fab-mini
    :menu-offset="[0, 10]"
  >
    <q-list id="myId" separator class="text-black q-pt-0 q-pb-md contact-list">
      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-avatar icon="mdi-email-fast" size="xl" text-color="secondary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Приемная:</q-item-label>
          <q-item-label>
            <a
              v-if="$q.screen.width <= 560"
              href="tel:+78122942013"
              class="links"
              >+7 (812) 294-20-13</a
            >
            <a
              v-if="$q.screen.width <= 560"
              href="tel:+78122942303"
              class="links"
              >+7 (812) 294-23-03</a
            >
            <a href="mailto:referent@em-55.com" class="links"
              >referent@em-55.com</a
            ></q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section avatar>
          <q-avatar
            icon="mdi-file-document-edit"
            size="xl"
            text-color="secondary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Конструкторский отдел:</q-item-label>
          <q-item-label
            ><a href="tel:+79117349001" class="links">+7 (911) 734-90-01</a>
            <a href="mailto:ktg@em-55.com" class="links"
              >ktg@em-55.com</a
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
            ><a href="tel:+79119085052" class="links">+7 (911) 908-50-52</a>
            <a href="mailto:sale1@em-55.com" class="links"
              >sale1@em-55.com</a
            ></q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section avatar>
          <q-avatar icon="mdi-tools" size="xl" text-color="secondary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold" style="max-width: 210px"
            >Производственно-технический отдел:</q-item-label
          >
          <q-item-label
            ><a href="tel:+79117197059" class="links">+7 (911) 719-70-59</a>
            <a href="mailto:pto@em-55.com" class="links"
              >pto@em-55.com</a
            ></q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section avatar>
          <q-avatar
            icon="mdi-account-search"
            size="xl"
            text-color="secondary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Кадровая служба</q-item-label>
          <q-item-label>
            <a href="tel:+78122494411" class="links">+7 (812) 249-44-11</a>
            <a href="tel:+79112965058" class="links">+7 (911) 296-50-58</a>
            <a href="mailto:personal@em-55.com" class="links"
              >personal@em-55.com</a
            ></q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section avatar>
          <q-avatar icon="mdi-map-marker" size="xl" text-color="secondary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Адрес офиса:</q-item-label>
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
    </q-list>
  </q-btn-dropdown>
  <!-- </div> -->
</template>

<style scoped>
.contact-button {
  font-size: 1.3rem;
  font-family: Montserrat-regular, serif;
  /* transition: 0.3s linear; */
  /* border: 1px solid var(--q-accent);
  border-radius: 8px;
  padding: 6px 2px 6px 6px; */
}
/* .contact-button :deep(.q-icon) {
  color: var(--q-accent);
  margin-left: 0;
} */
.contact-button-inner {
  font-size: 1.3rem;
  padding: 2px 5px 4px 45px;
  color: var(--q-accent);
  font-family: Montserrat-regular, serif;
}
.contact-button-inner :deep(.q-icon) {
  color: var(--q-accent);
}
.contact-list {
  font-size: clamp(16px, 1vw, 20px);
}
.links {
  display: block;
  text-decoration: none;
  color: var(--color-black);
  transition: 0.3s linear;
}
.links:hover {
  color: var(--q-secondary);
}
@media (hover: hover) {
  /* .contact-hover:hover {
    border: 1px solid transparent;
  } */
}
/* @media (max-width: 860px) {
  .contact-button {
    padding: 6px 2px 6px 6px;
  }
} */
</style>
