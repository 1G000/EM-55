<template>
  <div class="fullscreen text-center q-pa-md flex flex-center text">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">
        Извините, сайт находится в разработке<br />
        Информация скоро появится
      </div>

      <q-btn class="q-mt-xl btn" unelevated to="/" label="На главную" no-caps />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});
</script>

<style scoped>
.text {
  color: var(--q-primary);
}

.btn {
  background-color: var(--q-primary);
}
</style>
