<script setup>
import EquipmentRentFormDialog from "./EquipmentRentFormDialog.vue";
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Array,
    required: true,
  },
  characteristics: {
    type: Array,
    required: true,
  },
  options: {
    type: Array,
    require: true,
  },
});

const dialogVisible = ref(false);
const rentDialog = ref(false);

const openDialog = () => {
  dialogVisible.value = true;
};

const closeDialog = () => {
  dialogVisible.value = false;
};
const openRentDialog = () => {
  dialogVisible.value = false;
  rentDialog.value = true;
};
</script>

<template>
  <q-responsive :ratio="4 / 3" class="partner-card">
    <q-card class="column partner-card__accent" flat clickable @click="openDialog">
      <img class="col image" :src="imgSrc" />
      <q-card-section class="partner-card__title">
        <q-item>
          <q-item-section class="partner-card__text">{{ title }}</q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </q-responsive>

  <!-- Диалоговое окно с увеличенной фотографией -->
  <q-dialog v-model="dialogVisible">
    <q-card class="q-pa-md" style="width: 90vw; max-width: 1200px; max-height: 80vh">
      <q-card-section class="q-pb-none" align="right">
        <q-icon
          name="close"
          size="md"
          color="primary"
          class="cursor-pointer close-icon"
          @click="closeDialog"
        ></q-icon>
      </q-card-section>
      <!-- Заголовок -->
      <q-card-section class="card__title">
        {{ title }}
      </q-card-section>
      <!-- Контент: фотография и описание -->
      <q-card-section class="row q-gutter-md q-pa-md">
        <!-- Фотография слева -->
        <div class="col-6">
          <img :src="imgSrc" style="width: 100%; height: auto; border-radius: 8px" />
        </div>

        <!-- Описание справа -->
        <div class="col-5 description__column">
          <p class="description">{{ description }}</p>
          <h4 class="price q-mb-md">Технические характеристики</h4>
          <ul class="characteristics__list price__item">
            <li
              v-for="(characteristic, index) in characteristics"
              :key="index"
              class="characteristics__list"
            >
              {{ characteristic }}
            </li>
          </ul>
          <h4 class="price q-mb-md">Стоимость аренды</h4>
          <p class="price__item">{{ price[0] }}</p>
          <p class="price__item">{{ price[1] }}</p>
          <q-btn class="form__button q-mt-md" color="primary" @click="openRentDialog"
            >Оставить заявку</q-btn
          >
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <EquipmentRentFormDialog
    v-model="rentDialog"
    :equipmentTitle="title"
    :options="props.options"
  />
</template>
<style scoped>
.partner-card {
  width: 400px;
  height: 300px;
  transition: 0.3s linear;
  border-radius: 18px;
}
.card__title {
  text-align: center;
  font-family: Montserrat-bold, serif;
  text-transform: uppercase;
  font-size: 18px;
  color: black;
}
.description {
  font-size: clamp(1.2rem, 1.1vw, 1rem);
  font-family: Montserrat-regular, serif;
  line-height: 20px;
}
.characteristics__list {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
  margin-bottom: 10px;
}
.characteristics__list li {
  color: inherit;
}

.characteristics__list li::marker {
  color: var(--q-primary);
}
.price {
  font-size: clamp(1.1rem, 1.1vw, 0.9rem);
  font-family: Montserrat-bold, serif;
  line-height: 20px;
}
.price__item {
  font-size: clamp(1.1rem, 1.1vw, 0.9rem);
  font-family: Montserrat-regular, serif;
  line-height: 20px;
}
.partner-card__accent {
  border: 1px solid var(--q-accent);
  border-radius: 8px;
}
.form__button {
  width: 200px;
  height: 40px;
  text-transform: none;
  border-radius: 4px;
  font-family: Montserrat-bold, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 21.6px;
  transition: 0.3s linear;
}
.form__button:hover {
  color: var(--q-accent) !important;
}
.description__column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.partner-card__title {
  background-color: var(--background-light-accent);
  border-top: 1px solid #b990511a;
  padding: 5px;
  min-height: 60px;
  font-family: Montserrat-bold, serif;
  font-size: clamp(0.8rem, 1vw, 1rem);
  line-height: 15.2px;
  min-height: 75px;
}
.image {
  object-fit: cover;
}

.partner-card__text {
  color: var(--color-black);
  text-transform: uppercase;
}
@media (hover: hover) {
  .partner-card:hover {
    -webkit-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
    box-shadow: 0px -1px 13px 1px rgba(34, 60, 80, 0.2);
    cursor: pointer;
  }
  .partner-card:hover .partner-card__text {
    color: var(--q-primary);
  }
}
@media (max-width: 768px) {
  .q-dialog .q-card {
    width: 95vw !important;
    max-width: none !important;
    padding: 10px;
    align-self: center;
  }

  .q-card-section.row {
    flex-direction: column;
  }

  .col-6,
  .col-5 {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0;
  }

  .description__column {
    gap: 15px;
  }

  .form__button {
    width: 100%;
  }

  .image {
    max-height: 300px;
    object-fit: cover;
  }
}
.close-icon {
  display: flex;
  margin-left: auto;
  transition: 0.3s linear;
}
.close-icon:hover {
  transform: scale(1.2);
}
</style>
