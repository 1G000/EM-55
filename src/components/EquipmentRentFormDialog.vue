<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { equipmentRentData } from "src/data/equipmentRentData";
const q = useQuasar();

const props = defineProps({
  modelValue: {
    type: Boolean,
    require: true,
  },
  equipmentTitle: {
    type: String,
    require: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

const router = useRouter();
const userEquipmentRentData = ref([]);

const getCurrentDateTime = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${day}:${month}:${year} ${hours}:${minutes}`;
};

equipmentRentData.forEach((obj) => {
  userEquipmentRentData.value.push({ [obj.model]: null });
  userEquipmentRentData.value["dateTime"] = getCurrentDateTime();
  if (props.equipmentTitle) {
    userEquipmentRentData.value["name"] = props.equipmentTitle;
  }
});
const accept = ref(false);
const textMessage = ref("Форма успешно отправилась");

const submitForm = async () => {
  const formData = new FormData();
  Object.entries(userEquipmentRentData.value).forEach(([key, val]) => {
    formData.append(key, val);
  });
  console.log(formData);

  const response = await fetch("equipment.php", {
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
  resetForm();
  closeDialog();
};

const resetForm = () => {
  for (const key of Object.keys(userEquipmentRentData.value)) {
    userEquipmentRentData.value[key] = null;
  }
  accept.value = false;
};
const openPrivacyPage = () => {
  window.open(router.resolve("/privacy").href, "_blank");
};
const closeDialog = () => {
  emit("update:modelValue", false);
};
const isValidDateTime = (dateTimeString) => {
  const [date, time] = dateTimeString.split(" ");
  const [day, month, year] = date.split("-");
  const [hours, minutes] = time.split(":");
  if (day < 1 || day > 31) return false;
  if (month < 1 || month > 12) return false;
  const currentYear = new Date().getFullYear();
  if (year < currentYear) return false;
  if (hours < 0 || hours > 23) return false;
  if (minutes < 0 || minutes > 59) return false;
  return true;
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
        <div class="text-h6">Форма для заказа спецтехники</div>
      </q-card-section>

      <q-card-section style="max-height: 80vh">
        <q-form @submit="submitForm" class="q-gutter-xs form__wrapper" ref="form">
          <div v-for="el in equipmentRentData" :key="el.id">
            <template v-if="el.type === 'text'">
              <q-input
                color="black"
                bg-color="white"
                label-color="grey-6"
                outlined
                class="input-wrapper text-caption"
                v-model="userEquipmentRentData[el.model]"
                :label="el.label === 'Дополнительные данные' ? el.label : el.label + '*'"
                lazy-rules
                :rules="
                  el.label != 'Дополнительные данные'
                    ? [
                        (val) =>
                          (val && val.length > 0) || 'Поле обязательно для заполнения',
                      ]
                    : []
                "
              ></q-input>
            </template>
            <template v-if="el.type === 'date'">
              <div class="q-px-none" style="width: 100%">
                <q-input
                  color="black"
                  bg-color="white"
                  label-color="grey-6"
                  outlined
                  class="input-wrapper"
                  v-model="userEquipmentRentData[el.model]"
                  :label="el.label + '*'"
                  lazy-rules
                  :rules="[
                    (val) => !!val || 'Поле обязательно для заполнения',
                    (val) => isValidDateTime(val) || 'Проверьте дату и время',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          v-model="userEquipmentRentData[el.model]"
                          minimal
                          mask="DD-MM-YYYY HH:mm"
                        >
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Закрыть" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>

                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time
                          v-model="userEquipmentRentData[el.model]"
                          mask="DD-MM-YYYY HH:mm"
                          format24h
                        >
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Закрыть" color="primary" flat />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </template>
            <template v-if="el.type === 'tel'">
              <q-input
                color="black"
                bg-color="white"
                label-color="grey-6"
                outlined
                class="input-wrapper"
                type="tel"
                v-model="userEquipmentRentData[el.model]"
                :label="el.label + '*'"
                mask="+7 (###) ###-##-##"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Поле обязательно для заполнения',
                ]"
              ></q-input>
            </template>
            <template v-if="el.type === 'mail'">
              <q-input
                color="black"
                bg-color="white"
                label-color="grey-6"
                outlined
                class="input-wrapper"
                v-model="userEquipmentRentData[el.model]"
                type="email"
                :label="el.label + '*'"
                lazy-rules
              ></q-input>
            </template>
            <template v-if="el.type === 'number'">
              <q-input
                color="black"
                bg-color="white"
                label-color="grey-6"
                min="1"
                outlined
                class="input-wrapper"
                v-model="userEquipmentRentData[el.model]"
                type="number"
                :label="el.label + '*'"
                lazy-rules
                :rules="[(val) => (val && val > 0) || 'Поле обязательно для заполнения']"
              ></q-input>
            </template>
          </div>
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
              :disable="!accept"
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
  border-radius: 4px;
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
@media (max-width: 500px) {
  :deep(.q-field__label) {
    font-size: 12px;
  }
}
</style>
