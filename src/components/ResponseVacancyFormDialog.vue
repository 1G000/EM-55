<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  modelValue: {
    type: Boolean,
    require: true,
  },
  vacancy: {
    type: Object,
    require: true,
  },
});
defineEmits(["update:modelValue"]);

const router = useRouter();
const name = ref(null);
const telephone = ref(null);
const email = ref(null);
const position = computed(() => props.vacancy.title);
const coverLetter = ref(null);
const files = ref(null);
const accept = ref(null);

const submitForm = () => {
  console.log("Форма отправилась");

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
  telephone.value = null;
  files.value = null;
  email.value = null;
  coverLetter.value = null;
  accept.value = false;
};
const openPrivacyPage = () => {
  window.open(router.resolve("/privacy").href, "_blank");
};
</script>

<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="
      {
        $emit('update:modelValue', $event), submitForm();
      }
    "
  >
    <q-card>
      <q-card-section>
        <div class="text-h6">Форма для отправки резюме</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 80vh" class="scroll">
        <q-form
          @submit="submitForm"
          class="q-gutter-md form__wrapper"
          ref="form"
        >
          <q-input
            color="black"
            bg-color="white"
            label-color="grey-6"
            filled
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
            filled
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
            filled
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
            filled
            class="input-wrapper"
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
            filled
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
            <q-btn
              type="submit"
              unelevated
              class="form__button"
              color="primary"
              v-close-popup
              >Отправить</q-btn
            >
          </div>
        </q-form>
      </q-card-section>
      <!-- <q-card-actions align="right">
        <q-btn flat label="Отправить" color="primary" v-close-popup />
      </q-card-actions> -->
    </q-card>
  </q-dialog>
</template>