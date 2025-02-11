<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  pdfSrc: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <q-card
    class="pdf-card"
    flat
    clickable
    tag="a"
    :href="pdfSrc"
    target="_blank"
  >
    <div class="pdf-card__content">
      <q-icon name="picture_as_pdf" class="pdf-card__icon" />
      <span class="pdf-card__title">{{ title }}</span>
    </div>
  </q-card>
</template>

<style scoped>
.pdf-card {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border: 1px solid var(--q-accent);
  border-radius: 8px;
  transition: 0.3s linear;
  text-decoration: none;
}

.pdf-card__content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pdf-card__icon {
  font-size: 32px;
  color: var(--q-primary);
}

.pdf-card__title {
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.8rem, 1.1vw, 0.9rem);
  color: var(--color-black);
  text-transform: uppercase;
}

@media (hover: hover) {
  .pdf-card:hover {
    -webkit-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2) !important;
    -moz-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2) !important;
    box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2) !important;
  }
  .pdf-card:hover .pdf-card__title {
    color: var(--q-primary);
  }
}
</style>
