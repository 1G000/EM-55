<script setup>
import { ref, computed } from "vue";
import UiSection from "./UiSection.vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import background from "../assets/form-background-new.jpg";
import backgroundMobile from "../assets/form-background-mobile-new.jpg";

const q = useQuasar();
const router = useRouter();

const openPrivacyPage = () => {
  window.open(router.resolve("/privacy").href, "_blank");
};

const name = ref(null);
const tel = ref(null);
const files = ref(null);
const accept = ref(false);
const currentBackground = computed(() => {
  if (q.screen.width > 767) {
    return `url(${background}`;
  }
  return `url(${backgroundMobile})`;
});
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
  tel.value = null;
  files.value = null;
  accept.value = false;
};
</script>
<template>
  <UiSection
    class="form-section"
    id="form"
    :background="
      $q.screen.width > 767 ? sectionBackground : sectionBackgroundMobile
    "
    :padding="$q.screen.width > 1024 ? '100px 60px' : '40px 20px'"
  >
    <div class="q-pa-md form-section__content">
      <q-list padding class="form__text-content">
        <q-item class="form-section__title">
          На связи
          <span class="form-section__title form-section__title-accent"
            >Электромонтаж 55</span
          >
        </q-item>

        <q-item>
          <q-item-section class="form-section__text">
            Оставьте свои данные и мы свяжемся с Вами в ближайшее время.
          </q-item-section>
        </q-item>
      </q-list>
      <q-form @submit="submitForm" class="q-gutter-md form__wrapper" ref="form">
        <q-input
          color="black"
          bg-color="white"
          label-color="grey-6"
          filled
          class="input-wrapper"
          v-model="name"
          label="Ваше имя"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Поле обязательно для заполнения',
          ]"
        ></q-input>

        <q-input
          color="black"
          bg-color="white"
          label-color="grey-6"
          filled
          class="input-wrapper"
          type="tel"
          v-model="tel"
          label="Ваш телефон"
          mask="+7 (###) ###-##-##"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Поле обязательно для заполнения',
          ]"
        ></q-input>
        <q-file
          color="black"
          bg-color="white"
          label-color="grey-6"
          filled
          multiple
          max-files="3"
          max-file-size="10485760"
          accept=".jpg, .png, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          use-chips
          append
          label="jpg, pdf, png, doc, docx, xlsx до 10Мб, макс 3 файла"
          class="input-wrapper"
          v-model="files"
        >
          <template v-slot:prepend>
            <q-icon color="secondary" name="attach_file" />
          </template>
        </q-file>
        <q-checkbox
          v-model="accept"
          dark
          bg-color="white"
          color="primary"
          size="lg"
          class="input-wrapper"
          label="Я даю свое согласие на обработку и использование моих персональных данных и соглашаюсь с условиям"
          ><span class="form__privacy-link" @click="openPrivacyPage"
            >Политики конфиденциальности</span
          ></q-checkbox
        >

        <div class="form__button-wrapper">
          <q-btn type="submit" unelevated class="form__button" color="primary"
            >Отправить</q-btn
          >
        </div>
      </q-form>
    </div>
  </UiSection>
</template>

<style scoped>
.form__text-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
}
.form-section {
  background: v-bind(currentBackground);
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
.form-section__content {
  display: flex;
  gap: 56px;
  color: var(--color-white);
}
.form-section__title,
.form-section__title-accent {
  font-family: Montserrat-bold, serif;
  font-size: clamp(1rem, 2.3vw, 2rem);
  font-weight: 800;
  display: flex;
  text-align: center;
}
.form-section__title-accent {
  padding-left: 5px;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-section__text {
  font-family: Montserrat-regular, serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 400;
  line-height: 21.6px;
  text-align: center;
}
.form__wrapper,
.form__text-content {
  width: 50%;
  gap: 20px;
}
.form__privacy-link {
  padding-left: 5px;
  cursor: pointer;
  transition: 0.3s linear;
}
.form__privacy-link:hover {
  color: var(--q-accent);
}
.input-wrapper {
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  font-weight: 800;
}
::placeholder {
  color: grey;
}
.form__button-wrapper {
  display: flex;
  justify-content: center;
}
.form__button {
  width: 410px;
  height: 60px;
  text-transform: none;
  border-radius: 8px;
  font-family: Montserrat-bold, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 21.6px;
  transition: 0.3s linear;
}
.form__button:hover {
  color: var(--q-accent) !important;
}
@media screen and (max-width: 767px) {
  .form-section__content {
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 0;
  }
  .form-section__title,
  .form-section__title-accent {
    display: flex;
    padding-bottom: 0;
  }

  .section {
    margin: 0;
    padding: 40px 0;
  }
  .form__wrapper,
  .form__text-content {
    width: 90%;
    gap: 10px;
  }
  .form-section__text {
    margin-top: -23px;
  }
}
</style>
