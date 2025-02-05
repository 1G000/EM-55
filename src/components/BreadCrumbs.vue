<script setup>
defineProps({
  pageRoute: {
    type: String,
  },
});
</script>

<template>
  <q-breadcrumbs gutter="xs" class="breadcrumbs">
    <template v-slot:separator>
      <q-icon size="1.5em" name="chevron_right"></q-icon>
    </template>
    <q-breadcrumbs-el icon="home" label="Главная" to="/"></q-breadcrumbs-el>
    <q-breadcrumbs-el :label="pageRoute"></q-breadcrumbs-el>
  </q-breadcrumbs>
</template>

<style scoped>
.breadcrumbs {
  font-family: Montserrat-regular, serif;
  font-size: clamp(0.9rem, 1vw, 1rem);
  line-height: 30px;
  color: var(--q-primary);
}
.breadcrumbs a {
  color: #8300235f;
}
@media (hover: hover) {
  .breadcrumbs a:hover {
    cursor: pointer;
    color: var(--q-primary);
  }
}

@media screen and (max-width: 768px) {
  .breadcrumbs {
    padding-top: 20px;
  }
}
</style>
