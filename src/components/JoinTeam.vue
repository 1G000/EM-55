<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Присоединяйся к команде!",
  },
  name: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    default: `"Компания «Электромонтаж 55» организована в 1994 году. На сегодняшний
          день «Электромонтаж 55» осуществляет комплексное решение задач,
          начиная с проектирования и получения необходимых согласований,
          изготовления электротехнического оборудования 0,4/10кВ, выполнение
          земляных («нулевой» цикл), строительных (монтаж и подключение
          трансформаторных подстанций и блочных комплектных трансформаторных
          подстанций), электромонтажных (монтаж оборудования, прокладка
          кабельных трасс до 10 кВ), пуско-наладочных работ, восстановлением
          благоустройства (асфальтирование, газоны, тротуарная плитка и др.),
          заканчивая вводом объектов в эксплуатацию. ООО «Электромонтаж 55»
          является производителем электротехнического оборудования (УБКТП, КТПН,
          КТП, КЛ 209-214, УВР, УВРУ, ГРЩ, ВРУ, ЯВЗ, ШУ, ОЩ, ШСН, ШБП, УКРМ и
          пр.), пройдена аккредитация в ПАО «Ленэнерго»."`,
  },
});
</script>

<template>
  <div class="join__team">
    <h3>{{ title }}</h3>
    <div class="contact">
      <span>{{ name }}</span>
      <span :style="$q.screen.width < 1510 ? 'padding-bottom: 20px' : ''">{{
        jobTitle
      }}</span>
      <div class="contact__items">
        <a
          :href="`https://t.me/${phone}`"
          class="contact-phone__numbers"
          target="_blank"
        >
          <q-icon name="telegram" class="icon" size="25px" alt="telegram">
          </q-icon>
          Написать в Telegram
        </a>
        <a
          :href="`tel: ${phone}`"
          class="contact-phone__numbers"
          target="_blank"
        >
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
          {{ phoneNumber }}
        </a>
        <a :href="`mailto:${mail}`" target="_blank" class="contact__mail">
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
            />
          </svg>
          {{ mail }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.join__team {
  background-color: var(--background-light-accent);
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1rem, 2.3vw, 1.2rem);
  line-height: 1.5em;
  padding: 40px;
  border-radius: 8px;
}
h3 {
  font-family: Montserrat-bold, serif;
  font-size: clamp(1.2rem, 2.3vw, 1.8rem);
  line-height: 1em;
  color: var(--q-primary);
}
.icon {
  color: var(--q-primary);
}
.contact-phone__numbers {
  display: flex;
  align-items: center;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1rem, 2.3vw, 1.2rem);
  line-height: 1.3em;
  color: black;
  gap: 10px;
}
.contact__mail {
  display: flex;
  align-items: center;
  font-family: Montserrat-regular, serif;
  font-size: clamp(1rem, 2.3vw, 1.2rem);
  line-height: 1.3em;
  color: black;
  gap: 10px;
}
.contact {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  font-size: clamp(1rem, 2.3vw, 1.2rem);
}
.contact__items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (hover: hover) {
  a:hover {
    cursor: pointer;
    color: var(--q-primary);
  }
}
@media screen and (max-width: 1510px) {
  .contact {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media screen and (max-width: 600px) {
  .join__team {
    padding: 20px 15px;
  }
}
</style>
