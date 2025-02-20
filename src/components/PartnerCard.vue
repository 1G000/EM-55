<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  sertHref: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <q-responsive :ratio="4 / 3" class="partner-card">
    <q-card
      class="column partner-card__accent"
      flat
      clickable
      tag="a"
      :href="href"
      target="_blank"
    >
      <img class="col image" :src="imgSrc" />
      <q-card-section class="partner-card__title">
        <q-item>
          <q-item-section class="partner-card__text">{{
            title
          }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="partner-card__text">{{
            href.slice(8)
          }}</q-item-section>
        </q-item>
        <q-item v-if="sertHref">
          <q-item-section>
            <a :href="sertHref" target="_blank" class="partner-card__text"
              >Посмотреть сертификат</a
            >
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </q-responsive>
</template>

<style scoped>
.partner-card {
  width: 360px;
  height: 300px;
  transition: 0.3s linear;
  border-radius: 8px;
}

.q-item {
  padding: 0px 16px;
  min-height: 30px;
}

.partner-card__accent {
  border: 1px solid var(--q-accent);
  border-radius: 8px;
}

.partner-card__title {
  background-color: var(--background-light-accent);
  border-top: 1px solid #b990511a;
  padding: 5px;
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.8rem, 1vw, 1rem);
  line-height: 15.2px;
  min-height: 75px;
}
.image {
  object-fit: contain;
  padding: 20px;
}

.partner-card__text {
  color: var(--color-black);
  text-transform: uppercase;
}
@media (hover: hover) {
  .partner-card:hover {
    -webkit-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
    box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
  }
  .partner-card:hover .partner-card__text {
    color: var(--q-primary);
  }
}
</style>
