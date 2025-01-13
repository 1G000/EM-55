<script setup>
import { ref, defineProps, toRefs } from "vue";
import ResponseVacancyFormDialog from "./ResponseVacancyFormDialog.vue";

const props = defineProps({
  vacancies: {
    type: Array,
    required: true,
  },
});
const { vacancies } = toRefs(props);
const expanded = ref(props.vacancies.map(() => false));
const responseDialog = ref(props.vacancies.map(() => false));
const toggleExpand = (index) => {
  expanded.value[index] = !expanded.value[index];
};
</script>

<template>
  <q-card
    v-for="(vacancy, index) in vacancies"
    :key="index"
    class="my-card"
    flat
    bordered
  >
    <ResponseVacancyFormDialog
      :vacancy-title="vacancy.title"
      v-model="responseDialog[index]"
    />
    <q-card-section class="top__section">
      <div class="right__side">
        <h4 class="title">{{ vacancy.title }}</h4>
        <span class="description">{{ vacancy.description }}</span>
      </div>
      <q-card-actions>
        <span class="salary">{{ vacancy.salary }}</span>
        <q-space></q-space>
        <q-btn
          class="hide__btn"
          color="primary"
          flat
          dense
          :icon="expanded[index] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="toggleExpand(index)"
        >
          <span>{{ expanded[index] ? "Скрыть" : "Подробнее" }}</span>
        </q-btn>
      </q-card-actions>
    </q-card-section>

    <q-slide-transition>
      <div v-show="expanded[index]">
        <div class="row">
          <div class="col-6">
            <q-separator color="primary" />
          </div>
        </div>

        <q-card-section>
          <h5>Мы предлагаем:</h5>
          <ul>
            <li v-for="(item, i) in vacancy.details.conditions" :key="i">
              {{ item }}
            </li>
          </ul>
          <h5>В Ваши обязанности будет входить:</h5>
          <ul>
            <li v-for="(item, i) in vacancy.details.responsibilities" :key="i">
              {{ item }}
            </li>
          </ul>
          <h5>Наши ожидания от кандидата:</h5>

          <ul>
            <li v-for="(item, i) in vacancy.details.requirements" :key="i">
              {{ item }}
            </li>
          </ul>
          <div class="btns__container">
            <q-btn
              class="hide__btn"
              color="primary"
              flat
              dense
              @click="responseDialog[index] = true"
            >
              <span>Откликнуться</span>
            </q-btn>
            <q-btn class="hide__btn" color="primary" flat dense to="/contacts">
              <span>Контакты</span>
            </q-btn>
          </div>
        </q-card-section>
      </div>
    </q-slide-transition>
    <hr />
  </q-card>
</template>

<style scoped>
.my-card {
  border: none;
}
.q-card__section {
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
}
.top__section {
  flex-direction: row;
  gap: 60px;
}
.right__side {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.title {
  font-family: Montserrat-bold, serif;
  font-size: clamp(1.2rem, 2.3vw, 2rem);
  line-height: 1em;
}
.description {
  font-family: Montserrat-regular, serif;
  font-size: clamp(0.9rem, 2.3vw, 1.2rem);
  line-height: 1.5em;
  max-width: 75%;
}
.salary {
  font-family: Montserrat-bold, serif;
  color: var(--q-primary);
  font-size: clamp(1rem, 2.3vw, 1.4rem);
  line-height: 1em;
}
li {
  list-style: disc;
  margin-left: 40px;
  font-family: Montserrat-regular, serif;
  font-size: clamp(0.9rem, 2.3vw, 1.2rem);
}
h5 {
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.9rem, 2.3vw, 1.3rem);
}
.q-btn {
  width: 150px;
  border-radius: 8px;
  border: 1px solid var(--q-primary);
}
.hide__btn :deep(.q-icon),
.hide__btn span,
.hide__btn {
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.hide__btn span {
  font-family: Montserrat-bold, serif;
  font-size: 14px;
  line-height: 1em;
}
.btns__container {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

@media (hover: hover) {
  .hide__btn:hover {
    background-color: var(--q-primary);
  }
  .hide__btn:hover :deep(.q-icon),
  .hide__btn:hover span {
    color: var(--q-secondary);
  }
}
@media screen and (max-width: 660px) {
  .q-card__section {
    flex-direction: column;
    padding: 0;
    padding-bottom: 20px;
  }
  .description {
    max-width: 100%;
  }
}
</style>
