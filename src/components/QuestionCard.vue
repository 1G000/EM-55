<script setup>
import { ref } from "vue";
const expanded = ref(false);

defineProps({
  id: Number,
  question: String,
  answer: String,
});
</script>

<template>
  <q-card class="my-card" flat bordered @click="expanded = !expanded">
    <q-card-section>
      <div class="title">
        <q-icon name="quiz" class="icon" color="primary" /> Вопрос №{{ id }}
        <q-btn
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        ></q-btn>
      </div>
      <div class="description">
        {{ question }}
      </div>
    </q-card-section>

    <q-slide-transition>
      <div v-show="expanded">
        <q-card-section>
          <div class="title">Ответ:</div>
          <div class="description">
            {{ answer }}
          </div>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<style scoped>
.my-card {
  width: 100%;
  align-items: center;
  padding: 0 16px;
  border: 1px solid var(--q-accent);
  border-radius: 8px;
  transition: 0.3s linear;
  text-decoration: none;
  cursor: pointer;
}
.title {
  font-size: clamp(1rem, 1.1vw, 1.1rem);
  font-family: Montserrat-bold, serif;
  line-height: 20px;
}
.description {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1rem, 2.3vw, 1.2rem);
  line-height: 1.5em;
}

.icon {
  font-size: 32px;
}

@media (hover: hover) {
  .q-card:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2) !important;
    -moz-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2) !important;
    box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2) !important;
  }
}
</style>
