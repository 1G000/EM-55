<template>
  <div class="section">
    <h4 class="section__title">{{ title }}</h4>
    <q-card class="my-card" flat>
      <q-list class="q__list">
        <q-item
          v-for="(employee, employeeIndex) in employees"
          :key="employeeIndex"
          clickable
        >
          <q-item-section avatar>
            <q-img
              :src="employee.imgSrc"
              :lazy-src="employee.imgSrc"
              style="height: 160px; width: 130px"
            />
          </q-item-section>
          <q-item-section style="width: 225px">
            <q-item-label class="contact__item-specialization">{{
              employee.specialization
            }}</q-item-label>
            <q-item-label class="contact__item-name" caption>{{
              employee.fullName
            }}</q-item-label>
            <div v-if="employee.phoneNumbers.length > 0" class="phone__number">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7037 12.2682L14.1637 11.9782C13.865 11.9431 13.5623 11.9762 13.2782 12.0749C12.9942 12.1736 12.7362 12.3354 12.5237 12.5482L10.6837 14.3882C7.84507 12.9441 5.53774 10.6368 4.09367 7.79819L5.94367 5.94819C6.37367 5.51819 6.58367 4.91819 6.51367 4.30819L6.22367 1.78819C6.16719 1.30028 5.93314 0.850214 5.56614 0.523784C5.19913 0.197354 4.72484 0.0173884 4.23367 0.0181912H2.50367C1.37367 0.0181912 0.433673 0.958191 0.503673 2.08819C1.03367 10.6282 7.86367 17.4482 16.3937 17.9782C17.5237 18.0482 18.4637 17.1082 18.4637 15.9782V14.2482C18.4737 13.2382 17.7137 12.3882 16.7037 12.2682Z"
                  fill="#86002A"
                />
              </svg>

              <q-item-label caption class="numbers__container">
                <span
                  v-for="(phone, phoneIndex) in employee.phoneNumbers"
                  :key="phoneIndex"
                  class="contact-phone__numbers"
                >
                  <span>{{ phone }}</span>
                </span>
              </q-item-label>
            </div>
            <q-item-label caption v-if="employee.email" class="contact__mail">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 0C21.7652 0 22.0196 0.105357 22.2071 0.292893C22.3946 0.48043 22.5 0.734784 22.5 1V17.007C22.4982 17.2696 22.3931 17.521 22.2075 17.7068C22.0219 17.8926 21.7706 17.9979 21.508 18H3.492C3.22881 17.9997 2.9765 17.895 2.79049 17.7088C2.60448 17.5226 2.5 17.2702 2.5 17.007V16H20.5V4.3L12.5 11.5L2.5 2.5V1C2.5 0.734784 2.60536 0.48043 2.79289 0.292893C2.98043 0.105357 3.23478 0 3.5 0H21.5ZM8.5 12V14H0.5V12H8.5ZM5.5 7V9H0.5V7H5.5ZM20.066 2H4.934L12.5 8.81L20.066 2Z"
                  fill="#86002A"
                /></svg
              >{{ employee.email }}</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
  <hr class="dividing__line" />
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  employees: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.dividing__line {
  border: none;
  height: 1px;
  width: 100%;
  background-color: var(--q-primary);
  margin-bottom: 30px;
}

.my-card {
  align-self: center;
  width: 70%;
}

.section {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}
.q-list {
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.q-item {
  max-width: 100%;
  display: flex;
  gap: 10px;
}

.q-item__section--main {
  gap: 10px;
}

.q-item__section--avatar {
  width: 137px;
  height: 160px;
}

.numbers__container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-phone__numbers {
  display: flex;
  flex-direction: column;
  font-family: Montserrat-regular, serif;
  font-size: 16px;
  color: black;
}

.phone__number {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact__mail {
  font-family: Montserrat-regular, serif;
  font-size: 16px;
  color: black;
  display: flex;
  gap: 10px;
}

.section__title {
  width: 30%;
  font-family: Montserrat-regular, serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2em;
  color: rgb(0, 0, 0);
}

.contact__item {
  width: 100%;
  display: flex;
  gap: 10px;
}
.contact__item-specialization,
.contact__item-name {
  font-family: Montserrat-regular, serif;
  font-size: 16px;
  color: black;
}

@media screen and (max-width: 645px) {
  .section {
    flex-direction: column;
    gap: 20px;
  }
  .q-item {
    flex-direction: column;
    align-items: center;
  }

  .q-list {
    justify-content: center;
  }

  .section__title {
    width: 100%;
    text-align: center;
  }

  .q-item__section {
    min-width: 250px;
  }

  .q-item__section--side {
    display: flex;
    align-items: center;
    padding: 0;
  }

  .contact__item-specialization,
  .contact__item-name {
    text-align: center;
  }
}
</style>
