<script setup>
import { ref } from "vue";
import UiSection from "./UiSection.vue";

const name = ref(null);
const age = ref(null);
const accept = ref(false);
const submitForm = () => {
  // $q.notify({
  //   color: 'green-4',
  //   textColor: 'white',
  //   icon: 'cloud_done',
  //   message: 'Submitted'
  // })
  resetForm();
};

const resetForm = () => {
  name.value = null;
  age.value = null;
  accept.value = false;
};
</script>
<template>
  <UiSection>
    <div class="q-pa-md" style="display: flex; gap: 20px">
      <q-list padding class="form__text-content">
        <q-item style="display: flex">
          На связи <span style="padding-left: 5px">Электромонтаж 55</span>
        </q-item>

        <q-item>
          <q-item-section>
            Оставьте свои данные и мы свяжемся с Вами в ближайшее время.
          </q-item-section>
        </q-item>
      </q-list>
      <q-form @submit="submitForm" class="q-gutter-md form__wrapper" ref="form">
        <q-input
          outlined
          v-model="name"
          placeholder="Ваше имя"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Поле обязательно для заполнения',
          ]"
        ></q-input>

        <q-input
          outlined
          type="tel"
          v-model="age"
          placeholder="+7 (_ _ _) _ _ _-_ _-_ _"
          mask="+7 (###) ###-##-##"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Поле обязательно для заполнения',
          ]"
        ></q-input>

        <q-checkbox
          v-model="accept"
          label="Отправляя данные, я принимаю условия"
          ><span class="form__privacy-link"
            >Пользовательского соглашения</span
          ></q-checkbox
        >

        <div>
          <q-btn
            label="Отправить"
            type="submit"
            unelevated
            color="primary"
          ></q-btn>
        </div>
      </q-form>
    </div>
  </UiSection>
</template>

<style scoped>
.form__wrapper,
.form__text-content {
  width: 50%;
}
.form__privacy-link {
  padding-left: 5px;
}
</style>