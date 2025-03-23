<script setup>
import { ref, computed } from "vue";
import UiSection from "./UiSection.vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import background from "../assets/form-bridge.jpg";

const q = useQuasar();
const router = useRouter();

const openPrivacyPage = () => {
  window.open(router.resolve("/privacy").href, "_blank");
};
const accept = ref(false);
const textMessage = ref("Данные успешно отправлены.");
const currentBackground = computed(() => `url(${background}`);

const userData = ref({
  clientName: null,
  clientTel: null,
  clientText: null,
  clientFiles: null,
});

const resetUserData = () => {
  for (const key of Object.keys(userData.value)) {
    userData.value[key] = "";
  }
  accept.value = false;
};
const submitForm = async () => {
  const formData = new FormData();
  formData.append("clientName", userData.value.clientName);
  formData.append("clientTel", userData.value.clientTel);
  formData.append("clientText", userData.value.clientText);

  userData.value.clientFiles.forEach((file, index) => {
    formData.append(`clientFiles[${index}]`, file);
  });

  const response = await fetch("send.php", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    textMessage.value = "Что-то пошло не так!";
  } else {
    q.notify({
      color: response.ok ? "green" : "red",
      textColor: "white",
      icon: "announcement",
      message: textMessage.value,
    });
  }
  resetUserData();
};
</script>
<template>
  <UiSection
    class="form-section"
    id="form"
    :background="`center ${currentBackground}`"
    :padding="$q.screen.width > 1024 ? '40px 60px' : '20px 20px'"
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
      <q-form @submit="submitForm" class="form__wrapper" ref="form">
        <q-input
          color="black"
          bg-color="white"
          label-color="grey-6"
          filled
          dense
          class="input-wrapper"
          v-model="userData.clientName"
          label="Имя"
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
          dense
          class="input-wrapper"
          type="tel"
          v-model="userData.clientTel"
          label="Телефон"
          mask="+7 (###) ###-##-##"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Поле обязательно для заполнения',
          ]"
        ></q-input>
        <q-input
          color="black"
          bg-color="white"
          label-color="grey-6"
          filled
          dense
          type="textarea"
          class="input-wrapper"
          v-model="userData.clientText"
          label="Текст обращения или вопрос"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Поле обязательно для заполнения',
          ]"
        ></q-input>
        <q-file
          color="black"
          bg-color="white"
          label-color="grey-6"
          filled
          dense
          multiple
          max-files="3"
          max-file-size="10485760"
          accept=".jpg, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          use-chips
          append
          label="JPG, PDF, DOCX, XLSX до 10Мб, макс 3 файла"
          class="input-wrapper q-mb-md"
          v-model="userData.clientFiles"
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
          label="Я даю согласие на обработку моих персональных данных и принимаю условия"
          ><span class="form__privacy-link" @click="openPrivacyPage"
            >Политики конфиденциальности</span
          ></q-checkbox
        >

        <div class="form__button-wrapper q-mt-md">
          <q-btn
            type="submit"
            unelevated
            :disabled="!accept"
            class="form__button"
            color="primary"
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
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
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
.form__text-content {
  width: 50%;
  gap: 20px;
}
.form__wrapper {
  gap: 6px;
  width: 50%;
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
  width: 100%;
  height: 40px;
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
    gap: 20px;
  }
  .form-section__title,
  .form-section__title-accent {
    display: flex;
    padding-bottom: 0;
  }

  .section {
    margin: 0;
    padding: 20px 0 30px;
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
