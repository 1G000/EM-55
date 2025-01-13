<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="row">
    <div class="row__item-label">{{ label }}</div>
    <div class="row__item-value">
      {{ value }}
    </div>
  </div>
</template>

<style scoped>
.row {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
  min-height: 40px;
  padding: 5px 5px;
  border-radius: 8px;
}

.row__item-label {
  text-align: start;
  width: 25%;
  font-family: Montserrat-bold, serif;
  font-size: 18px;
}

.row__item-value {
  text-align: start;
  display: flex;
  width: 70%;
  font-family: Montserrat-regular, serif;
  font-size: 18px;
}

.row:nth-child(even) {
  background-color: var(--background-light-accent);
}

@media screen and (max-width: 880px) {
  .row {
    flex-direction: row;
    gap: 5px;
  }
  .row__item-label,
  .row__item-value {
    width: 100%;
  }
}
</style>
