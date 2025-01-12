<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
const $q = useQuasar();

const props = defineProps({
  modelValue: {
    type: Boolean,
    require: true,
  },
  vacancyTitle: {
    type: String,
    require: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const router = useRouter();
const name = ref(null);
const telephone = ref(null);
const email = ref(null);
const position = computed(() => props.vacancyTitle);
const coverLetter = ref(null);
const files = ref(null);
const accept = ref(false);

const submitForm = () => {
  $q.notify({
    color: "green",
    textColor: "white",
    message: "Резюме успешно отправилось",
  });
  resetForm();
  closeDialog();
};

const resetForm = () => {
  name.value = null;
  telephone.value = null;
  files.value = null;
  email.value = null;
  coverLetter.value = null;
  accept.value = false;
};
const openPrivacyPage = () => {
  window.open(router.resolve("/privacy").href, "_blank");
};
const closeDialog = () => {
  emit("update:modelValue", false);
};
</script>

<template>
  <q-dialog
    persistent
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <q-card class="q-pa-sm">
      <q-card-section class="q-pb-none">
        <q-icon
          name="close"
          size="md"
          color="primary"
          class="cursor-pointer close-icon"
          @click="closeDialog"
        ></q-icon>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Форма для отправки резюме</div>
      </q-card-section>

      <q-card-section style="max-height: 80vh">
        <q-form
          @submit="submitForm"
          class="q-gutter-md form__wrapper"
          ref="form"
        >
          <q-input
            color="black"
            bg-color="white"
            label-color="grey-6"
            outlined
            class="input-wrapper"
            v-model="name"
            label="Ваше имя*"
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
            outlined
            class="input-wrapper"
            type="tel"
            v-model="telephone"
            label="Ваш телефон*"
            mask="+7 (###) ###-##-##"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Поле обязательно для заполнения',
            ]"
          ></q-input>
          <q-input
            color="black"
            bg-color="white"
            label-color="grey-6"
            outlined
            class="input-wrapper"
            v-model="email"
            type="email"
            label="ivanov@mail.ru"
            lazy-rules
          ></q-input>

          <q-input
            color="black"
            bg-color="white"
            label-color="grey-6"
            outlined
            class="input-wrapper input-wrapper-spacing"
            type="text"
            v-model="position"
            label="Должность*"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Поле обязательно для заполнения',
            ]"
          ></q-input>
          <q-input
            color="black"
            bg-color="white"
            label-color="grey-6"
            outlined
            class="input-wrapper"
            type="textarea"
            v-model="coverLetter"
            label="Сопроводительное письмо"
            lazy-rules
          ></q-input>
          <q-file
            color="black"
            bg-color="white"
            label-color="grey-6"
            outlined
            multiple
            max-files="3"
            max-file-size="10485760"
            accept=".jpg, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            use-chips
            append
            label="jpg, pdf, doc до 10Мб, макс 3 файла"
            class="input-wrapper input-wrapper-spacing"
            v-model="files"
          >
            <template v-slot:prepend>
              <q-icon color="secondary" name="attach_file" />
            </template>
          </q-file>
          <q-checkbox
            v-model="accept"
            bg-color="white"
            color="primary"
            size="lg"
            class="input-wrapper input-wrapper-spacing"
            label="Я даю свое согласие на обработку и использование моих персональных данных и соглашаюсь с условиям"
            ><span class="form__privacy-link" @click="openPrivacyPage"
              >Политики конфиденциальности</span
            ></q-checkbox
          >

          <div class="form__button-wrapper">
            <q-btn
              type="submit"
              unelevated
              class="form__button q-mb-lg q-mt-md"
              color="primary"
              >Отправить</q-btn
            >
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.close-icon {
  display: flex;
  margin-left: auto;
  transition: 0.3s linear;
}
.close-icon:hover {
  transform: scale(1.2);
}
.form__button {
  border-radius: 8px;
}
.input-wrapper-spacing {
  margin-top: 34px;
}
.form__privacy-link {
  padding-left: 5px;
  cursor: pointer;
  transition: 0.3s linear;
}
.form__privacy-link:hover {
  color: var(--q-primary);
}
</style>