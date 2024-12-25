<template>
  <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
      <q-card flat class="col">
        <q-responsive :ratio="16 / 9">
          <q-card-section class="border-radius-none flex flex-center">
            <q-item class="page404__wrapper">
              <q-item-section>
                <q-item-label class="page404__text"
                  >Потерпите немного, скоро здесь будет красиво :)</q-item-label
                >
              </q-item-section>
              <img src="/Images/500.jpg" />
              <q-btn class="btn" unelevated to="/" label="На главную" no-caps />
            </q-item>
          </q-card-section>
        </q-responsive>
      </q-card>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});
</script>

<style scoped>
.page404__wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.page404__text {
  text-align: center;
  font-size: clamp(1.1rem, 1vw, 1.2rem);
  font-family: Montserrat-bold, serif;
  color: var(--q-primary);
}

.btn {
  background-color: var(--q-primary);
}
</style>
